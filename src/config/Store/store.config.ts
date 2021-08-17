
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga'

import rootSaga from './mainSaga'
import rootReducer from './mainReducer'

const sagaMiddleware = createSagaMiddleware()

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const Store = applyMiddleware(sagaMiddleware)(createStore)(rootReducer, devTools);

sagaMiddleware.run(rootSaga)

export default Store;