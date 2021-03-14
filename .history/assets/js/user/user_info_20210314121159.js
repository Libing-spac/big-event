$(function () {
  let form = layui.form
  axios.get('/my/userinfo').then((res) => {
    console.log(res.darta)
    form.val('user', res.data.data)
  })
})
