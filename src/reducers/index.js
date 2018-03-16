import { combineReducers } from 'redux';

import animalReducer from './animalReducer';
import selectedAnimalReducer from './selectedAnimalReducer';
import fetchAnimalsReducer from './fetchAnimalsReducer';


const rootReducer = combineReducers({
  //state : ( state = {} ) => state
  animals: animalReducer,
  selectedAnimal: selectedAnimalReducer,
  animalList : fetchAnimalsReducer
})

export default rootReducer;
