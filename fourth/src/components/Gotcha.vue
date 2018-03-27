<template lang="html">
  <el-container id="gotcha" class="gotcha" direction="vertical" :style="{ width: innerWidth, height: `${innerHeight}px` }">
    <p class="text">
      <span class="date">2018년 4월 17일 화요일</span>
      <span class="time">19:30~21:00</span>
      <span class="location">구글 캠퍼스 코리아 메인 이벤트 홀</span>
    </p>
    <el-button class="register" type="primary">참여 신청 페이지로 가기</el-button>
    <p class="intro">뷰티풀 코리아는...</p>
  </el-container>
</template>

<script>
export default {
  computed: {
    innerWidth () {
      return window.innerWidth
    },
    innerHeight () {
      return window.innerHeight
    }
  }
}
</script>

<style lang="css" scoped>
.gotcha {
  background: url("http://placehold.it/300x250") no-repeat center center, url("http://placehold.it/1440x900") no-repeat center center;
}
.text {
  position: relative;
}
.button-register {
  width: 90%;
}
</style>
