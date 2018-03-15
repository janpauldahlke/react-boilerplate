
export function selectAnimal(animal) {
  return {
    type: 'ANIMAL_CLICKED',
    payload: animal,
  }
}

export function fetchAnimals(){
  //do some AJAX ->  let response = do AJAX magic here

  return {
    type : 'FETCH_ANIMAL',
    payload : response
  }
}