<!--
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-18 13:03:54
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-18 13:36:08
 * @FilePath: \pm-vite\src\components\theme-picker\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-color-picker
    v-model="theme"
    :predefine="[
      '#409EFF',
      '#1890ff',
      '#304156',
      '#212121',
      '#11a983',
      '#13c2c2',
      '#6959CD',
      '#f5222d'
    ]"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  ></el-color-picker>
</template>

<script setup lang="ts">
import { watch } from '@vue/composition-api'


const version = require("element-ui/package.json").version; // element-ui version from node_modules
const ORIGINAL_THEME = "#409EFF"; // default color

const chalk = "";
const theme = "";

@Watch("theme")
function onThemeChange(value: string) {
    if (!value) return;
    const oldValue = chalk ? theme : ORIGINAL_THEME;
    const themeCluster = getThemeCluster(value.replace("#", ""));
    const originalCluster = getThemeCluster(oldValue.replace("#", ""));
}

function getCSSString(url: string, variable: string) {
  return new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          
        }
      };
      xhr.open("GET", url);
      xhr.send();
    });
};

function getThemeCluster(theme: string) {
    const tintColor = (color: string, tint: number) => {
      let red = parseInt(color.slice(0, 2), 16);
      let green = parseInt(color.slice(2, 4), 16);
      let blue = parseInt(color.slice(4, 6), 16);
      if (tint === 0) {
        // when primary color is in its rgb space
        return [red, green, blue].join(",");
      } else {
        red += Math.round(tint * (255 - red));
        green += Math.round(tint * (255 - green));
        blue += Math.round(tint * (255 - blue));
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
      }
    };


</script>

<style lang="scss">
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}
.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}
.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>