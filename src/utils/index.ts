/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-07-01 19:10:23
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-07-01 19:10:37
 * @FilePath: \pm-vite\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 生成一个用不重复的ID
 * @param { Number } randomLength
 */
 function getUUID(randomLength: number) {
    return Number(
      Math.random()
        .toString()
        .substr(2, randomLength) + Date.now()
    ).toString(36);
  }
  
  export { getUUID };