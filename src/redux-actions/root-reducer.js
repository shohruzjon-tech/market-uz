import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './product-redux/product.reducer';
import streamReducer from './stream-redux/stream.reducer';
import userReducer from './user-redux/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'user'],
};

const rootReducer = combineReducers({
   products: productReducer,
   stream: streamReducer,
   user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
