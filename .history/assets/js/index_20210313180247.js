// 发送Ajax请求 获取登录信息
axios
  .get('http://ajax.frontend.itheima.net/my/userinfo  ', {
    headers: {
      // 设置请求头
      Authorization: localStorage.getItem('token'),
    },
  })
  .then((res) => {
    console.log(res)
    // 判断如果不成功 弹出提示框
    if (res.data.status !== 0) {
      return layer.msg(res.data.message)
    }
    // 获取信息 渲染页面
    let infoName = res.data.data
    // 欢迎你用户名 优先显示 nickname 
  })
