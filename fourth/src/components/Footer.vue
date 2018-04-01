<template lang="html">
  <el-footer height="100%">
    <el-row class="container" :gutter="5" type="flex" style="flex-wrap: wrap;" justify="center">
      <el-col :xs="18" :sm="6" :lg="6">
        <el-container direction="vertical">
          <div class="head">
            <h2>ABOUT US</h2>
          </div>
          <div class="intro">
            <h4>{{ generalInfo.intro }}</h4>
          </div>
        </el-container>
      </el-col>
      <el-col :xs="20" :sm="6" :lg="6">
        <el-container direction="vertical">
          <div class="head">
            <h2>PREVIOUS MEETUP</h2>
          </div>
          <ul class="meetups">
            <li><a href="">Vuetiful #1</a></li>
            <li><a href="">Vuetiful #2</a></li>
            <li><a href="">Vuetiful #3</a></li>
          </ul>
        </el-container>
      </el-col>
      <el-col :xs="20" :sm="6" :lg="6">
        <el-container direction="vertical">
          <div class="head">
            <h2>CONTACT US</h2>
          </div>
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
      </el-col>
    </el-row>
    <el-row class="bottom-line" :gutter="5" type="flex" style="flex-wrap: wrap;" justify="center">
      <p class="copyright">©2018 Vuetiful Korea. All rights reserved.</p>
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
    background-color: #444;
    text-align: center;
    padding: 50px 0 0;
    color: white;
  }

  .el-col {
    margin-bottom: 36px;
  }

  .head {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .head::after {
    width: 2rem;
    border-top: solid 1px;
    display: inline-block;
    content: "";
  }

  .content {
    line-height: 20px;
  }

  .intro {
    line-height: 15px;
    font-size: 12px;
  }

  .meetups a {
    text-decoration: none;
    font-size: 0.8em;
    line-height: 1.2;
    color: white;
  }

  .sns li {
    display: inline;
    margin-right: 4px;
  }
  .sns li:last-child {
    margin-right: 0;
  }
  .sns a {
    color: white;
  }

  .copyright {
    font-size: 0.7em;
    color: white;
    line-height: 30px;
  }
  .bottom-line {
    background: #333;
  }
</style>
