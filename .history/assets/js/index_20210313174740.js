axios
  .get('http://ajax.frontend.itheima.net/my/userinfo  ', {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  })
  .then((res) => {
    if (res.data.status !== 0) {
      return lay
    }
  })
