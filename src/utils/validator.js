
/**
 * 手机号校验
 * @param {*} value // 手机号
 */
export function regPhone(value) {
  let reg = /^1[3456789]\d{9}$/
  return reg.test(value)
}
/**
 * 密码校验
 * @param {*} value // 密码
 */
export function regPassword(value) {

  return
}