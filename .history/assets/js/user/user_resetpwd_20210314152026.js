$(function () {
  let form = layui.form
  form.verify({
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    //  新密码不能和旧密码相同
    same: (value) => {},
  })
})
