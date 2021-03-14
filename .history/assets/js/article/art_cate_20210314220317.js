$(function () {
  let layer = layui.layer
  let index
  // ====================== 发送ajax获取列表 ======================
  axios.get('/my/article/cates').then((res) => {
    res.data.data.for
  })
  //====================== 创建点击事件 ======================
  $('#btnAddCate').click(function () {
    index = layer.open({
      type: 1,
      title:"添加文章类别",
      content: 'test',
    })
  })
})
