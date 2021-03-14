$(function () {
  let layer = layui.layer
  // ====================== 发送ajax获取列表 ======================
  axios.get('/my/article/cates').then((res) => {
    console.log(res)
    if (res.data.status !== 0) {
      return layer.msg(res.data.message)
    }
    layer.msg(res.data.message)
  })
  //====================== 创建点击事件 ======================
  $('#btnAddCate').click(function () {
    layer.open({
      title: '在线调试',
      content: '可以填写任意的layer代码',
    })
  })
})
