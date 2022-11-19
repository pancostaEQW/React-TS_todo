import React, { FC, useEffect, useRef, useState } from 'react';
import { ITodo } from './typest/typest';
import { Checkbox } from '@mui/material';


interface TodoItemProps {
    todo: ITodo;
    button?: any;
    remove?: any;
    ind: number;
    toggle: (id: number) => void;
}
let mydate = new Date().toLocaleString()

const TodoItem: FC<TodoItemProps> = ( {todo, remove, ind, toggle} ) => {

  // const [mydate, setMydate] = useState(new Date().toLocaleString())
  // let mydate = new Date(todo.date).toLocaleString()

  // const newDate = () => {
  //   setMydate(new Date().toLocaleString())
  // }

  // let dta = new Date().toLocaleString()

  return (
    <div className='littlebox' >
       <Checkbox checked={todo.completed} onChange={() => toggle(todo.id)} />
    {todo.id = ind}. {todo.title} <button onClick={() => remove(todo)} className='redButt'> X </button>
    <div>{todo.date}</div>
    </div>
  )
}

export default TodoItem;