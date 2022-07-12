import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer, tokenMiddleware} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import {codeReducer} from './codeReducer';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    code: codeReducer,
    token: tokenReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, thunk),
});
