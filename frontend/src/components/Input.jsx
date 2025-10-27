import "../css/input.css"
import { useState } from "react";
import Todo from "./Todo.jsx";

function Input(){
    const [nodeInput,setNodeInput]=useState("");
    const [todos,setTodos]=useState([]);
    

    const handleAdd=()=>{
        if(nodeInput.trim()==="")return;
        const newtodo={
            id:Date.now(),
            message:nodeInput,
            completed:false
        };
        setTodos([...todos,newtodo]);
        setNodeInput("");

    }
    const handleDelete=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
        console.log(id);
    }

    const handleToggle=(id)=>{
        setTodos(todos.map(todo=>(
            todo.id===id ? {...todo,completed:!todo.completed} : todo
        )));
    }
    return(
        <>
            <div className="input">
                <input
                    type="text"
                    className="input-field"
                    value={nodeInput}
                    onChange={(e)=>setNodeInput(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button className="input-button" onClick={handleAdd}>Add</button>
            </div>
            {todos.map(todo=>(<Todo  
                key={todo.id}
                id={todo.id}
                message={todo.message} 
                completed={todo.completed}
                onDelete={handleDelete}
                onToggle={handleToggle}
                />
            ))}
        </>
    )
}
export default Input;