import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer, tokenMiddleware} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import {codeReducer} from './codeReducer';

export const store = configureStore({
  reducer: {
    code: codeReducer,
    token: tokenReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
