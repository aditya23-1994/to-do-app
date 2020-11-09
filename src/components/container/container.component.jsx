import React from 'react';
import {Card} from '../card/card.component';

export const TodoContainer = (props) => {
    const {todo, editCheckbox} = props;

    return(
        <div className="content-item">
            <p className="container-title container-title-1">To-Do</p>
            <div className="content__card">
            
            {todo.filter(todo=>(todo.branch === 'todo')).map(todo =>
                <div key={todo.id}>
                    <Card {...todo} editCheckbox={editCheckbox} />
                </div>
                )}    
            </div>
        </div>
    )
};

export const InProgressContainer = ({todo}) => {
    return(
        <div className="content-item">
            <p className="container-title container-title-2">in-progress</p>
            <div className="content__card">
            {todo.filter(todo=>(todo.branch === 'inProgress')).map(todo =>
                <div key={todo.id}>
                    <Card {...todo} />
                </div>
                )} 
        </div>
        </div>
    )
};

export const DoneContainer = ({todo}) => {
    return(
        <div className="content-item">
            <p className="container-title container-title-3">Done</p>
            <div className="content__card">
            {todo.filter(todo=>(todo.branch === 'done')).map(todo =>
                <div key={todo.id}>
                    <Card {...todo} />
                </div>
                )} 
            </div>
        </div>
    )
};

