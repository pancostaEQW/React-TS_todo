import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import List from "./List";
import MyInputFile from "./MyInputFile";
import MySelect from "./MySelect";
import TodoItem from "./TodoItem";
import { ITodo } from "./typest/typest";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newToDos, setNewToDos] = useState<any>([]);
  const [selectedSort, setSelectedSort] = useState<any>("");

  useEffect(() => {
    fetchTodos();
  }, []);



  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=12"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  const addNewToDo = (e: any) => {
    e.preventDefault();
    const newTODO: ITodo = {
      id: todos.length + 1,
      title: newToDos,
      completed: false,
      date: new Date().toLocaleString()
    };
    setTodos([...todos, newTODO]);
    console.log(todos);
    setNewToDos("");
  };

  const removeToDo = (todo: ITodo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  let ind = 1;
  

  const sortToDo = (sort: string) => {
    setSelectedSort(sort);
    if (sort === "title") {
      setTodos(
        [...todos].sort((a: ITodo, b: ITodo) => a[sort].localeCompare(b[sort]))
      );
    }
    if (sort === "completed") {
      setTodos([...todos].sort((a: ITodo, b: ITodo) => (a.completed ? -1 : 1)));
    }
    if (sort === "noCompleted") {
      setTodos([...todos].sort((a: ITodo, b: ITodo) => (a.completed ? 1 : -1)));
    }
    
    if (sort === "reverse") {
      setTodos([...todos].sort((a: ITodo, b: ITodo) => -1));
    }
    if (sort === "seeAll") {
      setTodos([...todos].map((t) => t));
    }
  };

  const toggle = (id: number) => {
    setTodos(
      todos.reduce((acc: ITodo[], todo: ITodo) => {
        if (todo.id !== id) {
          return [...acc, todo];
        }
        return [...acc, { ...todo, completed: !todo.completed}];
      }, [])
    );
  };


  return (
    <div className="block">
      <MyInputFile></MyInputFile>
      <MySelect
        value={selectedSort}
        onClick={sortToDo}
        defaultValue="SetingSort"
        options={[
          { value: "title", name: "TITLE..." },
          { value: "completed", name: "COMPLETED..." },
          { value: "noCompleted", name: "NO_COMPLETED..." },
          { value: "reverse", name: "REVERSE..." },
          { value: "seeAll", name: "SEE_ALL..." },
        ]}
      />
      <input
        value={newToDos}
        onChange={(e) => setNewToDos(e.target.value)}
        className="myInput"
        type="text"
        placeholder="do..."
      ></input>
      <button className="myBtn" onClick={addNewToDo}>
        ENTER
      </button>
      {todos.length === 0 ? (
        <div className="emp">EMPTY...</div>
      ) : (
        <List
          items={todos}
          renderIterm={(todo: ITodo) => (
            <TodoItem
              toggle={toggle}
              remove={removeToDo}
              ind={ind++}
              todo={todo}
              key={ind}
            />
          )}
        />
      )}
      <div className="compl">
        Completed:{" "}
        {todos.filter((t) => t.completed).length === todos.length &&
        todos.length !== 0
          ? "SUCCESSFUL BOOOOOOY"
          : todos.filter((t) => t.completed).length}
      </div>
    </div>
  );
}

export default App;
