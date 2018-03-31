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
    <el-container class="copyright">
      <p class="text">©2018 Vuetiful Korea. All rights reserved.</p>
    </el-container>
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

<style lang="css" scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-footer {
    height: 200px !important;
    background-color: #444;
    text-align: center;
    padding: 0px;
  }

  .copyright {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    background-color: #333;
    border-top: solid 1px #555;
  }

  .copyright .text {
    color: white;
    margin: auto;
  }
</style>
