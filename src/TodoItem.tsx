import React, { FC } from 'react';
import { ITodo } from './typest/typest';
import { Checkbox } from '@mui/material';


interface TodoItemProps {
    todo: ITodo;
    button?: any;
    remove?: any;
    ind: number;
    toggle: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ( {todo, remove, ind, toggle} ) => {

  return (
    <div className='littlebox' >
       <Checkbox checked={todo.completed} onChange={() => toggle(todo.id)} />
    {todo.id = ind}. {todo.title} <button onClick={() => remove(todo)} className='redButt'> X </button>
    <div>{todo.date}</div>
    </div>
  )
}

export default TodoItem;