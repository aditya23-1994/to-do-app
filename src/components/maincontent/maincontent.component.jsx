import React from 'react';
import './maincontent.styles.scss';
import {TodoContainer, InProgressContainer, DoneContainer} from '../container/container.component';


let date = new Date().toLocaleDateString();
let currDate = date.replace('/', '-').replace('/','-');

export const MainContent = (props) => (
    <div className='main-content'>
        <div className='task-search'>
            <div className='search-box'>
                <ion-icon name="search-outline"></ion-icon>
                <input className='search-input' type='search' placeholder='search task Titles' />
            </div>
            <div className='rest-elements'>
                <button className='button-task'>new task</button>
                <div className='date'>
                <ion-icon name="calendar-clear-outline"></ion-icon>
                    <p class='date-value'>{ currDate }</p>
                </div>
            </div>
        </div>
        <div className='content'>
            <TodoContainer/>
            <InProgressContainer />
            <DoneContainer/>
        </div>
    </div>
)