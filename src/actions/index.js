import axios from 'axios';
import { FETCH_ANIMALS } from './constants';

export function selectAnimal(animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal,
  }
}

//this is our
export function getAnimalsList() {

  return function(dispatch) {
    const url = 'http://localhost:3000/animals';

    const request = axios.get(url);

    request.then( response => {

      dispatch({
        type: FETCH_ANIMALS,
        payload: response.data
      })
    }).catch(err => console.log(err))
  }
}


