$(function () {
  let layer = layui.layer
  let query = {
    pagenum: 1, //是	int	页码值
    pagesize: 2, //是	int	每页显示多少条数据
    cate_id: '', //否	string	文章分类的 Id
    state: '', //否	string	文章的状态，可选值有：已发布、草稿
  }
  // ============== 发送ajax请求获取数据列表 =================
  axios
    .get('/my/article/list', {
      params: query,
    })
    .then((res) => {
      console.log(res)
      if (res.data.status !== 0) {
        // 失败
        return layer.msg(res.data.message)
      }
      // 将获取的列表遍历添加到页面
      res.data.data.forEach((item) => {
        $(`<tr>
              <td>${item.}</td>
              <td>study</td>
              <td>2021/3/4 17:20:29</td>
              <td>草稿</td>
              <td>
                <button type="button" class="layui-btn layui-btn-xs btn_edit">编辑</button>
                <button type="button" class="layui-btn layui-btn-danger layui-btn-xs btn_delete">删除</button>
              </td>
          </tr>`)
      })
    })
})
