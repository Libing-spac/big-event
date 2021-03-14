$(function () {
  axios.get('/my/userinfo').then((res) => {
    form.val('formTest')
  })
})
