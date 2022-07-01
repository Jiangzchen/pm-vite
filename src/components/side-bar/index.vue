<!--
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-10 12:47:45
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-10 12:58:32
 * @FilePath: \pm-vite\src\components\side-bar\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
       <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
</template>
