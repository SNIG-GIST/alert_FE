import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './modules';
import {rootSaga} from './modules';

const sagaMiddleware = createSagaMiddleware();
const devToolsMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, devToolsMiddleware);
sagaMiddleware.run(rootSaga);

export default store;
