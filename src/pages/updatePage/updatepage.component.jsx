import React from 'react';
import { Route } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { UpdateTaskContent } from '../../components/update/update.component';
import '../../components/sidebar/sidebar.styles.scss';
import '../../pages/todo/todo.styles.scss';
import '../createPage/createpage.styles.scss';

export const UpdateTask = (props) => {
    
    //  const {handleSubmit, handleChange, checkboxChange, submitTasks, values, tasks} = props;
    return (
        <div className='homepage'>
            <Sidebar className='sidebar'/>
        <UpdateTaskContent {...props}/>
        </div>
    )
}