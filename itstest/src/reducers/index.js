import counterReducer from './counter';
import rowData from './rowData'
import columnDefs from './columnDefs';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    columnDefs: columnDefs,
    rowData: rowData,
    form: formReducer
})

export default allReducers;