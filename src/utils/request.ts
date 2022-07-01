/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-07 20:30:28
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-06-09 19:11:00
 * @FilePath: \pm-vite\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
import { Message } from 'element-ui';
import axios from 'axios'

const request = axios.create({
    timeout: 5000
})

request.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token")
    if (token) {
        config.headers = {
            'Content-Type': 'application/json',
            ...config.headers,
            token,
        }
    }
    return config;
});

request.interceptors.response.use(res => {
    return res.data;
}, (e) => {
    Message.error(e.response.data.message)
    return Promise.reject(e.response.data.message);
});

export default request;


