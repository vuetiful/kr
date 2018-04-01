<template lang="html">
  <el-container class="container">
    <el-button @click="goToTop" type="success" icon="el-icon-arrow-up" circle></el-button>
  </el-container>
</template>

<script>
export default {
  methods: {
    goToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    position: fixed;
    right: 10px;
    bottom: 55px;
  }
</style>
