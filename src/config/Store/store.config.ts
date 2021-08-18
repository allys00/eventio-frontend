import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import rootSaga from './mainSaga';
import rootReducer from './mainReducer';

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const devTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const Store = applyMiddleware(sagaMiddleware, historyMiddleware)(createStore)(
  rootReducer,
  devTools
);

sagaMiddleware.run(rootSaga);

export { history };

export default Store;
