<!--
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-07 13:36:04
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-09 21:53:54
 * @FilePath: \pm-vite\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login-container">
        <el-form v-model="loginForm" ref="loginForm" label-width="100px" class="login-ruleForm">
            <div class="title-container">
                <h3 class="title">Login Form</h3>
            </div>
            <el-form-item label="用户名" prop="username">
                <el-input size="mini" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input size="mini" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="mini" type="primary" @click="submitForm('loginForm')">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
    import { reactive,watch } from '@vue/composition-api'

    interface LoginForm {
        username:string;
        password:string;
    }

    const loginForm = reactive<LoginForm>({
        username:'admin',
        password:'admin',
    })

    function submitForm(loginForm:LoginForm): void {
      
    }



</script>
