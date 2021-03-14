$(function () {
  let form = layui.form
  // 发送Ajax请求 获取基本信息
  
  // 注册提交表单事件
  $('#form').on('submit', function (e) {
    // 阻止默认行为
    e.preventDefault()
    // 收集表单数据
    let data = $(this).serialize()
    // 发送Ajax请求
    axios.post('/my/userinfo', data).then((res) => {
      if (res.data.status !== 0) {
        // 更新失败
        return layer.msg(res.data.message)
      }
      layer.msg(res.message)

      window.parent.getUserInfo()
    })
  })
  // 重置表单
  $('#resetBtn').on('click', function (e) {
    e.preventDefault()
    
  })
})
