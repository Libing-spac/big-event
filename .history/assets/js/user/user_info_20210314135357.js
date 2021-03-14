$(function () {
  let form = layui.form

  // 发送Ajax请求 获取用户信息 设置到表单中
  axios.get('/my/userinfo').then((res) => {
    form.val('user', res.data.data)
  })
  // 
  form.verify({
    // 对用户昵称做个长度限制
    nickname: function (value) {
      if (value.length > 6) {
        return '昵称长度需要在1-6个字符'
      }
    },
  })

  $('#form').on('submit', function (e) {

    // 2. 阻止默认行为
    e.preventDefault();

    // 3. 收集表单数据
    let data = $(this).serialize();
  })

  axios.post("/my/userinfo", data).then((res) => {
        if (res.data.status !== 0) {
            // 更新失败
            return layer.msg("修改用户信息失败");
        }

        // 更新成功
        layer.msg(res.message);
        
        // 调用父页面的getUserInfo函数，重新渲染index.html 的头像和昵称
        window.parent.getUserInfo();
    });
});

