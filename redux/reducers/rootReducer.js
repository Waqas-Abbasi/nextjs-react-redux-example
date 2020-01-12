import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;
