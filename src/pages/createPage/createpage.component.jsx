import React from 'react';
import { Route } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { CreatePageContent } from '../../components/createpageContent/createpageContent.component';
import '../../components/sidebar/sidebar.styles.scss';
import '../../pages/todo/todo.styles.scss';
import './createpage.styles.scss';

export const CreateTask = (props) => {

     const {handleSubmit, taskChange, handleChange, checkboxChange, submitTasks, values, tasks, todo} = props;
    return (
        <div className='homepage'>
            <Sidebar className='sidebar'/>

            <Route exact path='/create-task' render={({match, history})=><CreatePageContent
                             handleSubmit={handleSubmit}
                             match = {match} history={history} 
                             taskChange={taskChange}
                             handleChange={handleChange} {...values} tasks={tasks} todo ={todo}
                             checkboxChange={checkboxChange}
                             submitTasks={submitTasks} />}/>

        </div>
    )
}