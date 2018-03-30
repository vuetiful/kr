<template lang="html">
  <el-container class="presenter" direction="vertical">
    <img :src="presenter.imgUrl" alt="프로필 사진" class="image">
    <div class="text">
      <h3 class="name">{{ presenter.name }}</h3>
      <span class="affiliation">{{ presenter.affiliation }}</span>
      <span class="description">{{ presenter.description }}</span>
    </div>
    <i class="el-icon-message"></i>
  </el-container>
</template>

<script>
export default {
  props: {
    presenter: {
      type: Object
    }
  }
}
</script>

<style lang="css">
</style>
