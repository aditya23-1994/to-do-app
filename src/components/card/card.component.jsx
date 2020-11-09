import React from 'react';
import './card.styles.scss';

export const Card = (props) => {
    return (

        <div className='card'>
            <div className='card__item-1'>
                <p className='card__item-1__header'>Personal</p>
                <p>Nav</p>
            </div>
            <div className='card__item-2'>
                <p className='card__item-2__title'>Task Name</p>
                <p className='card__item-2__title'>Date</p>
            </div>
            <div className='card__item-3'>
                <p>description is a must should be aligned properly hence this is a test so far test are pretty good</p>
            </div> 
            <div className='card__sub-tasks'>
                <ul>
                    <li className='card__sub-tasks-lists'><input type='checkbox' />sub task</li>
                    <li className='card__sub-tasks-lists'><input type='checkbox' />sub task</li>
                    <li className='card__sub-tasks-lists'><input type='checkbox' />sub task</li>
                    <li className='card__sub-tasks-lists'><input type='checkbox' />sub task</li>
                    <li className='card__sub-tasks-lists'><input type='checkbox' />sub task</li>
                </ul>
            </div>
        </div>

    )
}