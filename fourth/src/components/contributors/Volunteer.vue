<template lang="html">
  <el-container>
    <a :href="volunteer.pageUrl" v-on:mouseover="focusOnVolunteer(volunteer)" v-on:mouseleave="unfocusOnVolunteer(volunteer)">
      <img :src="volunteer.imgUrl" alt="프로필 사진">
      <span class="name">{{ volunteer.name }}</span>
      <div class="el-tooltip">
        {{ volunteer.description }}
      </div>
    </a>
  </el-container>
</template>

<script>
export default {
  props: {
    volunteer: {
      type: Object
    }
  },
  methods: {
    focusOnVolunteer (volunteer) {
      this.$emit('focusOnVolunteer', volunteer)
    },
    unfocusOnVolunteer (volunteer) {
      this.$emit('unfocusOnVolunteer', volunteer)
    }
  }
}
</script>

<style lang="less">
  @focusColor: #0c0c0c;
  a:hover .el-tooltip {
    opacity: 1;
  }
  .el-tooltip {
    bottom: -35px;
    position: absolute;
    width: 100%;
    background-color: @focusColor;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity 300ms;
  }
  .el-tooltip:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent @focusColor transparent;
  }
</style>
