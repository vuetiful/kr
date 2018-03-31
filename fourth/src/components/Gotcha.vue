<template lang="html">
  <el-container id="gotcha" class="gotcha" direction="vertical" :style="{ height: `${innerHeight}px` }">
    <el-carousel indicator-position="none" :interval="10000" trigger="click" class="bg-carousel">
      <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
    </el-carousel>
    <div class="bg-dot"></div>
    <div class="center" :class="{ laptop, desktop }">
      <img src="~@/assets/logo.png" :alt="generalInfo.intro" :title="generalInfo.intro" class="logo" :class="{ laptop, desktop }">
      <div class="info" :class="{ laptop, desktop }">
        <p class="date">{{ generalInfo.date }}<br v-if="mobile || smartphone"><span class="time"> {{ generalInfo.time}}</span></p>
        <p class="location">{{ generalInfo.location }}</p>
      </div>
      <el-button type="primary" :class="{ laptop, desktop }" @click="register" target="_blank" class="register-btn">참가 신청</el-button>
    </div>
    <svg class="arrows">
      <path class="a" d="M0 0 L15 16 L30 0"></path>
    </svg>
  </el-container>
</template>

<script>
import { generalInfo } from '@/store/store'
export default {
  data () {
    return {
      generalInfo
    }
  },
  computed: {
    innerHeight () {
      return window.innerHeight
    }
  },
  methods: {
    register () {
      this.$message({
        showClose: true,
        message: '아직 참가 신청 전 입니다.',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.gotcha {
  position: relative;
}
.bg-carousel {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-carousel__item {
  display: block;
}
.el-carousel__item:nth-child(3) {
  background: url("../assets/img/gotcha/meetup01.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.el-carousel__item:nth-child(4) {
  background: url("../assets/img/gotcha/meetup02.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.el-carousel__item:nth-child(5) {
  background: url("../assets/img/gotcha/meetup03.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.bg-dot {
  position: absolute;
  background: url("../assets/img/gridtile.png");
  background-blend-mode: overlay;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}
.center {
  margin-top: 25%;
  font-size: 1em;
  color: white;
  line-height: 30px;
  background-size: contain;
  background-blend-mode: overlay;
  z-index: 10;
}
.center.laptop {
  margin-top: 10%;
}
.center.desktop {
  margin-top: 18%;
}
.logo {
  width: 14em;
  margin-bottom: 20px;
}
.logo.laptop {
  width: 24em;
}
.logo.desktop {
  width: 30em;
}

.info {
  position: static;
}

.location {
  margin-bottom: 20px;
}

.register-btn {
  margin: 10px 0 30px;
}

.arrows {
  width: 30px;
  height: 16px;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  bottom: 20px;
  z-index: 10;
}
.arrows path {
  stroke: white;
  fill: transparent;
  stroke-width: 1px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}
@keyframes arrow {
  0% { opacity: 0 }
  40% { opacity: 1 }
  80% { opacity: 0 }
  100% { opacity: 0 }
}
.arrows path.a {
  animation-delay: -1s;
  -webkit-animation-delay: -0.6s;
}
</style>

<style lang="css">
  .bg-carousel .el-carousel__container {
    position: relative;
    height: 100%;
  }

  .bg-carousel .el-carousel__indicators {
    z-index: 5;
  }
</style>
