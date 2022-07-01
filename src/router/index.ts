/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-07 13:39:50
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-09 12:35:21
 * @FilePath: \pm-vite\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import Router, { RouteConfig } from "vue-router";

import Layout from "@/layout/index.vue";

Vue.use(Router);

export const constantRoutes: RouteConfig[] = [
    {
        path: "/login",
        component: () =>
          import("@/views/login/index.vue"),
        meta: { hidden: true }
    },
    {
      path: "/",
      component: Layout,
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          component: () =>
            import("@/views/dashboard/index.vue"),
          name: "Dashboard",
          meta: {
            title: "dashboard",
            icon: "dashboard",
            affix: true
          }
        }
      ]
    }
];

const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    base: '',
    routes: constantRoutes
  });

  const router = createRouter();
  
  export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher; // reset router
  }
  
  export default router;