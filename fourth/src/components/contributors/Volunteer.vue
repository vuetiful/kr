<template lang="html">
  <el-container>
    <a :href="volunteer.pageUrl" v-on:mouseover="focusOnVolunteer(volunteer)" v-on:mouseleave="unfocusOnVolunteer(volunteer)">
      <img :src="volunteer.imgUrl" alt="프로필 사진">
      <span class="name">{{ volunteer.name }}</span>
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

<style lang="css">
</style>
