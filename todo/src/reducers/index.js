// actions to be imported here
import {} from '../actions';

const reducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
      // throw new Error(`Error, action type invalid: ${action.type}`) // will be used when cases have been created
  }
}

export default reducer;