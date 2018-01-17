import {combineReducers} from 'redux';
import TestReducer from './test-reducer'

const allReducers = combineReducers({
    users: TestReducer
});

export default allReducers;