import service from '@/utils/axios'
// 获取验证码
const getCode = (data)=> {
  console.log(data,'data')
  return service.request({
    url: "/getCode/",
    method: "post",
    data
  })
}
// 登录
const login = (data)=> {
  console.log(data,'data')
  return service.request({
    url : "",
    method: "",
    data
  })
}

export {
  getCode,
  login
}