$(function () {
  let form = layui.form
  let layer = layui.layer
  form.verify({
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    //  新密码不能和旧密码相同
    same: (value) => {
      // 获取到原密码
      let oldPwd = $('[name=oldPwd]').val()
      // 新密码和原密码作比较。如果相同，则弹出提示框
      if (value === oldPwd) {
        return '新密码和旧密码不能相同'
      }
    },
    // 验证两次新密码必须相同
    diff: (value) => {
      // 获取新密码
      let newPwd = $('[name=newPwd]').val()
      // 两次新密码作比较，如果不同则提示弹框
      if (value !== newPwd) {
        return '两次密码不一致'
      }
    },
  })

  // 创建表单提交事件 收集数据 发送Ajax请求
  $('#form').on('submit', function () {
    // 收集数据
    let data = $(this).serialize()
    // 发送Ajax请求
    axios.post('/my/updatepwd', data).then((res) => {
      if (res.data.status !== 0) {
        return layer.m
      }
    })
  })
})
