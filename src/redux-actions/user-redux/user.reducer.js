import USER_ACTION_TYPES from './user.types';

const INITIAL_STATE = {
   current_user: null,
   user_auth_loading: false,
   user_auth_error: undefined,

   //GET USER ADDRESSES

   user_address_list: undefined,
};


const userReducer = (state=INITIAL_STATE, action) =>{
       switch (action.type) {
           case USER_ACTION_TYPES.USER_AUTHENTICATE_START:
               return {
                   ...state,
                   user_auth_loading: true,
                   user_auth_error: undefined,
               };
            case USER_ACTION_TYPES.USER_AUTHENTICATE_SUCCESS:
                return {
                  ...state,
                  current_user: action.payload,
                  user_auth_loading: false,
                  user_auth_error: undefined,
                };
            case USER_ACTION_TYPES.USER_AUTHENTICATE_FAIL:
                return {
                  ...state,
                  current_user: undefined,
                  user_auth_loading: false,
                  user_auth_error: action.payload,
                };
            case USER_ACTION_TYPES.GET_USER_ADDRESS_SUCCESS:
                return {
                  ...state,
                  user_address_list: action.payload,
                };
           default:
               return state;
       }
};

export default userReducer;