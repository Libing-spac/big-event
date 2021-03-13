// // 发送Ajax请求 获取登录信息
// axios
//   .get('http://ajax.frontend.itheima.net/my/userinfo  ', {
//     headers: {
//       // 设置请求头
//       Authorization: localStorage.getItem('token'),
//     },
//   })
//   .then((res) => {
//     console.log(res)
//     // 判断如果不成功 弹出提示框
//     if (res.data.status !== 0) {
//       return layer.msg(res.data.message)
//     }
//     // 获取信息 渲染页面
//     let infoName = res.data.data
//     // 欢迎你用户名 优先显示 nickname 再显示 username
//     let name = infoName.nickname || infoName.username
//     $('#welcome').text('欢迎 ' + name)
//     // 设置头像  如果有头像就显示头像 否则显示文字头像
//     if (infoName.user_pic) {
//       // 将图片设置为获取到的数据的图片 将文字头像隐藏
//       $('.layui-nav-img').attr('src', infoName.user_pic).show()
//       $('.text-avatar-box').hide()
//     } else {
//       // 显示文字头像 将名字的第一项变为大写
//       let first = name[0].toUpperCase()
//       $('.text-avatar-box').show().children().text(first)
//       $('.layui-nav-img').hide()
//     }
//   })


axios.get('http://ajax.frontend.itheima.net/my/userinfo', {
  Headers: {
    Authorization:local
  },
})