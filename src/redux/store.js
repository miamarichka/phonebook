import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phonebookReducer } from "./phoneBook";
import { filterReducer } from "./filter";
import {authReducer} from "./userSlice"

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
  auth: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}, composeWithDevTools())

export const persistor = persistStore(store)

