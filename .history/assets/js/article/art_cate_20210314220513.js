$(function () {
  let layer = layui.layer
  let index
  // ====================== 发送ajax获取列表 ======================
  axios.get('/my/article/cates').then((res) => {
    res.data.data.forEach((item) => {
      $(` <tr>
              <td>科技</td>
              <td>keji</td>
              <td>
                <button type="button" class="layui-btn layui-btn-xs btn_edit">编辑</button>
                <button type="button" class="layui-btn layui-btn-xs layui-btn-danger btn_delete">删除</button>
              </td>
          </tr>`).appendTo()
    })
  })
  //====================== 创建点击事件 ======================
  $('#btnAddCate').click(function () {
    index = layer.open({
      type: 1,
      title: '添加文章类别',
      content: 'test',
    })
  })
})
