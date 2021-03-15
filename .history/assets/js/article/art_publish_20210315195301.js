$(function () {
  let form = layui.form
  // 获取文章类别数据，渲染到下拉框
  axios.get('/my/article/cates').then((res) => {
    console.log(res)
    res.data.data.forEach((item) => {
      $(`<option value="${item.Id}">${item.name}</option>`).appendTo(
        $('[name="cate_id"]')
      )
    })
    // 需要手动渲染表单
    form.render()
  })
  // ============== 初始化富文本编辑器 ==============
  initEditor()
  // 1. 初始化图片裁剪器
  let $image = $('#image')

  // 2. 裁剪选项
  let options = {
    aspectRatio: 400 / 280,
    preview: '.img-preview',
  }

  // 3. 初始化裁剪区域
  $image.cropper(options)
  // 将裁剪后的图片，输出为文件

  // ==============  点击选择按钮 模拟点击文本域  ==============
  $('#btnChooseCoverImage').click(function () {
    $('#fileCover').click()
  })
  // ==============  替换裁剪区的图片  ==============
  $('#fileCover').change(function () {
    let file = this.files[0]

    // 将文件转成对应的url地址
    let newImgURL = URL.createObjectURL(file)
    $image
      .cropper('destroy') // 销毁旧的裁剪区域
      .attr('src', newImgURL) // 重新设置图片路径
      .cropper(options) // 重新初始化裁剪区域
  })

  // ============ 提交数据 实现发布文章 ============
  // 给发布和存为草稿按钮都注册点击事件。来决定state 状态
  let state
  $()
  $image
    .cropper('getCroppedCanvas', {
      // 创建一个 Canvas 画布
      width: 400,
      height: 280,
    })
    .toBlob(function (blob) {
      // 将 Canvas 画布上的内容，转化为文件对象
      // 得到blob文件对象后，进行后续的操作 ==> 通过 FormData来收集数据， ajax提交数据
    })
})
