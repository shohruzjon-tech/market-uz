import USER_ACTION_TYPES from "./user.types";


export const userAuthStart = (payload)=>({
     type: USER_ACTION_TYPES.USER_AUTHENTICATE_START,
     payload: payload,
});

export const userAuthSucces = (payload)=>({
    type: USER_ACTION_TYPES.USER_AUTHENTICATE_SUCCESS,
    payload: payload,
});

export const userAuthFail = (payload)=>({
    type: USER_ACTION_TYPES.USER_AUTHENTICATE_FAIL,
    payload: payload,
});

//get user address

export const getuserAdressStart = (payload)=>({
    type: USER_ACTION_TYPES.GET_USER_ADDRESS_START,
    payload: payload,
});

export const getUserAddressSuccess = (payload) =>({
    type: USER_ACTION_TYPES.GET_USER_ADDRESS_SUCCESS,
    payload: payload,
});