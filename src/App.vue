<!--
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-07 13:22:16
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-07-01 19:03:34
 * @FilePath: \pm-vite\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <a-button>Default Button</a-button>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>