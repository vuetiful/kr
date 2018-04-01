<template lang="html">
  <el-footer height="100%">
    <el-row class="container-top" type="flex" style="flex-wrap: wrap;" justify="center">
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
            <li v-for="meetup in prevMeetups" :key="meetup.name"><a :href="meetup.pageUrl">{{ meetup.name}}</a></li>
          </ul>
        </el-container>
      </el-col>
      <el-col :xs="20" :sm="6" :lg="6">
        <el-container direction="vertical">
          <div class="head">
            <h2>CONTACT US</h2>
          </div>
          <ul class="sns">
            <li v-for="media in sns" :key="media.name">
              <a :href="media.pageUrl" target="_blank"><i :class="media.faClass"></i></a>
            </li>
          </ul>
        </el-container>
      </el-col>
    </el-row>
    <el-row class="bottom-line" type="flex" style="flex-wrap: wrap;" justify="center">
      <p class="copyright">©2018 Vuetiful Korea. All rights reserved.</p>
    </el-row>
  </el-footer>
</template>

<script>
import { generalInfo, prevMeetups, sns } from '@/store/store'
export default {
  data () {
    return {
      generalInfo,
      prevMeetups,
      sns
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
    padding: 75px 0 0;
    color: white;
  }

  .container-top {
    width: 100%;
    margin-bottom: 30px;
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
    color: #ccc;
  }
  a {
    color: #ccc;
    transition: all 0.2;
  }
  a:hover {
    color: white;
  }

  .meetups a {
    text-decoration: none;
    font-size: 0.8em;
    line-height: 1.2;
  }

  .sns li {
    display: inline;
    margin-right: 4px;
  }
  .sns li:last-child {
    margin-right: 0;
  }

  .copyright {
    font-size: 0.7em;
    color: white;
    line-height: 50px;
  }
  .bottom-line {
    width: 100%;
    background: url("~@/assets/img/gridtile-dark.png"), #333;
  }
</style>
