/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';
import {
	adminLogin,
	userLogin,
	auditorLogin,
	adminRegister,
	userSendCode,
	adminSendCode,
	auditorSendCode,
} from '../../api/auth';
import { SET_MENU, SET_ROUTES, SET_TOKEN, SET_USER } from '../Type';
import type { RegisterType, ResponseType } from '../../types';
import { Dispatch } from 'redux';
import type { AxiosResponse } from 'axios';
import LazyLoad from '../../utils/LazyLoad';
import { UserMenu, AdminMenu, AuditorMenu } from '../data';
// eslint-disable-next-line @typescript-eslint/ban-types

interface loginType {
	account: string;
	passWord: string;
}

interface MenuItemType {
	label: string;
	key: string;
	children?: Array<MenuItemType>;
}

interface OriginMenuItemType {
	path: string;
	name: string;
	component?: string;
	children?: Array<OriginMenuItemType>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function Login(data: loginType, callback: Function) {
	return (dispatch: Dispatch<any>) => {
		const loginCode = sessionStorage.getItem('loginCode');
		switch (loginCode) {
			case '1':
				userLogin({ userAccount: data.account, passWord: data.passWord })
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.then((res: AxiosResponse<ResponseType>) => {
						if (res.data.code === 200) {
							sessionStorage.setItem('token', res.data.data);
							sessionStorage.setItem('userinfo', JSON.stringify(res.data.user));
							dispatch({ type: SET_TOKEN, payload: res.data.data });
							dispatch({ type: SET_USER, payload: res.data.user });
							if (callback) {
								callback();
							}
							dispatch(getMenus());
						}
					});
				break;
			case '2':
				adminLogin({ adminAccount: data.account, adminPassword: data.passWord })
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.then((res: AxiosResponse<ResponseType>) => {
						if (res.data.code === 200) {
							sessionStorage.setItem('token', res.data.data);
							sessionStorage.setItem('userinfo', JSON.stringify(res.data.user));
							dispatch({ type: SET_TOKEN, payload: res.data.data });
							dispatch({ type: SET_USER, payload: res.data.user });
							if (callback) {
								callback();
							}
							dispatch(getMenus());
						}
					});
				break;
			case '3':
				auditorLogin({ account: data.account, passWord: data.passWord })
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.then((res: AxiosResponse<ResponseType>) => {
						if (res.data.code === 200) {
							sessionStorage.setItem('token', res.data.data);
							sessionStorage.setItem('userinfo', JSON.stringify(res.data.user));
							dispatch({ type: SET_TOKEN, payload: res.data.data });
							dispatch({ type: SET_USER, payload: res.data.user });
							if (callback) {
								callback();
							}
							dispatch(getMenus());
						}
					});
				break;
		}
	};
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function Register(data: RegisterType, callback: Function) {
	const loginCode = sessionStorage.getItem('loginCode');
	switch (loginCode) {
		case '2':
			adminRegister({
				adminName: data.name,
				adminAccount: data.account,
				adminPassword: data.password,
				email: data.email,
				phoneNumber: data.phoneNumber,
				code: data.code,
			}).then((res: AxiosResponse<ResponseType>) => {
				if (res.data.code === 200) {
					if (callback) {
						callback();
					}
				}
			});
	}
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function SendCode(data: string, callback: Function) {
	const loginCode = sessionStorage.getItem('loginCode');
	switch (loginCode) {
		case '1':
			userSendCode(data).then((res: AxiosResponse<ResponseType>) => {
				if (res.data.code === 200) {
					if (callback) {
						callback();
					}
				}
			});
			break;
		case '2':
			adminSendCode(data).then((res: AxiosResponse<ResponseType>) => {
				if (res.data.code === 200) {
					if (callback) {
						callback();
					}
				}
			});
			break;
		case '3':
			auditorSendCode(data).then((res: AxiosResponse<ResponseType>) => {
				if (res.data.code === 200) {
					if (callback) {
						callback();
					}
				}
			});
			break;
	}
}

interface RouteItemType {
	path: string;
	element: ReactNode;
}

function foramterRoutes(list: Array<OriginMenuItemType>): Array<RouteItemType> {
	let temp: Array<RouteItemType> = [];
	list.forEach(element => {
		if (element.component) {
			const obj: RouteItemType = {
				path: element.path,
				element: LazyLoad(element.component),
			};
			temp.push(obj);
		} else if (element.children) {
			const result = foramterRoutes(element.children);
			temp = temp.concat(result);
		}
	});
	return temp;
}

function formaterMenu(list: Array<OriginMenuItemType>): Array<MenuItemType> {
	const temp: Array<MenuItemType> = [];
	list.forEach(element => {
		const obj: MenuItemType = { key: element.path, label: element.name };
		if (element.children) {
			obj.children = formaterMenu(element.children);
		}
		temp.push(obj);
	});
	return temp;
}

export function getMenus() {
	return (dispath: Dispatch) => {
		let menuList: Array<OriginMenuItemType> = [];
		const loginCode = sessionStorage.getItem('loginCode');
		if (loginCode === '1') {
			menuList = UserMenu;
		} else if (loginCode === '2') {
			menuList = AdminMenu;
		} else if (loginCode === '3') {
			menuList = AuditorMenu;
		}
		// console.log(menuList);
		dispath({ type: SET_MENU, payload: formaterMenu(menuList) });
		dispath({ type: SET_ROUTES, payload: foramterRoutes(menuList) });
	};
}
