import axios from "axios";
import Qs from "qs";

axios.defaults.baseURL = "http://localhost:3001";

//这个表示允许跨域(并且允许携带cookie)
axios.defaults.withCredentials = true;

//将post请求和put请求主体传到服务器的内容统一处理为www-url-encode即？name=zhangsan&age=2
axios.defaults.transsformRequest = (data = {}) => Qs.stringify(data);
axios.interceptors.response.use(result => result.data);

export default axios;
