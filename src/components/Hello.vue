<template>
  <div class="{hello: boo}">
    <img src="../assets/1.jpg" width="100" height="100">
    <h1>{{ msg }}</h1>
    <hi></hi>
    <input type="radio" id="one" value="pickfirst" v-model="picked">
    <label for="one">第一个</label>
    <input type="radio" id="two" value="picktwo" v-model="picked">
    <label for="two">第2个</label>
    <el-button>默认按钮</el-button>
    <p>{{picked}}</p>
  </div>
</template>

<script>
import hi from './hi.vue'
export default {
  data () {
    return {
      msg: '你好',
      picked: '',
      boo: true
    }
  },
  components: {hi}
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
