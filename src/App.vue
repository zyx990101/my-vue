<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
import demotwo from './components/demotwo.vue'
import hi from './components/hi.vue'
import Home from './components/Home.vue'
import Header from './components/common/Header.vue'
import SideBar from './components/SideBar.vue'
import card from './components/card.vue'

export default {
  data () {
    return {
      boo: true
    }
  },
  components: {hi, demotwo, Home, Header, SideBar, card}
}
</script>

<style scoped>
.active {
  width: 1520px;
  background: #efefef;
  height: 200px
}

.left {
  float: left;
  width: 300px
}

.right {
  float: right;
  width: 300px
}

.active2 {

}
</style>
