import { SET_USER, SET_TOKEN, SET_MENU, SET_ROUTES } from '../Type';
import type { ActionType } from '../../types';

const initialState = {
	userInfo: {},
	token: '',
	menu: [
		{
			label: '概览',
			key: '/admin',
		},
	],
	routes: [],
};

function reducer(state = initialState, action: ActionType) {
	switch (action.type) {
		case SET_USER:
			return { ...state, userInfo: action.payload };
		case SET_TOKEN:
			return { ...state, token: action.payload };
		case SET_MENU:
			return { ...state, menu: action.payload };
		case SET_ROUTES:
			return { ...state, routes: action.payload };
		default:
			return state;
	}
}

export default reducer;
