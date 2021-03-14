$(function () {
  let form = layui.form
  // 发送Ajax请求 获取基本信息
  axios.get('/my/userinfo').then((res) => {
    console.log(res)
    // 为表单赋值
    form.val('user', res.data.data)

    form.verify({
      nickname: function (value) {
        if (value.length > 6) {
          return layer.msg(res.data.message)
        }
      },
    })
  })
  // 注册提交表单事件
  $('#form').on('submit', function (e) {
    // 阻止默认行为
    e.preventDefault()
    // 为表单添加自定义校验规则
  })
})
