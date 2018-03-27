<template lang="html">
  <el-container id="presenters" class="container" direction="vertical">
    <h2 class="heading">발표자</h2>
    <el-row :gutter="20">
      <el-col :span="8" v-for="presentation in presentations" :key="presentation.title">
        <presenter :presenter="presentation.presenter"></presenter>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { presentations } from '@/store/store'
import Presenter from '@/components/presenters/Presenter'
export default {
  data () {
    return {
      presentations
    }
  },
  components: {
    Presenter
  },
  mounted () {
  }
}
</script>

<style lang="css" scoped>
.heading {
  display: block;
}
</style>
