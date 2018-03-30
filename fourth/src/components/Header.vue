<template lang="html">
  <el-header class="header">
    <el-container>
      <el-container>
        <h1 class="header-logo"><img src="../assets/logo.png" alt="메인으로 이동" height="50" width="50"></h1>
      </el-container>
      <el-container class="header-menu">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><a href="#gotcha">메인</a></el-menu-item>
          <el-menu-item index="2"><a href="#presenters">발표자</a></el-menu-item>
          <el-menu-item index="3"><a href="#program">프로그램</a></el-menu-item>
          <el-menu-item index="4"><a href="#contributors">도움의 손길</a></el-menu-item>
          <el-menu-item index="5"><a href="#directions">찾아오는 길</a></el-menu-item>
        </el-menu>
      </el-container>
    </el-container>
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

<style lang="css" scoped>
.header {
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 0;
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
}

.header .header-logo {
  position: absolute;
  top: 6px;
  left: 26px;
}

.header .header-menu {
  position: absolute;
  right: 0;
  color: white;
}

.header .header-menu a {
  text-decoration: none;
  font-weight: bold;
}
</style>

<style>
  .header .header-menu .el-menu {
    background-color: inherit;
    border-bottom: none;
  }

  .header .header-menu .el-menu-item {
    color: white;
  }
</style>
