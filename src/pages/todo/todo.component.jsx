import React from 'react';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { MainContent } from '../../components/maincontent/maincontent.component';
import { CreateTask } from '../createPage/createpage.component';
import {Route} from 'react-router-dom';
import './todo.styles.scss';

class ToDo extends React.Component {

    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <div className='homepage'>
                    <Sidebar className='sidebar'/>
                    <MainContent className='main-content'/>
                </div>
            </div>
        )
    }

}


export default ToDo;