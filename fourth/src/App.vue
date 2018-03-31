<template>
  <div id="app">
    <el-row>
      <gotcha></gotcha>
    </el-row>
    <el-row>
      <app-header></app-header>
    </el-row>
    <el-row>
      <app-main></app-main>
    </el-row>
    <el-row>
      <app-footer></app-footer>
    </el-row>
  </div>
</template>

<script>
import Gotcha from '@/components/Gotcha'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Gotcha,
    AppHeader: Header,
    AppMain: Main,
    AppFooter: Footer
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f0f0;
}
</style>
