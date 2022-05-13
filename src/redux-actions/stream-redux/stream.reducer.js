import STREAM_ACTION_TYPES from './stream.type';

const INITIAL_STATE={
    stream_number: null,
    stream_info: null,
    stream_is_loading: true,
};

const streamReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case STREAM_ACTION_TYPES.GET_STREAM_PRODUCT_START:
            return {
                ...state,
                stream_number: action.payload,
                stream_is_loading: true,
            }
        case STREAM_ACTION_TYPES.GET_STREAM_PRODUCT_SUCCESS:
            return {
                ...state,
                stream_info: action.payload,
                stream_is_loading: false,
            }
        default:
            return state;
    }
};


export default streamReducer;