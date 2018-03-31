<template lang="html">
  <el-container id="contributors" class="container" direction="vertical">
    <h2 class="heading">
      도움의 손길
    </h2>
    <el-container class="container-sponsor">
      <div class="sponsors">
        <el-col v-for="sponsor in sponsors" :key="sponsor.name">
          <sponsor :sponsor="sponsor"></sponsor>
        </el-col>
      </div>
    </el-container>
    <el-container class="container-volunteers">
      <volunteer v-for="volunteer in volunteers" :volunteer="volunteer" :key="volunteer.name" @focusOnVolunteer="focusOnVolunteer" @unfocusOnVolunteer="unfocusOnVolunteer"></volunteer>
    </el-container>
    <p class="participants">
      <span class="participant-sponsor" v-for="(participantSponsor, index) in participantSponsors" :key="index">
        {{ participantSponsor }}
        <span v-if="index != participantSponsors.length - 1">, </span>
      </span>
      외 {{ regularParticipants.length }}명의 기부천사
    </p>
  </el-container>
</template>

<script>
import { sponsors, volunteers, participantSponsors, regularParticipants } from '@/store/store'
import Sponsor from '@/components/contributors/Sponsor'
import Volunteer from '@/components/contributors/Volunteer'
export default {
  data () {
    return {
      sponsors,
      volunteers,
      participantSponsors,
      regularParticipants
    }
  },
  components: {
    Sponsor,
    Volunteer
  },
  methods: {
    spreadOut () {
      for (var i = 0; i < document.querySelectorAll('.container-volunteers > *').length; i++) {
        this.injection(document.querySelectorAll('.container-volunteers > *')[i])
      }
    },
    injection (el) {
      const self = this
      setInterval(function () {
        self.moveOn(el)
      }, 300)
    },
    moveOn (el) {
      const minimumScopeOfActivityX = parseInt(document.querySelector('.container-volunteers').offsetHeight)
      const maximumScopeOfActivityY = parseInt(document.querySelector('.container-volunteers').offsetWidth)

      var scopeOfActivityX = Math.floor(Math.random() * minimumScopeOfActivityX - 0 + 1) + 0
      var scopeOfActivityY = Math.floor(Math.random() * maximumScopeOfActivityY - 0 + 1) + 0

      if (getComputedStyle(el)['transform'] !== 'none') {
        var currentScopeOfActivityX = parseInt(/\(\s*([^)]+?)\s*\)/.exec(getComputedStyle(el)['transform'])[0].split(/\s*,\s*/)[5].replace(/\)/g, '')) + 1
        var currentScopeOfActivityY = parseInt(/\(\s*([^)]+?)\s*\)/.exec(getComputedStyle(el)['transform'])[0].split(/\s*,\s*/)[4]) + 1

        var jumpToX = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        var jumpToY = Math.floor(Math.random() * (2 - 1 + 1) + 1)

        scopeOfActivityX = (currentScopeOfActivityX < minimumScopeOfActivityX) ? ((el.getAttribute('arithmetics') === 'plus') ? currentScopeOfActivityX - jumpToX : currentScopeOfActivityX + jumpToX) : (currentScopeOfActivityX - jumpToX)
        scopeOfActivityY = (currentScopeOfActivityY < maximumScopeOfActivityY) ? ((el.getAttribute('arithmetics') === 'plus') ? currentScopeOfActivityY - jumpToY : currentScopeOfActivityY + jumpToY) : (currentScopeOfActivityY - jumpToY)
      }

      el.setAttribute('arithmetics', (el.getAttribute('arithmetics') === 'minus') ? 'plus' : 'minus')
      el.style.transform = 'matrix3d(1, 1.74533e-06, 0, 0, -1.74533e-06, 1, 0, 0, 0, 0, 1, 0, ' + scopeOfActivityY + ', ' + scopeOfActivityX + ', 0, 1)'
    },
    focusOnVolunteer (volunteer) {
      document.getElementById('contributors').style.backgroundImage = 'url(' + volunteer.backgroundImageUrl + ')'
    },
    unfocusOnVolunteer (volunteer) {
      document.getElementById('contributors').style.backgroundImage = 'none'
    }
  },
  mounted () {
    this.spreadOut()
  }
}
</script>

<style lang="less">
  #contributors {
    overflow:  hidden;
    height: 400px;
    width: 100%;
    background-color: #262827;
    background-size: cover;

    > h2 {
      font-size: 18px;
      font-weight: 800;
      color: #fff
    }

    .container-sponsor {
      position : absolute;
      width : 100%;
      height : 100%;
    }

    .container-sponsor > .sponsors {
      margin : auto;
      z-index: 9
    }

    .container-sponsor > .sponsors > .el-col {
      width : 200px
    }

    .container-sponsor > .sponsors > .el-col > .el-container {
      display: inline-block;
    }

    .container-sponsor > .sponsors > .el-col > .el-container h3 {
      color: #fff;
      font-weight: bold;
      margin-top: 8px;
    }

    .container-volunteers {
      position : relative;
    }

    .container-volunteers > .el-container {
      position : absolute;

      a {
        position : relative;
      }
      > a > img {
        border-radius: 50%;
      }
      .name {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
        text-align: center;
        top: 45px;
        color: #fff;
      }
    }

    p.participants {
      text-align: center;
      color: #fff;
      padding: 20px;
    }
  }
</style>
