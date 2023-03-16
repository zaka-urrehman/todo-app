'use client'
import React, { useState } from 'react'

export default function Todo() {

    const [todo, setTodo] = useState('')

    const [todos, setTodos] = useState([
        { todoText: 'todo 1', completed: false },

        { todoText: 'todo 2', completed: false },
        { todoText: 'todo 3', completed: true }

    ])



    const onClickHandler = (meraElm: any) => {

        const newTodos = todos.map((todo) => {              //aik new array return karo same as old array
            if (todo.todoText == meraElm.todoText) {    //checkbox waly object ko array waly sy match karo
                todo.completed = !todo.completed      // agar false hy to true karo, true hy to false karo
            }
            return todo
        })

        setTodos(newTodos)
    }




    const addTodo = () => {
        const newTodo = { todoText: todo, completed: false }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }


    const DeleteTodos = (meraTodo:any)=>{
       const newTodos = todos.filter((todo)=>{
        
    if (todo.todoText==meraTodo.todoText){
        return false
    }else{
        return true
    }
       })
       setTodos(newTodos)
    }

    return (<>
        <h2>Todo</h2>
        <input type="text" placeholder='add your todo here'
            value={todo}
            onChange={(e) => {
                setTodo(e.target.value)
            }} />


        <button onClick={addTodo}>Add</button>





        <ul>
            {todos.map((elm) => {
                return (<li style={{
                    color: elm.completed ? 'green' : 'orange',
                    fontStyle: elm.completed ? "oblique" : "normal",
                    textDecoration: elm.completed ? "line-through" : 'none',
                    listStyle: 'none'
                }}
                    key={elm.todoText}>
                    <input type="checkbox" checked={elm.completed} onChange={() => { onClickHandler(elm) }} />
                    <span style={{ marginRight: 10 }}>{elm.todoText}</span>
                    <button style={{ backgroundColor: "dark-gray", margin: 'auto', padding: 'auto' }}
                        onClick={() => { DeleteTodos(elm) }}  >
                        Delete
                    </button>
                </li>
                )
            })}

        </ul>
    </>
    )
}
