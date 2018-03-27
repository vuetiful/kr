<template lang="html">
  <el-container>
    <a :href="volunteer.pageUrl">
      <img :src="volunteer.imgUrl" alt="프로필 사진">
      <span class="name">{{ volunteer.name }}</span>
    </a>
  </el-container>
</template>

<script>
export default {
  props: {
    volunteer: {
      type: Object
    }
  }
}
</script>

<style lang="css">
</style>
