import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import logger from './logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const saga = createSagaMiddleware();
const store = createStore(
    logger(rootReducer),
    composeWithDevTools(applyMiddleware(saga))
)
saga.run(rootSaga);
export default store;
