$(function () {
  let form = layui.form
  let layer = layui.layer
  form.verify({
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    //  新密码不能和旧密码相同
    samePwd: (value) => {
      // 新密码和原密码作比较。如果相同，则弹出提示框
      console.log(value)
      console.log($('[name=oldPwd]').val())
      if (value === $('[name=oldPwd]').val()) {
        return '新密码和旧密码不能相同'
      }
    },
    // 验证两次新密码必须相同
    rePwd: (value) => {
      // 两次新密码作比较，如果不同则提示弹框
      if (value !== $('[name=newPwd]').val()) {
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
      console.log(res)
      // 如果status不等于零 则表示失败 弹出提示框
      if (res.data.status !== 0) {
        return 
      }
      // 成功
      layer.msg('更新密码成功')
      // 重置表单
      $('#form').reset()
    })
  })
})
