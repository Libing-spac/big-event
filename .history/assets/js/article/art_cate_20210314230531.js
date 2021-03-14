$(function () {
  let layer = layui.layer
  let index
  // ====================== 发送ajax获取列表 ======================
  function getCates() {  }
  //====================== 创建点击事件 ======================
  let addFormStr = `<form class="layui-form" action="" style="margin-top: 15px; margin-right: 50px;">
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
  $('#btnAddCate').click(function () {
    index = layer.open({
      type: 1,
      title: '添加文章类别',
      area: ['500px', '250px'],
      content: addFormStr,
    })
  })
  // 给添加的表单注册表单提交事件
  $('body').on('submit', '.layui-form', function () {
    axios.post('/my/article/addcates').then((res) => {
      console.log(res)
    })
  })
})
