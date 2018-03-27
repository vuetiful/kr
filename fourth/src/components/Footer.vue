<template lang="html">
  <el-footer>
    <el-dropdown split-button type="primary" @command="handleCommand">
      이전 밋업 보기
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="third">3회</el-dropdown-item>
        <el-dropdown-item command="second">2회</el-dropdown-item>
        <el-dropdown-item commane="first">1회</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-container>
      <ul class="sns">
        <li>
          <a href="https://www.facebook.com/groups/vuejs.korea" target="_blank"><i class="fab fa-facebook"></i></a>
        </li>
        <li>
          <a href="https://vuejs-korea.herokuapp.com" target="_blank"><i class="fab fa-slack"></i></a>
        </li>
        <li>
          <a href="https://github.com/vuejs-kr" target="_blank"><i class="fab fa-github"></i></a>
        </li>
      </ul>
    </el-container>
    <p class="copyright">©2018 Vuetiful Korea. All rights reserved.</p>
  </el-footer>
</template>

<script>
export default {
  methods: {
    handleCommand (command) {
      console.log(command)
      window.open(`http://vuejs.kr/meetup/#/${command}`, '_blank')
    }
  }
}
</script>

<style lang="css">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
