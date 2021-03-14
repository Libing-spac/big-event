$(function () {
  let form = layui.form
  // 发送Ajax请求 获取用户信息 设置到biao'a
  axios.get('/my/userinfo').then((res) => {
    // console.log(res.data.data)
    form.val('user', res.data.data)
  })
})
