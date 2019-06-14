import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'localhost:8080' : 'localhost:8080'
http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  let res = response.data
  if (res.status === 0) {
    // 接口真正成功
    return res
  } else {
    // 接口后台逻辑有bug
    Toast(res.msg)
  }
}, error => {
  Toast(error.message)
})

export default http
