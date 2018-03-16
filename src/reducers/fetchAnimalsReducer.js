import { FETCH_ANIMALS } from '../actions/constants';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_ANIMALS:
     //console.log('fetch_animals_reducer', action);
     return action.payload
  }
  return state;
}