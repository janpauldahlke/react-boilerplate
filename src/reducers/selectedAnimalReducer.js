export default function(state=null, action) {
  switch(action.type) {
    case 'ANIMAL_CLICKED':
      console.log('from reducer', action);
      return action.payload;
  }
  return state;
}