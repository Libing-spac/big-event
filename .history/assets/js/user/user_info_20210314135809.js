$(function () {
  //给表单赋值
  form.val('formTest', {
    //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
    username: '贤心', // "name": "value"
    sex: '女',
    auth: 3,
    'check[write]': true,
    open: false,
    desc: '我爱layui',
  })
})
