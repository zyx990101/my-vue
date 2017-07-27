<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="30">
        <el-menu default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <template v-for="Item in Items">
              <el-submenu :index='Item.indexo'>
                <template slot="title">{{Item.title}}</template>
                <el-menu-item :index='Item.index'><router-link to="Item.index"><i :class="Item.firicon"></i>{{Item.fircon}}</router-link></el-menu-item>
                <el-menu-item :index='Item.index'><i :class="Item.secicon"></i>{{Item.seccon}}</el-menu-item>
                <el-menu-item :index='Item.index'><i :class="Item.thiicon"></i>{{Item.thicon}}</el-menu-item>
              </el-submenu>
          </template>
        </el-menu>
      </el-col>
      </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        Items: [
          {
            indexo: 'Main',
            index: 'first',
            title: 'Main',
            fircon: 'first',
            seccon: 'second',
            thicon: 'third',
            firicon: 'el-icon-star-on',
            secicon: 'el-icon-picture',
            thiicon: 'el-icon-upload2'

          },
          {
            indexo: '2',
            index: '2-1',
            title: 'Components',
            fircon: 'first',
            seccon: 'second',
            thicon: 'third',
            firicon: 'el-icon-star-on',
            secicon: 'el-icon-picture',
            thiicon: 'el-icon-upload2'

          },
          {
            indexo: '3',
            index: '3-1',
            title: 'UI examples',
            fircon: 'first',
            seccon: 'second',
            thicon: 'third',
            firicon: 'el-icon-star-on',
            secicon: 'el-icon-picture',
            thiicon: 'el-icon-upload2'

          }
        ]
      }
    },
    computed: {
      onRoutes () {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>

<style scoped>
.sidebar {
  width: 200px
}
</style>
