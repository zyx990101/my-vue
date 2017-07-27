<template>
  <div>
    <Header></Header>
    <div class="sidebar"><SideBar></SideBar></div>
    <div class="cardone"><card title="one"></card></div>
    <div class="cardtwo"><card title="two"></card></div>
    <div class="cardthr"><card title="three"></card></div>
  </div>
</template>

<script>
  import Header from './common/Header.vue'
  import SideBar from './SideBar.vue'
  import card from './card.vue'
  export default {
    data () {
      return {
      }
    },
    components: {Header, SideBar, card}
  }
</script>

<style scoped>
  .sidebar {
    float: left;
  }
  .cardone {
    float: left;
  }
  .cardtwo {
    float: left;
  }
  .cardthr {
     float: left;
   }
</style>
