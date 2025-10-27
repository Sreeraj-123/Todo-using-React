import "../css/todo.css"
function Todo({id,message,completed,onDelete,onToggle}){
    return(
        <div className="todo">
            <input type="checkbox" className="todo-checkbox" onChange={()=>{onToggle(id)}}/>
            <span  className={completed===true ? "todo-completed-message" : "todo-message"}>{message}</span>
                <span className="material-symbols-outlined todo-close" onClick={()=>{onDelete(id)}}>close</span>
        </div>
    )
}
export default Todo;