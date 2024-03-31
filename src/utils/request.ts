import axios from 'axios';
import NProgress from 'nprogress';
import { message } from 'antd';
NProgress.settings.showSpinner = false;

const request = axios.create({
	baseURL: 'http://8.137.50.120:8081',
	timeout: 5000,
});
request.interceptors.request.use(config => {
	const token = sessionStorage.getItem('token');
	NProgress.start();
	if (token) {
		config.headers['token'] = token
	}
	return config;
});
request.interceptors.response.use(
	res => {
		NProgress.done();
		if (res.status !== 200) {
			if (res.status === 401) {
				message.info('没有权限');
			} else if (res.status === 500 || res.status === 505) {
				message.info('服务器错误');
			} else if (res.status === 404) {
				message.info('找不到请求地址');
			} else {
				message.info('请求错误');
			}
		}
		return res;
	},
	err => {
		NProgress.done();
		message.info('请求错误');
		console.error(err);
		return err;
	}
);
export default request;
