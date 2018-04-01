<template lang="html">
  <el-footer>
    <el-row class="about" :gutter="5" type="flex" style="flex-wrap: wrap;" justify="center">
      <el-col :xs="20" :sm="2" :lg="2" v-show="!mobile && !smartphone && !tablet">
        <img src="~@/assets/logo-gs.png" alt="뷰티풀 코리아">
      </el-col>
      <el-col :xs="18" :sm="10" :lg="7" v-show="!mobile && !smartphone && !tablet">
        <p class="intro">{{ generalInfo.intro }}</p>
      </el-col>
      <el-col :xs="20" :sm="5" :lg="3">
        <el-dropdown split-button size="mini" @command="handleCommand">
          이전 밋업 보기
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="third">3회</el-dropdown-item>
            <el-dropdown-item command="second">2회</el-dropdown-item>
            <el-dropdown-item commane="first">1회</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row class="bottom-line" :gutter="5" type="flex" style="flex-wrap: wrap;" justify="center">
      <el-col :xs="20" :sm="20" :lg="5">
        <p class="copyright">©2018 Vuetiful Korea. All rights reserved.</p>
      </el-col>
      <el-col :xs="20" :sm="20" :lg="2">
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
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
import { generalInfo } from '@/store/store'
export default {
  data () {
    return {
      generalInfo
    }
  },
  methods: {
    handleCommand (command) {
      console.log(command)
      window.open(`http://vuejs.kr/meetup/#/${command}`, '_blank')
    }
  }
}
</script>

<style lang="css" scoped>
  .el-footer {
    min-height: 200px;
    background-color: #444;
    text-align: center;
    padding: 50px 0 0;
  }
  .about {
    margin-bottom: 20px;
  }
  img {
    width: 60px;
  }
  .intro {
    font-size: 0.8em;
    text-align: left;
    line-height: 1.5;
    color: white;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  li {
    display: inline;
    margin-left: 4px;
  }
  a {
    color: white;
    line-height: 30px;
  }
  .bottom-line {
    height: 45px;
  }

  .copyright {
    font-size: 0.7em;
    color: white;
    line-height: 30px;
  }
</style>
