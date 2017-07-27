<template>
  <div class="card" :style="{background: '#d5d5d5'}">
    <div class="top">
      <div class="img">
        <img src="../assets/logo.png" style="width: 120px; height: 110px"/>
      </div>
      <div class="title">
        <div>{{title}}</div>
        <div class="concent">this is the one</div>
      </div>
    </div>
    <div class="more">view more</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['color', 'title']
  }
</script>

<style>
  .card {
    width: 350px;
    height: 150px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 1rem;
  }
  .img {
    padding: 5px;
    float: left;
    width: 150px
  }
  .title {
    font-size: 40px;
    padding: 3px;
    float: right;
    text-align: right;
    width: 150px;
    margin-right: 3px;
  }
  .concent {
    margin-top: 30px;
    font-size: 22px;
  }
  .top{
    width: 320px;
    height: 122px;
  }
  .more {
    text-align: center;
    vertical-align: bottom;
    font-size: 10px;
    margin-top: 10px;
  }
</style>
