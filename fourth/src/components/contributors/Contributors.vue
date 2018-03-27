<template lang="html">
  <el-container id="contributors" class="container" direction="vertical">
    <h2 class="heading">도움의 손길</h2>
    <el-col :span="8" v-for="sponsor in sponsors" :key="sponsor.name">
      <sponsor :sponsor="sponsor"></sponsor>
    </el-col>
    <el-container class="container-volunteers">
      <volunteer v-for="volunteer in volunteers" :volunteer="volunteer" :key="volunteer.name"></volunteer>
    </el-container>
    <p class="participants"><span class="participant-sponsor" v-for="(participantSponsor, index) in participantSponsors" :key="index">{{ participantSponsor }}<span v-if="index != participantSponsors.length - 1">, </span></span> 외 {{ regularParticipants.length }}명의 기부천사</p>
  </el-container>
</template>

<script>
import { sponsors, volunteers, participantSponsors, regularParticipants } from '@/store/store'
import Sponsor from '@/components/contributors/Sponsor'
import Volunteer from '@/components/contributors/Volunteer'
export default {
  data () {
    return {
      sponsors,
      volunteers,
      participantSponsors,
      regularParticipants
    }
  },
  components: {
    Sponsor,
    Volunteer
  }
}
</script>

<style lang="css">
</style>
