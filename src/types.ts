export interface AdminType {
	adminAccount: string;
	adminPassword: string;
}

export interface UserType {
	userAccount: string;
	passWord: string;
}

export interface AuditorType {
	account: string;
	passWord: string;
}

export interface ActionType {
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any;
}

export interface RegisterType {
	companyName?: string;
	name?: string;
	account?: string;
	password?: string;
	email?: string;
	phoneNumber?: string;
	electrical?: string;
	code?: number;
}

export interface AdminRegisterType {
	adminName?: string;
	adminAccount?: string;
	adminPassword?: string;
	email?: string;
	phoneNumber?: string;
	code?: number;
}

export interface UserRegisterType {
	userName?: string;
	userAccount?: string;
	userPassword?: string;
	email?: string;
	phoneNumber?: string;
	code?: number;
}

export interface ResponseType {
	code?: number;
	data: string;
	message?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	user?: any;
}

export interface UserListType {
	uid?: number;
	companyName?: string;
	information?: string | null;
	userName?: string;
	userAccount?: string;
	passWord?: string;
	email?: string;
	token?: string | null;
	role?: string;
	enterpriseType?: string | null;
	carbonCoin?: number;
	carbonCredits?: number;
	carbonCalculate?: number;
	createTime?: string;
	updateTime?: string;
	tradingStatus?: number;
	loggingStatus?: number;
	certificate?: string;
}

