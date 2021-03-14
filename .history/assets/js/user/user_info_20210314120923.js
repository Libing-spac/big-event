$(function () {
  let form = layui
  axios.get('/my/userinfo').then((res) => {
    form.val('user', res.data.data)
  })
})
