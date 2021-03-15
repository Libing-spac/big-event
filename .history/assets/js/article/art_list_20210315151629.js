$(function () {
  let laypage = layui.laypage
  let form = layui.form
  let query = {
    pagenum: 1, //是	int	页码值
    pagesize: 2, //是	int	每页显示多少条数据
    cate_id: '', //否	string	文章分类的 Id
    state: '', //否	string	文章的状态，可选值有：已发布、草稿
  }
  // ============== 发送ajax请求获取数据列表 =================
  function getList() {
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
                <button type="button" data-id="${
                  item.Id
                }" class="layui-btn layui-btn-xs btn_edit">编辑</button>
                <button type="button" data-id="${
                  item.Id
                }"class="layui-btn layui-btn-danger layui-btn-xs btn_delete">删除</button>
              </td>
          </tr>`).appendTo($('#list'))
        })
      })
  }
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
    // 手动更新表单
    form.render()
  })

  // ============== 实现帅选功能 =================
  $('#form').on('submit', function (e) {
    e.preventDefault()
    // 在发送请求之前，还需要修改下query查询参数里面的cate_id 以及 state 值
    query.cate_id = $('#cateSelect').val()
    query.state = $('#stateSelect').val()
    query.pagenum = 1
    getList()
    // ============== 实现分页效果 =================
    laypage.render({
      elem: 'page - box', //注意，这里的 test1 是 ID，不用加 # 号
      count: res.data.total, //数据总数，从服务端得到
      curr: query.pagenum, // 起始页
      limit: query.pagesize, // 每页条数
      layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'], // 自定义分页效果
      limits: ['1', '2', '3', '5', '8', '10'], // 每页条数选项
      // 点击切换功能
      jump: function (obj, first) {
        //obj包含了当前分页的所有参数，比如：
        // console.log(obj.curr) //得到当前页，以便向服务端请求对应页的数据。
        // console.log(obj.limit) //得到每页显示的条数

        //首次不执行
        if (!first) {
          //do something
        }
      },
    })
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

    return `${y}-${addZero(m)}-${addZero(d)} ${addZero(hh)}:${addZero(mm)}:${addZero(ss)}`
  }

  function addZero(n) {
    return n < 10 ? '0' + n : n
  }
})
