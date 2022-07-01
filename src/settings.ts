/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-18 13:41:04
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-18 13:41:14
 * @FilePath: \pm-vite\src\settings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface ISettings {
    title: string; // Overrides the default title
    showSettings: boolean; // Controls settings panel display
    // showTagsView: boolean // Controls tagsview display
    // showSidebarLogo: boolean // Controls siderbar logo display
    // fixedHeader: boolean // If true, will fix the header component
    // errorLog: string[] // The env to enable the errorlog component, default 'production' only
    sidebarTextTheme: boolean; // If true, will change active text color for sidebar based on theme
    // devServerPort: number // Port number for webpack-dev-server
    // mockServerPort: number // Port number for mock server
  }
  
  // You can customize below settings :)
  const settings: ISettings = {
    title: "ts-vue",
    showSettings: true,
    // showTagsView: true,
    // fixedHeader: false,
    // showSidebarLogo: false,
    // errorLog: ['production'],
    sidebarTextTheme: true
    // devServerPort: 9527,
    // mockServerPort: 9528
  };
  
  export default settings;