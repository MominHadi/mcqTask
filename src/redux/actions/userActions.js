
import * as actionTypes from '../actionTypes/actionTypes';


export const setUserId = payload => ({
	type: actionTypes.SET_USER,
	payload,
});

export const setUserDetails = payload => ({
	type: actionTypes.SET_USER_DETAILS,
	payload,
});

export const setProfileImage = payload => ({
	type: actionTypes.PROFILE_IMAGE,
	payload,
});

export const setName = payload => ({
	type: actionTypes.SET_NAME,
	payload,
});
export const setCurrentTab = payload => ({
	type: actionTypes.SET_CURRENT_TAB,
	payload,
});
export const setStatusIndex = payload => ({
	type: actionTypes.SET_STATUS_INDEX,
	payload,
});
export const setStopAnimation = payload => ({
	type: actionTypes.SET_STOP_ANIMATION,
	payload,
});


export const setHighlightMessageId = payload => ({
	type: actionTypes.SET_HIGHLIGHT_MESSAGE_ID,
	payload,
});
export const setUserName = payload => ({
	type: actionTypes.SET_USERNAME,
	payload,
});

export const setEmail = payload => ({
	type: actionTypes.SET_EMAIL,
	payload,
});

export const setPhone = payload => ({
	type: actionTypes.SET_PHONE_NUMBER,
	payload,
});

export const setDob = payload => ({
	type: actionTypes.SET_DOB,
	payload,
});
export const setCountry = payload => ({
	type: actionTypes.SET_COUNTRY,
	payload,
});

export const setAnniversaryDate = payload => ({
	type: actionTypes.SET_ANNIVERSARY_DATE,
	payload,
});

export const setSignedIn = payload => ({
	type: actionTypes.SET_IS_SIGNIN,
	payload,
});
export const setFunction = payload => ({
	type: actionTypes.FUNCTION,
	payload,
});

export const setFunction1 = payload => ({
	type: actionTypes.FUNCTION1,
	payload,
});
export const clearSession = () => ({
	type: actionTypes.CLEAR_SESSION,
});


export const settoggleState = () => ({
	type: actionTypes.TOGGLE,
});

export const setVolinterId = payload => ({
	type: actionTypes.VOLUNETER,
	payload,
});







