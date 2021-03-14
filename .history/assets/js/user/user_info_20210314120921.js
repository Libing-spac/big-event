$(function () {
  let form = lay
  axios.get('/my/userinfo').then((res) => {
    form.val('user', res.data.data)
  })
})
