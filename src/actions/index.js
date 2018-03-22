import axios from 'axios';
import { FETCH_ANIMALS, CREATE_ANIMAL, DELETE_ANIMAL } from './constants';

//consts
const url = 'http://localhost:3000/animals';



//--functions
export function selectAnimal(animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal,
  }
}

//this is our
export function getAnimalsList() {

  return function(dispatch) {
    

    const request = axios.get(url);

    request.then( response => {

      dispatch({
        type: FETCH_ANIMALS,
        payload: response.data
      })
    }).catch(err => console.log(err))
  }
}


export function createAnimal(animal){
  return function(dispatch) {
    const post = axios.post(url, animal);
    post.then( response => {

      dispatch({
        type: CREATE_ANIMAL,
        payload: response.data
      })
    }).catch(err => console.log(err))
  }
}

export function deleteAnimalById(id) {
  return function(dispatch) {
    const del = axios.delete(`${url}/${id}`);

    del.then( response => {
      dispatch({
        type: DELETE_ANIMAL,
        payload: response.status,
        id: id
      })
    }).catch(err => console.log(err))
  }
}


