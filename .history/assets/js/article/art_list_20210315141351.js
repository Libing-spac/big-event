$(function () {
  let layer = layui.layer
  let form = layui.form
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
      // 清空内容
      $('#list').empty()
      // 将获取的列表遍历添加到页面
      res.data.data.forEach((item) => {
        $(`<tr>
              <td>${item.title}</td>
              <td>${item.cate_name}</td>
              <td>${formatTime(item.pub_date)}</td>
              <td>${item.state}</td>
              <td>
                <button type="button" class="layui-btn layui-btn-xs btn_edit">编辑</button>
                <button type="button" class="layui-btn layui-btn-danger layui-btn-xs btn_delete">删除</button>
              </td>
          </tr>`).appendTo($('#list'))
      })
    })
  // ============== 获取下拉框的分类数据 =================
  axios.get('/my/article/cates').then((res) => {
    console.log(res.data.data)
    // 动态创建option添加到下拉框中
    res.data.data.forEach((item) => {
      console.log(item)
      $(`
        <option value="${item.Id}">${item.name}</option>
      `).appendTo($('#cateSelect'))
    })
  })

  // 手动更新表单
  form.render()
  // ============== 实现帅选功能 =================
  $('#form').on('submit', function (e) {
    
  })

  // ============== 格式化时间处理 =================
  // 格式化时间
  function formatTime(time) {
    let date = new Date(time)
    let y = date.getFullYear() // 年
    let m = date.getMonth() + 1 // 月
    let d = date.getDate() // 日
    let hh = date.getHours() // 时
    let mm = date.getMinutes() // 分
    let ss = date.getSeconds() // 秒

    return `${y}-${addZero(m)}-${addZero(d)} ${addZero(hh)}:${addZero(
      mm
    )}:${addZero(ss)}`
  }

  function addZero(n) {
    return n < 10 ? '0' + n : n
  }
})
