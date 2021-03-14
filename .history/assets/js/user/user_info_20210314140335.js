$(function () {
  // 发送Ajax请求 获取基本信息
  axios.get('/my/userinfo').then((res) => {
    console.log(res)
    form.val('user', {})
  })
})
