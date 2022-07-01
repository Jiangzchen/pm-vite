/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-07 13:22:16
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-07-01 18:53:23
 * @FilePath: \pm-vite\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * develop
 */
import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import path from "path";

export default defineConfig({
  plugins: [
    Vue2(),
    ScriptSetup({
      refTransform: true,
    }),
  ],
    // 配置别名
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});