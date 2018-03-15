export default function(state=null, action) {
  switch(action.type) {
    case 'ANIMAL_CLICKED':
      //console.log(action)
      return action.payload
  }
  return state;
}