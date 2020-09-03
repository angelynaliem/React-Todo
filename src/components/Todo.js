import React from 'react';

const Todo = (props) => {

    return (
        <div 
        onClick={() => props.toggleTask(props.item.id)}
        className={`task${props.item.completed ? " completed" : ""}`}
        >

        <h2>{props.item.task}</h2>

        </div>

    );
};





export default Todo;