import React from 'react';


const Stats = ({toDoList})=>{

    let countList = toDoList.length;

    return <div className="stats">
        <p className='notify'>{countList === 0? 'You are Done With Your Tasks 😁': `You Have ${countList} Task(s) Pending`}</p>
    </div>
};

export default Stats;