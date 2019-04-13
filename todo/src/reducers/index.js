// actions to be imported here
import { ADD_TODO, TOGGLE_TODO } from '../actions';

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
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => action.payload === index ? {...todo, completed: !todo.completed} : todo)
      }
    default:
      return state;
  }
}

export default reducer;