$(function () {
  // ==========点击切换登录注册页面============
  // 点击注册
  $('#showReg').click(function () {
    // 注册页面显示
    $('.reg-form').show()
    // 登录页面隐藏
    $('.login-form').hide()
  })
  // 点击登录
  $('#showLogin').click(function () {
    // 注册页面隐藏
    $('.reg-form').hide()
    // 登录页面显示
    $('.login-form').show()
  })
  // ==========表单验证============
  let form = layui.form
  form.verify({
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    // 两次输入密码必须一致
    samePass: function (value, item) {
      // value：表单的值、item：表单的DOM对象
      // 获取注册表单中的密码内容
      let pwd = $('#regi_pass').val()
      // 两次密码进行判断 是否一致 如果不一致 出现提示文字
      if (value !== pwd) {
        return '两次输入密码不一致'
      }
    },
  })
  // ==========完成注册功能============
  // 注册表单提交事件
  $('.reg-form').on('submit', function (e) {
    // 阻止浏览器自动跳转行为
    e.preventDefault();
    // 获取表单数据
    let data = $(this).serialize()
    // 发送Ajax请求 完成注册
    axios.post("http://ajax.frontend.itheima.net/api/reguser", data).then((res) => {
      
    })
  })
})
