interface OriginMenuItemType {
	path: string;
	name: string;
	component?: string;
	children?: Array<OriginMenuItemType>;
}

export const AdminMenu: Array<OriginMenuItemType> = [
	{ name: '首页', path: '/admin', component: '/admin/DashView' },
	{
		name: '用户管理',
		path: '/admin/userManage',
		children: [
			{
				name: '查询用户',
				path: '/admin/userManage/queryUser',
				component: '/admin/userManage/queryUser/queryUserView',
			},
			{
				name: '用户认证',
				path: '/admin/userManage/userAuthentication',
				component:
					'/admin/userManage/userAuthentication/userAuthenticationView',
			},
			{
				name: '查看用户统计',
				path: '/admin/userManage/checkUserStatistics',
				component:
					'/admin/userManage/checkUserStatistics/checkUserStatisticsView',
			},
			{
				name: '碳排放排名',
				path: '/admin/userManage/carbonEmissionRanking',
				component:
					'/admin/userManage/carbonEmissionRanking/carbonEmissionRankingView',
			},
		],
	},
	{
		name: '广告管理',
		path: '/admin/adManage',
		component: '/admin/adManage/adManageView',
	},
	{
		name: '交易管理',
		path: '/admin/tradeManage',
		children: [
			{
				name: '查询交易明细',
				path: '/admin/tradeManage/checkTradeDetails',
				component: '/admin/tradeManage/checkTradeDetails/checkTradeDetailsView',
			},
			{
				name: '统计交易量',
				path: '/admin/tradeManage/statisticsTradeVolume',
				component:
					'/admin/tradeManage/statisticsTradeVolume/statisticsTradeVolumeView',
			},
			{
				name: '统计手续费',
				path: '/admin/tradeManage/statisticsServiceCharge',
				component:
					'/admin/tradeManage/statisticsServiceCharge/statisticsServiceChargeView',
			},
			{
				name: '手续费管理',
				path: '/admin/tradeManage/poundageManage',
				component: '/admin/tradeManage/poundageManage/poundManageView',
			},
			{
				name: '添加碳币交易信息',
				path: '/admin/tradeManage/addCarbonTrade',
				component: '/admin/tradeManage/addCarbonTrade/addCarbonTradeView',
			},
		],
	},
	{
		name: '公告管理',
		path: '/admin/announceManage',
		component: '/admin/announceManage/announceManageView',
	},
	{
		name: '平台管理',
		path: '/admin/platformManage',
		component: '/admin/platformManage/platformManageView',
	},
	{
		name: '版本管理',
		path: '/admin/versionManage',
		component: '/admin/versionManage/versionManageView',
	},
];

export const UserMenu: Array<OriginMenuItemType> = [
	{ name: '概览', path: '/user' },
];

export const AuditorMenu: Array<OriginMenuItemType> = [
	{ name: '概览', path: '/auditor' },
	{ name: '审核', path: '/auditor/audit' },
	{ name: '查询', path: '/auditor/find' },
];
