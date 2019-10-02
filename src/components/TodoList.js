import React from 'react';

const TodoList = props => {
  console.log('TodoList',props.todoList);
  return (
    <div>
      <ul>
        {
          props.todoList.map( todoItem => {
            console.log('list',todoItem);
            return (
              <li className={`${todoItem.isDone ? 'done' : 'undone'}`} >
                <span onClick={ () => props.toggleIsDone(todoItem.id) }>{todoItem.todoName}</span> <span onClick={ () => props.todoRemoveOneDone(todoItem.id) }>remove</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoList;