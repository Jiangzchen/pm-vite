/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-18 13:35:07
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-18 13:46:04
 * @FilePath: \pm-vite\src\store\modules\settings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-18 13:35:07
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-18 13:35:31
 * @FilePath: \pm-vite\src\store\modules\settings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    VuexModule,
    Mutation,
    Action,
    getModule,
    Module
  } from "vuex-module-decorators";

import elementVariables from "../../styles/element-variables.scss";
import defaultSettings from "../../settings";

export interface ISettingsState {
    theme: string;
    showSettings: boolean;
    sidebarTextTheme: boolean;
}

@Module({ dynamic: true, store, name: "settings" })
class Settings extends VuexModule implements ISettingsState {
  public theme = elementVariables.theme;
  public showSettings = defaultSettings.showSettings;
  public sidebarTextTheme = defaultSettings.sidebarTextTheme;

  @Mutation
  private CHANGE_SETTING(payload: { key: string; value: any }) {
    const { key, value } = payload;
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as any)[key] = value;
    }
  }

  @Action
  public ChangeSetting(payload: { key: string; value: any }) {
    this.CHANGE_SETTING(payload);
  }
}

export const SettingsModule = getModule(Settings);


