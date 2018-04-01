<template lang="html">
  <el-container id="contributors" class="container" direction="vertical" v-bind:class="{ 'is-focused' : focused}">
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
var Promise = require('bluebird')
export default {
  data () {
    return {
      sponsors,
      volunteers,
      participantSponsors,
      regularParticipants,
      focused: false,
      intervalIds: [],
      assignedPositions: {},
      trespasser: []
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
    removeVolunteers () {
      const self = this
      return new Promise(function (resolve, reject) {
        self.focused = false
        for (var i = 0; i < Object.keys(self.intervalIds).length; i++) {
          const key = Object.keys(self.intervalIds)[i]
          document.querySelector('.container-volunteers > *[data-id=' + key + ']').style.display = 'none'
          document.querySelector('.container-volunteers > *[data-id=' + key + ']').style.transform = null

          clearInterval(self.intervalIds[key])
          if ((i + 1) === Object.keys(self.intervalIds).length) {
            self.intervalIds = []
            self.assignedPositions = {}
            resolve(true)
          }
        }
      })
    },
    injection (el) {
      const self = this
      var intervalId = setInterval(function () {
        const moveOn = self.moveOn(el)
        if (typeof self.assignedPositions[el.getAttribute('data-id')] === 'undefined') {
          self.assignedPositions[el.getAttribute('data-id')] = moveOn
        }
      }, Math.floor(Math.random() * (500 - 300 + 1) + 500))

      this.intervalIds[el.getAttribute('data-id')] = intervalId
      setTimeout(function () {
        self.painting(el)
      }, 800)
    },
    getAbleScopeOfActivity (maximumScopeOfActivityX, maximumScopeOfActivityY, el) {
      const sponsorFirstRect = document.querySelectorAll('.container-sponsor > * img')[0].getBoundingClientRect()
      const sponsorLastRect = document.querySelectorAll('.container-sponsor > * img')[1].getBoundingClientRect()
      const sponsorExtraSpace = 120
      const volunteerExtraSpace = 100

      var x = (maximumScopeOfActivityX / Object.keys(this.volunteers).length) * Object.keys(this.assignedPositions).length
      var y = Math.floor(Math.random() * (maximumScopeOfActivityY - 100 + 1) + 100)

      if (maximumScopeOfActivityY <= (y + volunteerExtraSpace)) {
        y = (y - volunteerExtraSpace)
      }

      if (x >= (sponsorFirstRect.x - sponsorExtraSpace) && x <= (sponsorLastRect.x + sponsorExtraSpace)) {
        x = Math.floor(Math.random() * (500 - 300 + 1) + 300) + (((x - (sponsorFirstRect.x - sponsorExtraSpace)) <= (x - (sponsorLastRect.x + sponsorExtraSpace))) ? x + (x - (sponsorFirstRect.x - sponsorExtraSpace)) : x - (x - (sponsorLastRect.x + sponsorExtraSpace)))
      }

      for (var i = 0; i < Object.keys(this.assignedPositions).length; i++) {
        const assignedPosition = this.assignedPositions[Object.keys(this.assignedPositions)[i]]
        if (x >= assignedPosition[0] && x <= (assignedPosition[0] + sponsorExtraSpace)) {
          x = (maximumScopeOfActivityX <= ((assignedPosition[0] + sponsorExtraSpace) + 100)) ? (x - 100) : (assignedPosition[0] + sponsorExtraSpace) + 100
        }
        if (y >= assignedPosition[1] && y <= (assignedPosition[1] + sponsorExtraSpace)) {
          y = (maximumScopeOfActivityY <= ((assignedPosition[1] + sponsorExtraSpace) + 50)) ? (y - 50) : ((assignedPosition[1] + sponsorExtraSpace) + 50)
        }
      }

      return [
        x,
        y
      ]
    },
    assignPosition (el) {
      const maximumScopeOfActivityX = parseInt(document.querySelector('.container-volunteers').offsetWidth) - 150
      const maximumScopeOfActivityY = parseInt(document.querySelector('.container-volunteers').offsetHeight) - 150

      const maxScopeX = 15
      const maxScopeY = 15

      const ableScope = this.getAbleScopeOfActivity(maximumScopeOfActivityX, maximumScopeOfActivityY, el)
      var scopeOfActivityX = ableScope[0]
      var scopeOfActivityY = ableScope[1]

      if (getComputedStyle(el)['transform'] !== 'none' && getComputedStyle(el)['transform'] != null) {
        var currentScopeOfActivityX = parseInt(/\(\s*([^)]+?)\s*\)/.exec(getComputedStyle(el)['transform'])[0].split(/\s*,\s*/)[4].replace(/\)/g, '')) + 1
        var currentScopeOfActivityY = parseInt(/\(\s*([^)]+?)\s*\)/.exec(getComputedStyle(el)['transform'])[0].split(/\s*,\s*/)[5]) + 1

        var jumpToX = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        var jumpToY = Math.floor(Math.random() * (2 - 1 + 1) + 1)

        scopeOfActivityX = (currentScopeOfActivityX < maximumScopeOfActivityX) ? ((el.getAttribute('arithmetics') === 'plus') ? currentScopeOfActivityX - jumpToX : currentScopeOfActivityX + jumpToX) : (currentScopeOfActivityX - jumpToX)
        scopeOfActivityY = (currentScopeOfActivityY < maximumScopeOfActivityY) ? ((el.getAttribute('arithmetics') === 'plus') ? currentScopeOfActivityY - jumpToY : currentScopeOfActivityY + jumpToY) : (currentScopeOfActivityY - jumpToY)

        if (typeof this.assignedPositions[el.getAttribute('data-id')] !== 'undefined' && (this.assignedPositions[el.getAttribute('data-id')][0] + maxScopeX) <= scopeOfActivityX) {
          scopeOfActivityX = this.assignedPositions[el.getAttribute('data-id')][0]
        }

        if (typeof this.assignedPositions[el.getAttribute('data-id')] !== 'undefined' && (this.assignedPositions[el.getAttribute('data-id')][1] + maxScopeY) <= scopeOfActivityY) {
          scopeOfActivityY = this.assignedPositions[el.getAttribute('data-id')][1]
        }
      }
      el.style.transform = 'matrix3d(1, 1.74533e-06, 0, 0, -1.74533e-06, 1, 0, 0, 0, 0, 1, 0, ' + scopeOfActivityX + ', ' + scopeOfActivityY + ', 0, 1)'
      return [scopeOfActivityX, scopeOfActivityY]
    },
    painting (el) {
      var widths = [
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
      const scopeOfActivity = this.assignPosition(el)
      el.setAttribute('arithmetics', (el.getAttribute('arithmetics') === 'minus') ? 'plus' : 'minus')
      return scopeOfActivity
    },
    lightUp (node) {
      var radius = 0
      var interval = window.setInterval(function () {
        node.style.webkitMask = '-webkit-gradient(radial, 17 17, ' + radius + ', 17 17, ' + (radius + 15) + ', from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)))'
        radius++
        if (node.offsetWidth === radius) {
          window.clearInterval(interval)
        }
      }, 10)
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
        alreadySeen = true
        self.spreadOut()
        const sponsorImages = document.querySelectorAll('.container-sponsor img')
        for (var i = 0; i < sponsorImages.length; i++) {
          self.lightUp(sponsorImages[i])
        }
      }
    }

    window.onresize = function () {
      self.removeVolunteers().then(function () {
        self.spreadOut()
      })
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
    padding: 60px 0 40px;
    background-color: #fff;
    width: 100%;
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
        width: 100%;
      }

      > .el-col {
        width : 200px
      }

      > .el-col > .el-container {
        display: inline-block;
      }

      > .el-col > .el-container h3{
        font-size: 1.2em;
        margin-top: 8px;
        color: #111;
      }
    }

    .container-volunteers {
      position : absolute;
      z-index : 10;
      width:100%;
      height:85%;
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
          border: 1px solid #ccc;
          border-radius: 50%;
        }
        > a > img {
          width: 100%;
          border-radius: 50%;
        }
        .name {
          position: absolute;
          top: 75%;
          width: 100%;
          left: 0;
          text-align: center;
          color: #fff;
          text-shadow: 0 0 2px #35495e;
          font-size: 80%;
          font-weight: 500;
          transform: translateY(-50%);
        }
      }
    }

    p.participants {
      position:relative;
      margin-top: 20px;
      font-size: 0.8em;
      text-align: center;
      color: #35495e;
      padding: 20px;
      z-index:9
    }
  }
</style>
