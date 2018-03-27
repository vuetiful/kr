<template lang="html">
  <el-header>
    <el-col :span="12">
      <h1 class="header-logo"><img src="http://placehold.it/80x60" alt="메인으로 이동"></h1>
    </el-col>
    <el-col :span="12">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a href="#gotcha">메인</a></el-menu-item>
        <el-menu-item index="2"><a href="#presenters">발표자</a></el-menu-item>
        <el-menu-item index="3"><a href="#program">프로그램</a></el-menu-item>
        <el-menu-item index="4"><a href="#contributors">도움의 손길</a></el-menu-item>
        <el-menu-item index="5"><a href="#directions">찾아오는 길</a></el-menu-item>
      </el-menu>
    </el-col>
  </el-header>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="css">
</style>
