import { combineReducers } from 'redux';

import animalReducer from './animalReducer';


const rootReducer = combineReducers({
  //state : ( state = {} ) => state
  animals: animalReducer
})

export default rootReducer;
