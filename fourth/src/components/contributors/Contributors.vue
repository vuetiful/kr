<template lang="html">
  <el-container id="contributors" class="container" direction="vertical" v-bind:class="{ 'is-focused' : focused}">
    <h2 class="heading">Contributors</h2>
    <span class="subheading">도움의 손길</span>
    <div id="dim-of-contributors"></div>
    <el-container class="container-sponsor">
      <el-row class="sponsors" :gutter="20" type="flex" style="flex-wrap: wrap;" justify="center">
        <el-col :xs="16" :sm="7" :lg="5" v-for="sponsor in sponsors" :key="sponsor.name">
          <sponsor :sponsor="sponsor"></sponsor>
        </el-col>
      </el-row>
    </el-container>
    <div class="container-volunteers">
      <volunteer v-for="volunteer in volunteers" :volunteer="volunteer" :key="volunteer.name" :data-id="volunteer.name" @focusOnVolunteer="focusOnVolunteer" @unFocusOnVolunteer="unFocusOnVolunteer"></volunteer>
    </div>
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
      intervalIds: [],
      assignedPositions: {}
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
        const moveOn = self.moveOn(el)
        if (typeof self.assignedPositions[el.getAttribute('data-id')] === 'undefined') {
          self.assignedPositions[el.getAttribute('data-id')] = moveOn
        }
      }, Math.floor(Math.random() * (800 - 500 + 1) + 500))

      this.intervalIds[el.getAttribute('data-id')] = intervalId
      setTimeout(function () {
        self.painting(el)
      }, 800)
    },
    assignPosition (el) {

    },
    painting (el) {
      var widths = [
        55,
        60,
        65,
        70,
        75,
        80
      ]
      const maxWidth = widths[Math.floor(Math.random() * widths.length)]
      el.style.display = 'block'

      for (var i = 0; i <= maxWidth; i++) {
        setTimeout(function () {
          el.style.width = i.toString() + 'px'
        }, 10)
      }
    },
    moveOn (el) {
      const minimumScopeOfActivityX = parseInt(document.querySelector('.container-volunteers').offsetHeight) - 100
      const maximumScopeOfActivityY = parseInt(document.querySelector('.container-volunteers').offsetWidth) - 100
      const maxScopeX = 15
      const maxScopeY = 15

      var scopeOfActivityX = Math.floor(Math.random() * minimumScopeOfActivityX - 0 + 1) + 0
      var scopeOfActivityY = Math.floor(Math.random() * maximumScopeOfActivityY - 0 + 1) + 0

      if (getComputedStyle(el)['transform'] !== 'none' && getComputedStyle(el)['transform'] != null) {
        var currentScopeOfActivityX = parseInt(/\(\s*([^)]+?)\s*\)/.exec(getComputedStyle(el)['transform'])[0].split(/\s*,\s*/)[5].replace(/\)/g, '')) + 1
        var currentScopeOfActivityY = parseInt(/\(\s*([^)]+?)\s*\)/.exec(getComputedStyle(el)['transform'])[0].split(/\s*,\s*/)[4]) + 1

        var jumpToX = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        var jumpToY = Math.floor(Math.random() * (2 - 1 + 1) + 1)

        scopeOfActivityX = (currentScopeOfActivityX < minimumScopeOfActivityX) ? ((el.getAttribute('arithmetics') === 'plus') ? currentScopeOfActivityX - jumpToX : currentScopeOfActivityX + jumpToX) : (currentScopeOfActivityX - jumpToX)
        scopeOfActivityY = (currentScopeOfActivityY < maximumScopeOfActivityY) ? ((el.getAttribute('arithmetics') === 'plus') ? currentScopeOfActivityY - jumpToY : currentScopeOfActivityY + jumpToY) : (currentScopeOfActivityY - jumpToY)

        if (typeof this.assignedPositions[el.getAttribute('data-id')] !== 'undefined' && (this.assignedPositions[el.getAttribute('data-id')][0] + maxScopeX) <= scopeOfActivityX) {
          scopeOfActivityX = this.assignedPositions[el.getAttribute('data-id')][0]
        }

        if (typeof this.assignedPositions[el.getAttribute('data-id')] !== 'undefined' && (this.assignedPositions[el.getAttribute('data-id')][1] + maxScopeY) <= currentScopeOfActivityY) {
          scopeOfActivityY = this.assignedPositions[el.getAttribute('data-id')][1]
        }
      }

      el.setAttribute('arithmetics', (el.getAttribute('arithmetics') === 'minus') ? 'plus' : 'minus')
      el.style.transform = 'matrix3d(1, 1.74533e-06, 0, 0, -1.74533e-06, 1, 0, 0, 0, 0, 1, 0, ' + scopeOfActivityY + ', ' + scopeOfActivityX + ', 0, 1)'

      return [scopeOfActivityX, scopeOfActivityY]
    },
    lightUp (nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i]
        var radius = 0
        var interval = window.setInterval(function () {
          node.style.webkitMask = '-webkit-gradient(radial, 17 17, ' + radius + ', 17 17, ' + (radius + 15) + ', from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)))'
          radius++
          if (node.offsetWidth === radius) {
            window.clearInterval(interval)
          }
        }, 10)
      }
    },
    checkVisible (elm, threshold, mode) {
      threshold = threshold || 0
      mode = mode || 'visible'

      var rect = elm.getBoundingClientRect()
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
      var above = rect.bottom - threshold < 0
      var below = rect.top - viewHeight + threshold >= 0

      return mode === 'above' ? above : (mode === 'below' ? below : !above && !below)
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
    const self = this
    const contributorsElm = document.getElementById('contributors')
    const scrollDist = parseInt(contributorsElm.offsetHeight)
    const ExtraDist = (document.getElementById('program').offsetHeight / 3)
    const scrollMode = 'above'
    var alreadySeen = false

    window.onscroll = function () {
      if (self.checkVisible(contributorsElm, (scrollDist + ExtraDist), scrollMode) && !alreadySeen) {
        console.log('gogo')
        alreadySeen = true
        self.spreadOut()
        self.lightUp(document.querySelectorAll('.container-sponsor img'))
      }
    }
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
      opacity: 0.3;
    }
  }

  #contributors {
    padding-bottom: 75px;
    width: 100%;
    background-color: #fff;
    overflow:  hidden;
    #dim-of-contributors {
      position:absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height:100%;
      width:100%;
      background-size: cover;
    }

    .container-sponsor {
      position: relative;
      z-index: 9;
    }
    .container-sponsor > .sponsors {
      z-index: 9;
      width: 100%;
      position: relative;

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
        font-weight: bold;
        margin-top: 8px;
        color: #111;
        text-decoration: underline;
      }
    }

    .container-volunteers {
      position : absolute;
      z-index : 10;
      width:100%;
      height:100%;
      display: block;

      > .el-container {
        display: none;
        width: 20px;
        position : absolute;
        opacity: .6;
        transition: 300ms linear;

        a {
          display: block;
          position : relative;
          border: 2px solid #222;
          border-radius: 50%;
        }
        > a > img {
          width: 100%;
          border-radius: 50%;
        }
        .name {
          position: absolute;
          top: 50%;
          width: 100%;
          left: 0;
          text-align: center;
          color: #fff;
          font-size: 80%;
          font-weight: 800;
          transform: translateY(-50%);
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
