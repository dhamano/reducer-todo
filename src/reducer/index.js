export const TODO_ADD         = "TODO_ADD";
export const TODO_REMOVE_ONE  = "TODO_REMOVE_ONE";
export const TODO_REMOVE_DONE = "TODO_REMOVE";
export const TODO_TOGGLE_DONE = "TODO_TOGGLE_DONE";

export const initialTodoList = {
  todoList: [
    {
      todoName: "Get Groceries",
      id: 0,
      isDone: false
    },
    {
      todoName: "Go To Gym",
      id: 1,
      isDone: false
    },
    {
      todoName: "Clean Bathroom",
      id: 2,
      isDone: true
    },
  ]
};

export const reducer = (state, action) => {
  switch(action.type) {
    case TODO_ADD:
      let newTodo = {
        todoName: action.payload,
        id: Date.now(),
        isDone: false
      };
      return {
        ...state,
        todoList: [ ...state.todoList, newTodo ]
      };
    case TODO_REMOVE_ONE:
      return {
        ...state,
        todoList: state.todoList.filter( todoItem => action.payload !== todoItem.id)
      };
    case TODO_REMOVE_DONE:
      return {
        ...state,
        todoList: state.todoList.filter( todoItem => !todoItem.isDone )
      };
    case TODO_TOGGLE_DONE:
      return {
        ...state,
        todoList: state.todoList.map( todoItem => {
          if(action.payload === todoItem.id) {
            console.log('item clicked!')
            return {
              ...todoItem,
              isDone: !todoItem.isDone
            };
          }
          return todoItem;
        })
      };
    default:
      return state;
  }
}