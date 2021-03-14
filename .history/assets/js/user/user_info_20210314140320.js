$(function () {
  // 发送Ajax请求 获取基本信息
  axios.get('/my/userinfo').then((res) => {
    console.log(res)
    form.val('user', {
      //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
      username: '贤心', // "name": "value"
      sex: '女',
      auth: 3,
      'check[write]': true,
      open: false,
      desc: '我爱layui',
    })
  })
})
