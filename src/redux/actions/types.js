// Router
export const WELCOME = 'WELCOME';
export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN';
export const SET_LOADING = 'SET_LOADING';


// Backend: production vs. development
export const BASE_URL = 'https://epluribus.io/unumbackend';
// export const BASE_URL = 'http://13.57.227.196:3006/';
// export const BASE_URL = 'http://192.168.1.37:3006/'
export const URL_EMAIL_VERIFICATION = `${BASE_URL}startEmailVerificationFive`;
export const URL_CONFIRM_EMAIL_VERIFICATION = `${BASE_URL}completeEmailVerification`;
export const URL_PHONE_VERIFICATION = `${BASE_URL}startPhoneVerificationSix`;
export const URL_CONFIRM_PHONE_VERIFICATION = `${BASE_URL}completePhoneVerification`;
export const URL_VERIFY_ADDRESS = `${BASE_URL}startAddressVerification`;
export const URL_CHECK_ADDRESS = `${BASE_URL}addressDeliverability`;
export const URL_SUBMIT_ADDRESS = `${BASE_URL}submitAddressVerification`;

// Flow
export const INCREAMENT_FLOW = 'INCREAMENT_FLOW';
export const DECREAMENT_FLOW = 'DECREAMENT_FLOW';

// Scan Tab
export const PASS_WELCOME = 'PASS_WELCOME';
export const SET_USER_DATA = 'SET_USER_DATA';
export const ADD_CREDENTIAL = 'ADD_CREDENTIAL';
export const SAVE_REQUEST = 'SAVE_REQUEST';
export const SAVE_FLOW = 'SAVE_FLOW';
export const SAVE_FLOWSTATE = 'SAVE_FLOWSTATE';
export const RESET_FLOW = 'RESET_FLOW';
export const CLEAR_FLOW = 'CLEAR_FLOW';
export const CLEAR_ROUTE = 'CLEAR_ROUTE';
export const CLEAR_USER = 'CLEAR_USER';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const UPDATE_DATA_POINT = 'UPDATE_DATA_POINT';
export const SET_LOCK_STATUS = 'SET_LOCK_STATUS';
export const SET_AUTHENTICATION_ENABLED = 'SET_AUTHENTICATION_ENABLED';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_ADDRESS_LINE_1 = 'SET_PHONE_NUMBER';
export const SET_ADDRESS_LINE_2 = 'SET_PHONE_NUMBER';
export const SET_ADDRESS_CITY = 'SET_PHONE_NUMBER';
export const SET_ADDRESS_STATE = 'SET_PHONE_NUMBER';
export const SET_ADDRESS_ZIPCODE = 'SET_PHONE_NUMBER';
export const SET_ADDRESS_VERIFICATION_ID = 'SET_ADDRESS_VERIFICATION_ID';
export const SAVE_DID = 'SAVE_DID';
export const SAVE_QRCODE_TOKEN = 'SAVE_QRCODE_TOKEN';
export const SET_VERIFIED_ADDRESS_TOKEN = 'SET_VERIFIED_ADDRESS_TOKEN';
export const RESET_DID = 'RESET_DID';
export const DELETE_DID = 'DELETE_DID';
