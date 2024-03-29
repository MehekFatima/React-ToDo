import { useState, useEffect } from 'react';

import TaskInput from './components/TaskInput';
import TaskItems from './components/TaskItem';
import Stats from './components/stats';

function App() {
  // Load tasks from local storage on initial render
  const initialTasks = JSON.parse(localStorage.getItem('todoList')) || [];
  const [toDoList, setToDoList] = useState(initialTasks);

  // Update local storage whenever toDoList changes
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(toDoList));
  }, [toDoList]);

  // const [toDoList, setToDoList] = useState([]);

const addTask = (taskName) =>{
  const newTask = {taskName, checked: false};
  setToDoList([...toDoList, newTask])
};


function deleteTask(deleteTaskName){
  setToDoList(toDoList.filter(task=>task.taskName !== deleteTaskName))
}

function togglecheck(taskName){
  setToDoList((pervToDoList) => pervToDoList.map((task) =>task.taskName=== taskName?{...task,checked:!task.checked}:task),);
}

  return(
  <>
  <div className='container'>
    <h1>To-Do App</h1>

    <TaskInput addTask ={addTask}/>

    <div className="toDoList">
      <span>To do</span>
      <ul className="list-items">

        {toDoList.map((task, key)=> <TaskItems task={task} key={key} deleteTask = {deleteTask} togglecheck = {togglecheck}></TaskItems>)}

      </ul>

      {toDoList.length ===0?(<p className='notify'>You Are Done With your Tasks!</p>):null}
    </div>

  </div>
  <Stats toDoList={toDoList}></Stats>
  
  </>
  );
   
  
}

export default App;