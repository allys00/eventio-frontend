import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import rootSaga from './mainSaga';
import rootReducer from './mainReducer';
import { LOGIN_ACTIONS } from '../../pages/Login/Store/reducer';

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const devTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const RootReducer = (state: any, action: any) => {
  if (action.type && action.type === LOGIN_ACTIONS.ASYNC_LOGOUT) {
    state = undefined;
  }

  return rootReducer(state, action);
};

const Store = applyMiddleware(sagaMiddleware, historyMiddleware)(createStore)(
  RootReducer,
  devTools
);

sagaMiddleware.run(rootSaga);

export { history };

export default Store;
