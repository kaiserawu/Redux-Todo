// add exported action names here
export const ADD_TODO = 'ADD_TODO'

// add exported actions here
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}