import { applyMiddleware, combineReducers, createStore } from 'redux';
import createLogger from 'redux-logger';
import { reducer as layoutReducer } from 'Components/Layout';

const reducer = combineReducers({
  layout: layoutReducer,
});
const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
