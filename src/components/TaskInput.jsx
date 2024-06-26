import React, { useState } from "react";
import '../index.css';
const TaskInput =({addTask}) =>{
    const[task, setTask] = useState('');


    function handleInputValue(event){
        setTask(event.target.value);
    }
function handleAddTask(event){
    event.preventDefault();
    if(task.trim()==='') return;
    addTask(task);
    setTask('');
}


    return (
        <form className="inputField" onSubmit={handleAddTask}>
            <input type="text" value = {task} placeholder="Add Your Task!" onChange={handleInputValue}/>
            <button>+</button>
        </form>
    )
}
export default TaskInput
