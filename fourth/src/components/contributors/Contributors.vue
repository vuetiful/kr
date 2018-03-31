<template lang="html">
  <el-container id="contributors" class="container" direction="vertical" v-bind:class="{ 'is-focused' : focused}">
    <h2 class="heading">
      도움의 손길
    </h2>
    <div id="dim-of-contributors"></div>
    <el-container class="container-sponsor">
      <div class="sponsors">
        <el-col v-for="sponsor in sponsors" :key="sponsor.name">
          <sponsor :sponsor="sponsor"></sponsor>
        </el-col>
      </div>
    </el-container>
    <el-container class="container-volunteers">
      <volunteer v-for="volunteer in volunteers" :volunteer="volunteer" :key="volunteer.name" :data-id="volunteer.name" @focusOnVolunteer="focusOnVolunteer" @unFocusOnVolunteer="unFocusOnVolunteer"></volunteer>
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
      regularParticipants,
      focused: false,
      intervalIds: []
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
      var intervalId = setInterval(function () {
        self.moveOn(el)
      }, Math.floor(Math.random() * (800 - 500 + 1) + 500))

      this.intervalIds[el.getAttribute('data-id')] = intervalId
    },
    painting (el) {
      el.style.opacity = 0.6
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
    focusOnVolunteer (volunteer, event) {
      this.focused = true
      event.currentTarget.style.opacity = 1
      clearInterval(this.intervalIds[volunteer.name])
      document.getElementById('dim-of-contributors').style.backgroundImage = 'url(' + volunteer.backgroundImageUrl + ')'
    },
    unFocusOnVolunteer (volunteer, event) {
      this.focused = false
      event.currentTarget.style.opacity = null
      this.injection(document.querySelector('.container-volunteers > *[data-id=' + volunteer.name + ']'))
      document.getElementById('dim-of-contributors').style.backgroundImage = 'none'
    }
  },
  mounted () {
    this.spreadOut()
  }
}
</script>

<style lang="less">
  #contributors.is-focused {
    #dim-of-contributors {
      z-index:98;
    }
    .container-volunteers {
      z-index:99;
    }
    .container-volunteers > .el-container > a {
      opacity: 0.1;
    }
  }

  #contributors {
    overflow:  hidden;
    height: 400px;
    width: 100%;
    background-color: #fff;

    > h2 {
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      z-index: 9;
      margin-top: 15px;
    }

    #dim-of-contributors {
      position:absolute;
      top:0px;
      left:0px;
      height:100%;
      width:100%;
      background-size: cover;
    }

    .container-sponsor {
      position : absolute;
      width : 100%;
      height : 100%;
    }

    .container-sponsor > .sponsors {
      margin : auto;
      z-index: 15;
      max-width: 100%;

      img {
        max-width : 100%;
      }

      > .el-col {
        width : 200px
      }

      > .el-col > .el-container {
        display: inline-block;
      }

      > .el-col > .el-container h3{
        color: #fff;
        font-weight: bold;
        margin-top: 8px;
      }
    }

    .container-volunteers {
      position : relative;
      z-index : 10;

      > .el-container {
        position : absolute;
        opacity: .6;
        transition: opacity 300ms;

        a {
          position : relative;
          border: 2px solid #222;
          border-radius: 50%;
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
    }

    p.participants {
      position:relative;
      text-align: center;
      color: #fff;
      padding: 20px;
      z-index:9
    }
  }
</style>
