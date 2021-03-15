$(function () {
  // 获取文章类别数据，渲染到下拉框
  axios.
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
