$(function () {
  // 初始化富文本编辑器
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
  
})