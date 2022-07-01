<!--
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-07 13:22:16
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-18 13:07:03
 * @FilePath: \pm-vite\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1>{{ msg }}, {{ name }}</h1>
    <button @click="inc">
      Inc
    </button>
    <div>{{ count }} x 2 = {{ doubled }}</div>
    <button @click="dec()" v-html="decText" ></button>
    <component :is="count > 2 ? Foo : Bar" ></component>
  </div>
</template>

<script setup lang="ts">
import { watch } from '@vue/composition-api'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const props = withDefaults(defineProps<{ msg: string; name: string | number }>(), { msg: 'Hello' })
const emit = defineEmits(['update'])

let count = $ref(1)
// eslint-disable-next-line prefer-const
let doubled = $computed(() => count * 2)

function inc() {
  count += 1
}
function dec() {
  count -= 1
}

const decText = '<b>Dec</b>'

watch(()=>count, value => emit('update', value))
</script>
<style scoped>
button{
  margin: 20px 0;
}
</style>