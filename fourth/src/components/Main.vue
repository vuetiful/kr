<template lang="html">
  <el-main>
    <el-row>
      <presenters></presenters>
    </el-row>
    <el-row>
      <program></program>
    </el-row>
    <el-row>
      <contributors></contributors>
    </el-row>
    <el-row>
      <directions></directions>
    </el-row>
  </el-main>
</template>

<script>
import Presenters from '@/components/presenters/Presenters'
import Program from '@/components/program/Program'
import Contributors from '@/components/contributors/Contributors'
import Directions from '@/components/directions/Directions'
export default {
  components: {
    Presenters,
    Program,
    Contributors,
    Directions
  }
}
</script>

<style lang="css">
</style>
