<template>
  <div id="app">
    <router-view></router-view>
    <!-- <app-home></app-home> -->
    <app-bottom></app-bottom>
  </div>
</template>

<script>
// import AppHome from '@/components/pages/homeTop'
import AppBottom from '@/components/pages/homeFoot'
export default {
  name: 'App',//组件名字，方便与测试
  components:{
    AppBottom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
body{margin:0;padding:0;}
</style>
