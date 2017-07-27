<template>
  <div class="active">
    <div class="{left: isActive}">
      <h1>{{msg}}</h1>
    </div>
    <div class="{right: isActive}">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'nihaoya',
      isActive: true
    }
  }
}
</script>

<style scoped>
body {
  font-family: Helvetica, sans-serif;
}

.active {
  margin-top: 100px;
  background: #34b890;
  height: 120px;
  width: 1520px;
}

.left {
  float: left;
  width: 100px;
  margin-left: 100px
  }

.right {
  float: right;
  width: 100px;
  margin-right: 100px
}
</style>
