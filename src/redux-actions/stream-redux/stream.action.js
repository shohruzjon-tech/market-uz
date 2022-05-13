import STREAM_ACTION_TYPES from './stream.type';

export const getStreamInfoStart = (payload)=>({
    type: STREAM_ACTION_TYPES.GET_STREAM_PRODUCT_START,
    payload: payload,
});

export const getStreamInfoSuccess = (payload)=>({
    type: STREAM_ACTION_TYPES.GET_STREAM_PRODUCT_SUCCESS,
    payload: payload,
});