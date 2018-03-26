<template>
  <div id="app">
    <staff-component></staff-component>
  </div>
</template>

<script>
import StaffComponent from './components/Staff.vue'

export default {
  name: 'App',
  components: {
    'staff-component': StaffComponent
  }
}
</script>
