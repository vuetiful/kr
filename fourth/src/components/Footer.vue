<template lang="html">
  <el-footer>
    <el-row class="container">
      <el-col :span="6" :offset="3">
        <el-container direction="vertical">
          <div class="head">
            <h2>ABOUT US</h2>
          </div>
          <div class="intro">
            <h4>{{ generalInfo.intro }}</h4>
          </div>
        </el-container>
      </el-col>
      <el-col :span="6">
        <el-container direction="vertical">
          <div class="head">
            <h2>PREVIOUS MEETUP</h2>
          </div>
          <div class="content">
            <h4>Veutiful #1</h4>
            <h4>Veutiful #2</h4>
            <h4>Veutiful #3</h4>
          </div>
        </el-container>
      </el-col>
      <el-col :span="6" >
        <el-container direction="vertical">
          <div class="head">
            <h2>CONTACT US</h2>
          </div>
          <div class="content">
            <a href="https://www.facebook.com/groups/vuejs.korea" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://vuejs-korea.herokuapp.com" target="_blank"><i class="fab fa-slack"></i></a>
            <a href="https://github.com/vuejs-kr" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </el-container>
      </el-col>
    </el-row>
    <el-container class="copyright">
      <p class="text">©2018 Vuetiful Korea. All rights reserved.</p>
    </el-container>
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
    height: 270px !important;
    background-color: #444;
    text-align: center;
    padding: 50px 0 0 0 ;
    color: white;
  }

  .container .head {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .container .head::after {
    width: 5rem;
    border-top: solid 1px;
    display: inline-block;
    content: "";
  }

  .container .content {
    line-height: 20px;
  }

  .container .intro {
    line-height: 15px;
    font-size: 12px;
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
