import { applyMiddleware, combineReducers, createStore } from 'redux';
import createLogger from 'redux-logger';

import { reducer as layoutReducer } from 'Components/Layout';
import { reducer as contentReducer } from 'Components/Content';

const reducer = combineReducers({
  layout: layoutReducer,
  content: contentReducer,
});
const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
