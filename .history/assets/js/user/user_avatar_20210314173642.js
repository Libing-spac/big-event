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
  // 注册change 事件 当文件域里的内容发生改变时候 触发
  $('#file').on('change', function () {
    // 获取到文件对象
    let file = this.files[0]
    // 根据选择的文件，创建一个对应的 URL 地址：
    let newImgURL = URL.createObjectURL(file)
    $image
      .cropper('destroy') // 销毁旧的裁剪区域
      .attr('src', newImgURL) // 重新设置图片路径
      .cropper(options) // 重新初始化裁剪区域
  })
  // 点击保存 裁剪头像并修改
  $('#btnCreateAvatar').on('click', function () {
    let base64Str = image.cropper('getCroppedCanvas', {
      // 创建一个 Canvas 画布
      width: 100,
      height: 100,
    })

    // 把图片转成base64格式
    let dataURL = base64Str.toDataURL() // 把canvas图片转成base64格式
    // 发送Ajax请求
    axios
      .post('/my/update/avatar', 'avatar = ' + encodeURIComponent(dataURL))
      .then((res) => {
        if (res.data.status !== 0) {
          return layer.msg(res.data.message)
        }
        l
      })
  })
})
