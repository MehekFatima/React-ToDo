import React from 'react';
import {MdDeleteSweep} from 'react-icons/md'
const TaskItems = ({task, deleteTask, togglecheck })=>{
    return <li className='items'>
        <div className="items-text">
            <input type="checkbox" checked= {task.checked} onChange={()=>togglecheck(task.taskName)}/>
            <p className={task.checked? 'isChecked':''}>{task.taskName}</p>
        </div>
        <MdDeleteSweep className='delete-icon' onClick={()=>deleteTask(task.taskName)}></MdDeleteSweep>
    </li>;
};
export default TaskItems; 
