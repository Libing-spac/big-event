// 优化1 => 配置根路径
axios.defaults.baseURL = 'http://ajax.frontend.itheima.net'
// 优化2 => 配置请求头信息
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (config.url.indexOf('/my') !== -1) {
      // 说明有my
      config.headers.Authorization = localStorage.getItem('token')
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    console.log(response)
    if (
      response.data.status === 1 &&
      response.data.message === '身份认证失败!'
    ) {
      // 如果获取身份信息失败 清除token 返回登录页面
      localStorage.removeItem('token')
      location.href = '../'
    }
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
