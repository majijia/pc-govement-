import axios from 'axios';

const defaultHeaders = {
	Accept: 'application/json, text/plain, */*; charset=utf-8',
	'Content-Type': 'application/json; charset=utf-8',
	Pragma: 'no-cache',
	'Cache-Control': 'no-cache'
};

// 设置默认头
Object.assign(axios.defaults.headers.common, defaultHeaders);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false; //是否携带cookie 否

// http request 拦截器
axios.interceptors.request.use(
	config => {
		
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

// http response 拦截器  
axios.interceptors.response.use(
	response => {
		
		return response;
	},
	error => {
		return Promise.reject(error);
	}
)
export default axios;