$(function () {
  let form = layui.form

    // 发送Ajax请求 获取用户信息 设置到表单中
    axios.get('/my/userinfo').then((res) => {
      form.val('user', res.data.data)
    })
    // // 更新用户的基本信息
    // axios.post('/my/userinfo').then((res) => {})

})
