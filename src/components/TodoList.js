import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div>

            {props.tasks.map((item) => (
            <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
            ))}
             <button className="clearButton" onClick={props.clearCompleted}>Clear completed tasks</button>

        </div>
    );
};




export default TodoList;



// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
