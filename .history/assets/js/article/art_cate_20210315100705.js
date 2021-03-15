$(function () {
  let layer = layui.layer
  let index
  // ====================== 发送ajax获取列表 ======================
  getCates()
  function getCates() {
    axios.get('/my/article/cates').then((res) => {
      // if (res.data.status !== 0) {
      //   return layer.msg(res.data.message)
      // }

      // // 获取成功
      // layer.msg(res.data.message)
      // 将数展示到页面中
      $('tbody').empty()
      res.data.data.forEach((item) => {
        $(` <tr>
              <td>${item.name}</td>
              <td>${item.alias}</td>
              <td>
                <button data-id=${item.Id} type="button" class="layui-btn layui-btn-xs btn_edit">编辑</button>
                <button data-id=${item.Id} type="button" class="layui-btn layui-btn-xs layui-btn-danger btn_delete">删除</button>
              </td>
          </tr>`).appendTo($('tbody'))
      })
    })
  }
  //====================== 创建点击事件 ======================
  let addFormStr = `<form id="addForm" class="layui-form">
                <!-- 第一行 分类名称 -->
                <div class="layui-form-item">
                    <label class="layui-form-label">分类名称</label>
                    <div class="layui-input-block">
                      <input type="text" name="name" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
        </div>
        </div>
                <!-- 第二行 分类别名  -->
                <div class="layui-form-item">
                    <label class="layui-form-label">分类别名</label>
                    <div class="layui-input-block">
                      <input type="text" name="alias" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
        </div>
        </div>
                <!-- 第三行 按钮 -->
                <div class="layui-form-item">
                    <div class="layui-input-block">
                      <button class="layui-btn" lay-submit lay-filter="formDemo">确认添加</button>
                      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
        </div>
    </form>`
  let editFormStr = `<form id="addForm" class="layui-form">
   <!-- 第一行 分类名称 -->
                <div class="layui-form-item">
                    <label class="layui-form-label">Id</label>
                    <div class="layui-input-block">
                      <input type="text" name="name" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
        </div>
        </div>
                <!-- 第一行 分类名称 -->
                <div class="layui-form-item">
                    <label class="layui-form-label">分类名称</label>
                    <div class="layui-input-block">
                      <input type="text" name="name" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
        </div>
        </div>
                <!-- 第二行 分类别名  -->
                <div class="layui-form-item">
                    <label class="layui-form-label">分类别名</label>
                    <div class="layui-input-block">
                      <input type="text" name="alias" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
        </div>
        </div>
                <!-- 第三行 按钮 -->
                <div class="layui-form-item">
                    <div class="layui-input-block">
                      <button class="layui-btn" lay-submit lay-filter="formDemo">确认编辑</button>
        </div>
        </div>
    </form>`
  $('#btnAddCate').click(function () {
    index = layer.open({
      type: 1,
      title: '添加文章类别',
      area: ['500px', '250px'],
      content: addFormStr,
    })
  })
  // 给添加的表单注册表单提交事件
  $('body').on('submit', '#addForm', function (e) {
    e.preventDefault()
    // 收集表单数据
    let data = $(this).serialize()
    axios.post('/my/article/addcates', data).then((res) => {
      if (res.data.status != 0) {
        return layer.msg(res.data.message)
      }
      // 添加成功
      layer.msg(res.data.message)
      // 关闭弹出层
      layer.close(index)
      // 重新渲染页面
      getCates()
    })
  })
  // //====================== 增加删除功能 //======================
  $('body').on('click', '.btn_delete', function (e) {
    // 阻止浏览器默认跳转
    e.preventDefault()
    // 获取到Id
    let id = $(this).attr('data-id')
    // 发送Ajax请求
    axios.get('/my/article/deletecate/' + id).then((res) => {
      if (res.data.status !== 0) {
        // 删除失败
        return layer.msg(res.data.message)
      }
      // 删除成功
      layer.msg(res.data.message)
      // 重新渲染页面
      getCates()
    })
  })
  // //====================== 增加编辑功能 //======================
  let edit
  $('body').on('click', '.btn_edit', function () {
    // 弹出提示框
    edit = layer.open({
      type: 1,
      title: '添加文章类别',
      area: ['500px', '250px'],
      content: editFormStr,
    })
    // 获取id
    let id = $(this).attr('data-id')
    // 发送Ajax请求
    axios.get('/my/article/cates/:id' + id).then((res) => {
      
    })
  })
})
