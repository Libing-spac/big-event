axios
  .get('http://ajax.frontend.itheima.net/my/userinfo  ', {
    Headers: {
      Authorization: localStorage.getItem('token'),
    },
  })
  .then((res) => {
    console.log(res)
    if (res.data.status !== 0) {
      return layer.msg(res.data.message)
    }
  })
