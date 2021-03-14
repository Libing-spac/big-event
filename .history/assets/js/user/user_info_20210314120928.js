$(function () {
  let form = layui.form
  axios.get('/my/userinfo').then((res) => {
    form.val('user', res.data.data)
  })
})
