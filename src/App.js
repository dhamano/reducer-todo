import React, { useReducer } from 'react';

import { reducer, initialTodoList, TODO_ADD, TODO_REMOVE_DONE, TODO_TOGGLE_DONE, TODO_REMOVE_ONE } from './reducer';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const  App = () => {
  const[{ todoList }, dispatch] = useReducer(reducer, initialTodoList);
  console.log('app todoList',todoList);

  const todoAdd = todoItem => {
    dispatch({ type: TODO_ADD, payload: todoItem });
  }

  const toggleIsDone = todoItemId => {
    console.log('toggle is done')
    dispatch({ type: TODO_TOGGLE_DONE, payload: todoItemId });
  }

  const todoRemoveOneDone = todoItemId => {
    console.log('remove todoItemId',todoItemId);
    dispatch({ type: TODO_REMOVE_ONE, payload: todoItemId });
  }

  const todoRemoveDone = () => {
    dispatch({ type: TODO_REMOVE_DONE });
  }

  return (
    <div className="App">
      <TodoForm todoAdd={todoAdd} todoRemoveDone={todoRemoveDone} />
      <TodoList toggleIsDone={toggleIsDone} todoRemoveOneDone={todoRemoveOneDone} todoList={todoList} />
    </div>
  );
}

export default App;
