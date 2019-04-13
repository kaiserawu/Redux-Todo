// actions to be imported here
import { ADD_TODO } from '../actions';

const initialState = {
  todos: [
    {
      value: 'thing1',
      completed: false
    },
    {
      value: 'thing2',
      completed: false
    },
    {
      value: 'thing3',
      completed: false
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos,
          {
            value: action.payload,
            completed: false
          }
        ]
      }
    default:
      return state;
      // throw new Error(`Error, action type invalid: ${action.type}`) // will be used when cases have been created
  }
}

export default reducer;