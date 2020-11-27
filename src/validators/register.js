
import { regPhone } from '@/utils/validator'
// 表单校验
export async function checkPhone (rule, value, callback) {
  if (!value) {
    return Promise.reject('请输入手机号');
  }
  if (!regPhone(value)) {
    return Promise.reject('手机号错误');
  } 
  return Promise.resolve()
}
