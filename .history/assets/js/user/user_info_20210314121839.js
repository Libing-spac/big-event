$(function () {
  let form = layui.form
  // fa'so
  axios.get('/my/userinfo').then((res) => {
    // console.log(res.data.data)
    form.val('user', res.data.data)
  })
})
