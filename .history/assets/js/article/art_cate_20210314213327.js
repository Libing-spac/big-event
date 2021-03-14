$(function () {
  // 发送ajax获取列表
  axios.get('/my/article/cates').then((res) => {
    if (res.data.status !== 0) {
      return layer.msg(res.data.message)
    }
  })
})
