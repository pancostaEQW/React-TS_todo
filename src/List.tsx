import React from 'react';
import "./App.css";

interface ListProps<T> {
    items: T[];
    renderIterm: (item: T) => React.ReactNode;
    ind?: number;
}

export default function List<T>(props: ListProps<T>) {
  return (
    <div className='list'>
      {props.items.map(props.renderIterm)}
    </div>
  )
}
