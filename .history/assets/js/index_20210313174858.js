axios
  .get('http://ajax.frontend.itheima.net/my/userinfo  ', {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  })
  .then((res) => {
    console.log(res)
    if (res.data.status !== 0) {
      return layer.msg(res.data.mess)
    }
  })
