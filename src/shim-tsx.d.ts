/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-07-01 19:02:55
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-07-01 19:03:09
 * @FilePath: \pm-vite\src\shim-tsx.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// file: shim-tsx.d.ts
import Vue, { VNode } from 'vue';
import { ComponentRenderProxy } from '@vue/composition-api';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}