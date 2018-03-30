<template lang="html">

  <el-card :body-style="{ padding: '0px' }">
      <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
      <div class="card">
        <span>{{ presenter.name }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ presenter.affiliation }}</time>
          <el-button type="text" class="button">test</el-button>
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
  props: {
    presenter: {
      type: Object
    }
  }
}
</script>

<style lang="css" scoped>
  .card {
    padding: 14px;
    text-align: left;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
