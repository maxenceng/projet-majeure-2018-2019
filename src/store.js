import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

export const configureStore = (reducer, initialState) => createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default (initialState, { isServer }) => {
  if (isServer) return configureStore(reducers, initialState);
  const persistConfig = {
    key: 'nextjs',
    storage,
    whitelist: ['currentConv', 'event', 'profile', 'idEvent', 'location', 'partcipant', 'interested'],
  };
  const persistedReducers = persistReducer(persistConfig, reducers);
  const store = configureStore(persistedReducers, initialState);
  store.__persistor = persistStore(store);
  return store;
};
