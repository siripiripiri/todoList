import { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
      ...currentTodos,
      { id:crypto.randomUUID(), title: newItem, completed:false
    },
  ]
  })
  setNewItem("")
}
  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo=>
        {
          if(todo.id==id){
            return {...todo,completed}
          }
          return todo
        })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos=> {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  return( 
  <>
  <form onSubmit={handleSubmit} className="mainForm">
    <div className="form-row">

      <label id='top' htmlFor="item" >To-do List</label>
      <input value={newItem} placeholder="New Item"
      onChange={e => setNewItem(e.target.value)} 
      type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="headTitle">To-dos</h1>
  <div className="container">
  <ul className="list">
    {todos.length ===0 && "No Todos."}
    {todos.map(todo =>{
      return <li key={todo.id}>
        <div className="listContainer">
      <label className="listItemName">
        <input type="checkbox" className="checkb" checked={todo.completed}
        onChange={e => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button onClick={()=> deleteTodo(todo.id)} className="del-btn">Delete</button>
      </div>
    </li>
    })}
  </ul>
  </div>
  </>
)}