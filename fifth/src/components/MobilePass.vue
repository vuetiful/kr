<template>
  <el-card class="box-card" v-if="state != loginStates.INTERMIDIATE">
    <el-form v-if="state === loginStates.BEFORE_LOGIN" @submit.prevent="login">
      <el-form-item label="참가 신청하신 이메일 주소로 로그인 하세요">
        <el-input v-model="email" @keyup.enter.prevent="login" />
        <el-button type="primary" @click="login">이메일로 로그인</el-button>
      </el-form-item>
    </el-form>
    <div v-if="state === loginStates.MAIL_SENT">
      {{this.email}} 로 로그인 링크가 발송되었습니다. 메일함으로 이동하셔서 다음 절차를 진행해주세요.
      이 창은 닫아도 좋습니다.
    </div>
    <div v-if="state === loginStates.IN_PROGRESS">
      {{this.email}} 로 로그인을 진행중입니다....
    </div>
    <template v-if="state === loginStates.LOGGED_IN">
      <h2 slot="header">모바일 Pass</h2>
      <p>{{attendee.name}} 님</p>
      <p>{{attendee.email}}</p>
      <qr-code :text="attendee.id" />
      <div>
        <el-button @click="logout">로그아웃</el-button>
      </div>
    </template>
  </el-card>
</template>
<script>
import { loginStates, MEETUP_ID } from '@/store/store'

const QrCode = {
  functional: true,
  render (h, ctx) {
    return h('img', {domProps: {
      src: `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${ctx.props.text}&chld=L|1&choe=UTF-8`
    }})
  }
}

function parseQuery (query) {
  let qa = {}
  decodeURIComponent(query).replace(/\??([^=]+)=([^&]*)(&|$)/g, (match, $1, $2) => {
    qa[$1] = $2
    return match
  })
  return qa
}

let auth = window.firebase.auth()
let db = window.firebase.firestore()

export default {
  name: 'mobile-pass',
  components: {
    QrCode
  },
  data () {
    return {
      loginStates,
      state: loginStates.INTERMIDIATE,
      email: '',
      attendee: {
        id: 'vuetiful-korea',
        email: 'you@email.com',
        name: 'ㅇㅇㅇ',
        staff: false,
        speaker: false,
        attend: false
      }
    }
  },
  mounted () {
    let loc = window.location.href
    let qs = parseQuery(window.location.search)

    auth.onAuthStateChanged(user => {
      let off = null
      if (user) {
        off = db.doc(`meetup/${MEETUP_ID}`).collection('attendee').where('email', '==', user.email).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(({type, doc}) => {
            if (['added', 'modified'].includes(type)) {
              this.attendee.id = doc.id
              Object.assign(this.attendee, doc.data())
            }
          })
          this.state = loginStates.LOGGED_IN
        })
        
      } else {
        off && off()
        if (qs.action === 'auth-callback') {
          this.state = loginStates.IN_PROGRESS
        } else {
          this.state = loginStates.BEFORE_LOGIN
        }
      }
    })

    if (qs.action === 'auth-callback' && auth.isSignInWithEmailLink(loc)) {
      this.email = qs.email
      auth.signInWithEmailLink(this.email, loc).then(result => {
        // TODO: perform get user info
        // this.state = loginStates.LOGGED_IN
        window.location.href = '/'
      }).catch(e => {
        alert(e)
      })
    }
  },
  methods: {
    login () {
      let url = `${location.protocol}//${location.host}/?email=${this.email}&action=auth-callback`
      auth.sendSignInLinkToEmail(this.email, {
        url,
        handleCodeInApp: true
      }).then(() => {
        this.state = loginStates.MAIL_SENT
      }).catch(e => {
        alert(e)
      })
    },
    logout () {
      auth.signOut().then(() => {
        this.state = loginStates.BEFORE_LOGIN
      })
    }
  }
}
</script>

<style>
.mobile-pass {
  max-width: 480px;
  width: 100%;
}
</style>
