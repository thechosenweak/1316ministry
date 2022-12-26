import {combineReducers} from 'redux';
import User from './User';
import OnBoarding from './OnBoarding';

const reducer = combineReducers({
  user: User,
  onBoarding: OnBoarding,
});

export default reducer;
