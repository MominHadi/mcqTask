import * as actionTypes from '../actionTypes/actionTypes';
const initialState = {
	cartItems: [],
	isCartModalVisible: false,
	totalAmount: 0,
	isProductAdded: false,
};

const cart = (state = initialState, action) => {

	const { type, payload } = action;

	switch (type) {

		case actionTypes.SET_CART_ITEMS:
			return {
				...state,
				cartItems: [...payload],
			};

	
	
		default:
			return state;
	}
};

export default cart;