import React from 'react';


export const TaskCard = (props) => {

    let {editCheckbox,deleteTask, items} = props;
    return(<div className='card__task'>
        <input className='card__task-checkbox' type='checkbox' onClick={(e)=>editCheckbox(items.id, items.refId, e)} />
        <p className='card__task-title'>{items.text}</p>
        <button type='button' className='card__task-btn' onClick={(e)=>deleteTask(items.id,items.refId, e)}>del</button>
    </div>)
}