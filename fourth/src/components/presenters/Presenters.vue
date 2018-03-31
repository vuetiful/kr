<template lang="html">
  <el-container id="presenters" class="container" direction="vertical">
    <h2 class="heading">발표자</h2>
    <el-row type="flex" style="flex-wrap: wrap;" :gutter="20" justify="center">
      <el-col :xs="18" :sm="7" :lg="5" v-for="presentation in presentations" :key="presentation.title">
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
#presenters {
  padding-bottom: 75px;
  background: url("~@/assets/img/bg.png");
}
.heading {
  display: block;
  font-size: 4vh;
  margin: 120px 0 50px;
}
</style>
