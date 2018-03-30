<template lang="html">
  <el-container id="gotcha" class="gotcha" direction="vertical" :style="{ height: `${innerHeight}px` }">
    <el-carousel :interval="10000" trigger="click" class="bg-carousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="bg"></div>
      </el-carousel-item>
    </el-carousel>
    <div class="bg-dot"></div>
    <div class="text-box" direction="vertical">
      <p class="date">2018. 04 .17 (화)</p>
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
.bg {
  position: absolute;
  background: url("../assets/img/bg1.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.bg-dot {
  position: absolute;
  background: url("../assets/img/gridtile.png");
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}
.text-box {
  margin: auto;
  font-size: 2.5vw;
  color: white;
  line-height: 45px;
  z-index: 10;
}

.text-box .time {
  font-size: 1.5vw;
  line-height: 45px;
}

.text-box .location {
  line-height: 70px;
}
.register-btn {
  border: 1px solid #fff;
  color: #fff;
  margin-left: auto;
  margin-right: auto;

  width: 15vw;
  padding: 1vw 0;
  font-size: 1.5vw;
  display: block;
  margin-top: 50px;

  cursor: pointer;
  text-decoration: none;
}

.register-btn:hover {
  background-color: white;
  color: black;
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
