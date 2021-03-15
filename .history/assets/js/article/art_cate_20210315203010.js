$(function () {
  let layer = layui.layer
  let form = layui.form
  let index
  let edit

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
  let editFormStr = `<form id="addForm" class="layui-form" lay-filter="editForm">
   <!-- 第一行 分类名称 -->
                <div class="layui-form-item layui-hide">
                    <label class="layui-form-label">Id</label>
                    <div class="layui-input-block">
                      <input name="Id" type="text" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
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
  // //====================== 增加删除功能 ======================
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
  //====================== 增加编辑功能 ======================
  // $('body').on('click', '.btn_edit', function () {
  //   // 弹出提示框
  //   edit = layer.open({
  //     type: 1,
  //     title: '添加文章类别',
  //     area: ['500px', '250px'],
  //     content: editFormStr,
  //   })
  //   // 获取id
  //   let id = $(this).attr('data-id')
  //   // 发送Ajax请求
  //   axios.get('/my/article/cates/' + id).then((res) => {
  //     console.log(res)
  //     form.val('editForm', res.data.data)
  //     // console.log(res)
  //   })
  // })
  // //====================== 实现编辑功能 ======================
  // $('body').on('submit', '#editFormStr', function (e) {
  //   // 阻止浏览器默认跳转行为
  //   e.preventDefault()
  //   // 获取内容
  //   let data = $(this).serialize()
  //   // 发送Ajax请求
  //   axios.post('/my/article/updatecate', data).then((res) => {
  //     if (res.data.status !== 0) {
  //       // 失败
  //       return layer.msg(res.data.message)
  //     }
  //     // 成功
  //     layer.msg(res.data.message)
  //     // 2. 关闭弹出层layer.open
  //     layer.close(edit)
  //     // 重新渲染页面
  //     getCates()
  //   })
  // })

  //=========================================
  $('tbody').on('click', '.btn_edit', function () {
    // 弹出层
    editIndex = layer.open({
      type: 1, // 层类型 （1 ==> 页面层）
      title: '修改文章分类',
      content: editFormStr,
      area: ['500px', '250px'], // 定义宽高
    })

    // 不仅要弹出层，而且还需要获取到对应Id这条数据信息填充到表单中
    let id = $(this).attr('data-id')

    axios.get('/my/article/cates/' + id).then((res) => {
      // console.log(res);

      if (res.data.status !== 0) {
        return layer.msg('获取数据失败')
      }

      // 给表单赋值
      form.val('editForm', res.data.data)
    })
  })

  // =================== 实现编辑功能 ===================
  $('body').on('submit', '#editForm', function (e) {
    e.preventDefault()

    let data = $(this).serialize()
    // console.log("🚀 ~ file: art_cate.js ~ line 170 ~ data", data);

    // 需要注意：
    // 1. 该ajax接口，除了需要有name 和 alias 的数据，还需要有数据的Id
    // 2. 如何处理： 在form表单中，添加个name为Id的输入框，方便通过serialize方法收集到Id数据
    // 3. 细节： name为Id的输入框，无需看见，添加类名 layui-hide

    axios.post('/my/article/updatecate', data).then((res) => {
      console.log(res)

      if (res.data.status !== 0) {
        return layer.msg('修改分类失败')
      }

      // 1. 关闭弹出层
      layer.close(editIndex)

      // 2. 重新发送ajax获取数据
      getCates()
    })
  })
})
