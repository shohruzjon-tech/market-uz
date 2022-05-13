export const getAuthLoadingStatus = (state)=>{
    return state.user.user_auth_loading;
};

export const getCurrentUserData = (state)=>{
    return state.user.current_user;
};

export const getUserAddressList = (state)=>{
    return state.user.user_address_list;
};

export const getLengthOfAdressList = (state)=>{
    return state.user.user_address_list?.length;
};