import request from '../utils/request';
import { AdminRegisterType, AdminType, AuditorType, UserType } from '../types';
import { AxiosResponse } from 'axios';

export function adminLogin(data: AdminType): Promise<AxiosResponse> {
	const Data = JSON.stringify(data);
	return request.post('/Admin/login', Data);
}

export function userLogin(data: UserType): Promise<AxiosResponse> {
	//const Data = JSON.stringify(data);
	return request.post('/User/login', data);
}

export function auditorLogin(data: AuditorType): Promise<AxiosResponse> {
	//const Data = JSON.stringify(data);
	return request.post('/Auditor/sendCode', data);
}

export function adminRegister(data: AdminRegisterType): Promise<AxiosResponse> {
	return request.post('/Admin/register', data);
}

export function userRegister(data: AdminRegisterType): Promise<AxiosResponse> {
	return request.post('/User/register', data);
}

export function auditorRegister(
	data: AdminRegisterType
): Promise<AxiosResponse> {
	return request.post('/Auditor/register', data);
}

export function userSendCode(email: string): Promise<AxiosResponse> {
	return request.post('/User/sendCode', email);
}

export function adminSendCode(email: string): Promise<AxiosResponse> {
	return request.post('/Admin/sendCode', email);
}

export function auditorSendCode(email: string): Promise<AxiosResponse> {
	return request.post('/Auditor/sendCode', email);
}

export function UserListGet(): Promise<AxiosResponse> {
	return request.get('/admin/user/getUserList');
}

export function GetAllAdv(): Promise<AxiosResponse> {
	return request.get('/admin/adv/list');
}

export function GetOnlineUser(): Promise<AxiosResponse> {
	return request.get('/admin/user/getOnlineUser');
}

export function GetOnlineUserList(): Promise<AxiosResponse> {
	return request.get('/admin/user/getOnlineUserList');
}

export function GetTradingUser(): Promise<AxiosResponse> {
	return request.get('/admin/user/getTradingUser');
}

export function GetTradingUserList(): Promise<AxiosResponse> {
	return request.get('/admin/user/getTradingUserList');
}

export function GetUnCertifiedCompany(): Promise<AxiosResponse> {
	return request.get('/admin/user/getUnCertifiedCompany');
}

export function GetElectricalCalculateList(): Promise<AxiosResponse> {
	return request.get('/admin/user/getElectricalCalculateList');
}

export function GetGenerateCalculateList(): Promise<AxiosResponse> {
	return request.get('/admin/user/getGenerateCalculateList');
}
