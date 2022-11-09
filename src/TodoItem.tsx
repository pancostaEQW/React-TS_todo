import React, { FC, useEffect, useRef, useState } from 'react';
import { ITodo } from './typest/typest';
import { Checkbox } from '@mui/material';


interface TodoItemProps {
    todo: ITodo;
    button?: any;
    remove?: any;
    ind: number;
    toggle: any;
}

const TodoItem: FC<TodoItemProps> = ( {todo, remove, ind, toggle} ) => {
  // const [isChecked, setIsChecked] = useState(todo.completed);

  // const handelCheckBox = () => {
  //   setIsChecked(!isChecked)
  // }

  // const rofl = isChecked ? isChecked : todo.completed

  return (
    <div>
       <Checkbox checked={todo.completed} onChange={() => toggle(todo.id)} />
    {todo.id = ind}. {todo.title} <button onClick={() => remove(todo)} className='redButt'> X </button>
    </div>
  )
}

export default TodoItem;