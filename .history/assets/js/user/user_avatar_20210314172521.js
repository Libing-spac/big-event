$(function () {
  // 1.1 获取裁剪区域的 DOM 元素
  let $image = $('#image')

  // 1.2 配置选项
  let options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview',
  }

  // 1.3 创建裁剪区域
  $image.cropper(options)

  // 点击上传触发文件域按钮
  $('#btnChooseImage').on('click', function () {
    // 触发点击事件
    $('#file').click()
  })
  // 注册change 事件
  $('#file').on('change')
})
