$(function () {
  let form = layui.form

  // 发送Ajax请求 获取用户信息 设置到表单中
  axios.get('/my/userinfo').then((res) => {
    form.val('user', res.data.data)
  })
  // // 更新用户的基本信息
  // axios.post('/my/userinfo').then((res) => {})
  form.verify({
    // 对用户昵称做个长度限制
    nickname: function (value) {
      if (value.length > 6) {
        return '昵称长度需要在1-6个字符'
      }
    },
  })
})
