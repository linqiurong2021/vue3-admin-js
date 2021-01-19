import axios from 'axios'

import {message} from "ant-design-vue"

// baseURL 默认为请求前缀 可在.env.* 文件中设置
const service = axios.create({
  baseURL: process.env.VUE_APP_API_PREFIX,
  timeout: 5000,
})


// Add a request interceptor
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const {resCode,message} = response.data
    if(resCode != 0) {
      message.error(message)
      return Promise.reject(response.data)
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default service