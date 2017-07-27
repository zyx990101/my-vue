<template>
  <div class="header">
    <div class="logo">HELLO</div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          <img class="user-logo" src="../../assets/1.jpg">
        </div>
        <div class="username">{{name}}</div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>touchu</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: '赵宇欣'
      }
    },
    computed: {
      username () {
      }
    }
  }
</script>
<style scoped>
  .header {
    background-color: #5e5c60;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
  }
  .header .logo{
    float: left;
    width:200px;
    text-align: center;
    color: #fff;
    padding-top: 24px
  }
  .user-info {
    float: right;
    padding-right: 10px;
    font-size: 16px;
    color: #fff;
    width: 250px;
    height: 70px
  }
  .user-info .el-dropdown-link{
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    padding-top: 15px;
    float: left;
  }
  .user-info .username{
    float: left;
    color: #fff;
    padding-left: 15px;
    padding-top: 25px;
  }
  .user-info .user-logo{
    left:0;
    width:40px;
    height:40px;
    border-radius: 50%
  }
</style>
