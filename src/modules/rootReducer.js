import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {StudentReducer} from '../components/StudentForm';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  student: StudentReducer,
});

export default rootReducer;
