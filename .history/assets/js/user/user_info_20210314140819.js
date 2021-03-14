$(function () {
  let form = layui.form
  // 发送Ajax请求 获取基本信息
  axios.get('/my/userinfo').then((res) => {
    console.log(res)
    // 为表单赋值
    form.val('user', res.data.data)
    let a = form.val('user'
  })
})
