import React from 'react';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { MainContent } from '../../components/maincontent/maincontent.component';

import {Route} from 'react-router-dom';
import './todo.styles.scss';

export const ToDo = (props) => {

    console.log(props);
        return(
            <div>
                <div className='homepage'>
                    <Sidebar className='sidebar'/>
                    <MainContent className='main-content' {...props}/>
                </div>

            </div>
        )
    }

