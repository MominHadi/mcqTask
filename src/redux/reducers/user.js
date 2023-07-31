import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
  userId: null,
  userDetails: null,
  name: '',
  username: '',
  email: '',
  phNo: '',
  gender: null,
  dob: null,
  anniversaryDate: null,
  country: null,
  token: null,
  referralCode: '',
  referredByReferralCode: null,
  isSignedIn: false,
  toggle: false,
  profileImage: null,
  function: false,
  function1: false,
  volunterId: null,
  highlightMessageId: 0,
  currentStatusIndex: 0,
  animationStop: false,
  currentArticaleIndex: 0,
  currentTab: 0
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case actionTypes.FUNCTION:
      return {
        ...state,
        function: payload,
      };
    case actionTypes.FUNCTION1:
      return {
        ...state,
        function1: payload,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        userId: payload,
      };
    case actionTypes.SET_STOP_ANIMATION:
      return {
        ...state,
        animationStop: payload,
      };

    case actionTypes.VOLUNETER:
      return {
        ...state,
        volunterId: payload,
      };

    case actionTypes.PROFILE_IMAGE:
      return {
        ...state,
        profileImage: payload,
      };
    case actionTypes.SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: payload,
      };
    case actionTypes.SET_STATUS_INDEX:
      return {
        ...state,
        currentStatusIndex: payload,
      };
    case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
      };
    case actionTypes.SET_IS_SIGNIN:
      return {
        ...state,
        isSignedIn: payload,
      };
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case actionTypes.SET_COUNTRY:
      return {
        ...state,
        country: payload,
      };

    case actionTypes.TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case actionTypes.SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case actionTypes.SET_PHONE_NUMBER:
      return {
        ...state,
        phNo: payload,
      };
    case actionTypes.SET_ANNIVERSARY_DATE:
      return {
        ...state,
        dob: payload,
      };
    case actionTypes.SET_DOB:
      return {
        ...state,
        anniversaryDate: payload,
      };
    case actionTypes.SETARTICALEINDEX:
      return {
        ...state,
        currentArticaleIndex: payload,
      };
    case actionTypes.CLEAR_SESSION:
      return {
        isSignedIn: false,
      };
    default:
      return state;
  }
};

export default user;
