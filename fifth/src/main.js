// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/assets/css/import.css'
import ElementUI from 'element-ui'
import '@/assets/css/element-variables.scss'
import App from './App'

Vue.use(ElementUI)

Vue.mixin({
  data () {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      scrollY: window.scrollY
    }
  },
  computed: {
    mobile () {
      return this.windowWidth < 375
    },
    smartphone () {
      return this.windowWidth >= 375 && this.windowWidth < 600
    },
    tablet () {
      return this.windowWidth >= 600 && this.windowWidth < 1280
    },
    laptop () {
      return this.windowWidth >= 1280 && this.windowWidth < 1920
    },
    desktop () {
      return this.windowWidth >= 1920
    },
    pageOne () {
      return this.scrollY < this.windowHeight
    }
  },
  mounted () {
    window.addEventListener('resize', this.getWindowSize)
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getWindowWidth () {
      if (window.innerWidth) {
        this.windowWidth = window.innerWidth
      }
      if (window.innerHeight) {
        this.windowHeight = window.innerHeight
      }
    },
    handleScroll (event) {
      if (window.scrollY) {
        this.scrollY = window.scrollY
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowSize)
    window.removeEventListener('scroll', this.handleScroll)
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
