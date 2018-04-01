<template lang="html">
  <el-container id="directions" class="container" direction="vertical">
    <h2 class="heading">Directions</h2>
    <span class="subheading">오시는 길</span>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.076841162466!2d127.0616292517556!3d37.506105779710175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca43fa3e745e9%3A0x851b67b23a780080!2z6rWs6riAIOy6oO2NvOyKpCDshJzsmrg!5e0!3m2!1sko!2skr!4v1522480771405" allowfullscreen></iframe>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#directions {
  padding-bottom: 75px;
  background: url("~@/assets/img/bg.png");
}
iframe {
  width: 100%;
  height: 450px;
  /* frameborder: 0; */
  border-width: 0px;
  border: 0px;
}
</style>
