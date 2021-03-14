$(function () {
  let form = layui.form
  // 发送Ajax请求 将
  axios.get('/my/userinfo').then((res) => {
    // console.log(res.data.data)
    form.val('user', res.data.data)
  })
})
