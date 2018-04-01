<template lang="html">
  <el-container>
    <a :href="sponsor.pageUrl" target="_blank">
      <img :src="sponsor.imgUrl" :alt="'후원사' + sponsor.name">
    </a>
    <h3 class="heading">
      {{ sponsor.name }}
    </h3>
  </el-container>
</template>

<script>
export default {
  props: {
    sponsor: {
      type: Object
    }
  }
}
</script>

<style lang="css">
</style>
