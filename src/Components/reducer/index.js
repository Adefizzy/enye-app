import { combineReducers } from 'redux';
import { birthday } from './birthdayReducer';
import { formStatus } from './formStatusReducer';
import { key } from './keyReducer';
import { users } from './usersReducer';

//@param reducerBucket: a container for all the reducers
export const reducerBucket = combineReducers({
    birthday,
    formStatus,
    key,
    users
  });