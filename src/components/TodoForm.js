import React, { useState } from 'react';

const TodoForm = props => {
  const [inputVal, setInputVal] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    props.todoAdd(inputVal);
    setInputVal('');
  }
  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={ event => setInputVal(event.target.value) } value={inputVal} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm;