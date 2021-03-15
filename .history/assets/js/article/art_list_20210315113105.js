$(function () {
  let query 
  // ============== 发送ajax请求获取数据列表 =================
  axios
    .get('/my/article/list', {
      params: query,
    })
    .then((res) => {
      console.log(res)
    })
})
