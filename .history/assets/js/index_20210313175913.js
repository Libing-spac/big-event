// 发送Ajax请求 获取登录信息
axios
  .get('http://ajax.frontend.itheima.net/my/userinfo  ', {
    headers: {   // 设置请求头
      Authorization: localStorage.getItem('token'),
    },
  })
  .then((res) => {
    // 判断如果不成功
    if (res.data.status !== 0) {
      return layer.msg(res.data.message)
    }
  })
