import React from 'react';
import { Route } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { CreatePageContent } from '../../components/createpageContent/createpageContent.component';
import { UpdateTask } from '../../components/update/update.component';
import '../../components/sidebar/sidebar.styles.scss';
import '../../pages/todo/todo.styles.scss';
import './createpage.styles.scss';

export const CreateTask = (props) => {

     const {handleSubmit, handleChange, checkboxChange, submitTasks, values, tasks} = props;
    return (
        <div className='homepage'>
            <Sidebar className='sidebar'/>

            <Route exact path='/create-task' render={({match, history})=><CreatePageContent
                             handleSubmit={handleSubmit}
                             match = {match} history={history} 
                             handleChange={handleChange} {...values} tasks={tasks}
                             checkboxChange={checkboxChange}
                             submitTasks={submitTasks} />}/>

        </div>
    )
}