<template lang="html">
  <el-container id="gotcha" class="gotcha" direction="vertical" :style="{ height: `${innerHeight}px` }">
    <el-carousel :interval="10000" trigger="click" class="bg-carousel">
      <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
    </el-carousel>
    <div class="bg-dot"></div>
    <div class="text-box" direction="vertical">
      <img src="~@/assets/logo.png" alt="" class="logo">
      <p class="date">2018. 04. 17 (화)</p>
      <p class="time">19:30 ~ 21:00</p>
      <p class="location">구글 캠퍼스 코리아 메인 이벤트 홀</p>
      <a v-on:click="register" target="_blank" class="register-btn">참가 신청</a>
    </div>

    <p class="intro">뷰티풀 코리아는...</p>
  </el-container>
</template>

<script>
export default {
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

<style lang="css" scoped>
.gotcha {
  position: relative;
}
.bg-carousel {
  position: absolute;
  width: 100%;
  height: 100%;
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
.text-box {
  padding: 5vw 12vw;
  margin: auto;
  font-size: 1.7vw;
  color: #35495e;
  line-height: 30px;
  background: url("~@/assets/img/text_bg.png") no-repeat center center;
  background-size: contain;
  background-blend-mode: overlay;
  z-index: 10;
}
.logo {
  width: 20vw;
  margin-bottom: 20px;
}

.text-box .time {
  font-size: 1.3vw;
  line-height: 45px;
}

.text-box .location {
  line-height: 50px;
}
.register-btn {
  border: 1px solid #35495e;
  color: #35495e;
  margin-left: auto;
  margin-right: auto;

  width: 15vw;
  padding: 0.75vw 0;
  font-size: 1.3vw;
  display: block;
  margin-top: 30px;
  border-radius: 2px;

  cursor: pointer;
  text-decoration: none;
}

.register-btn:hover {
  background-color: #35495e;
  color: white;
  transition: all 0.2s;
}

.intro {
  color: white;
  z-index: 10;
  position: absolute;
  bottom: 100px;
  left: 50%;
  width: 240px;
  margin-left: -120px;
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
