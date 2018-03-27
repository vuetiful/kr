<template lang="html">
  <el-container id="program" class="container" direction="vertical">
    <h2 class="heading">프로그램</h2>
    <el-row v-for="session of program" :key="session.time">
      <session :session="session"></session>
    </el-row>
  </el-container>
</template>

<script>
import { program } from '@/store/store'
import Session from '@/components/program/Session'
export default {
  data () {
    return {
      program
    }
  },
  components: {
    Session
  }
}
</script>

<style lang="css">
</style>
