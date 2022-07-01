<!--
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-18 12:59:55
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-18 13:52:12
 * @FilePath: \pm-vite\src\layout\components\settings\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="drawer-container">
    <div>
      <h3 class="drawer-title">系统设置</h3>

      <div class="drawer-item">
        <span>主题色</span>
        <theme-picker
          style="float: right;height: 26px;margin: -3px 8px 0 0;"
          @change="themeChange"
        ></theme-picker>
      </div>

      <div class="drawer-item">
        <span>侧边栏文字主题色</span>
        <el-switch v-model="sidebarTextTheme" class="drawer-switch"></el-switch>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from '@vue/composition-api'

    function themeChange(value: string) {
    SettingsModule.ChangeSetting({ key: "theme", value });
  }

</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }
  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }
  .drawer-switch {
    float: right;
  }
}
</style>
