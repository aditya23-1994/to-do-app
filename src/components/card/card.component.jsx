import React from 'react';
import './card.styles.scss';

export const Card = ({editCheckbox, ...todo}) => {

   const  {tag,  title, date, desc, items } = todo;
    return (

        <div className='card'>
            <div className='card__item-1'>
                <p className='card__item-1__header'>{tag}</p>
                <p>Nav</p>
            </div>
            <div className='card__item-2'>
                <p className='card__item-2__title'>{title}</p>
                <p className='card__item-2__title'>{date}</p>
            </div>
            <div className='card__item-3'>
                <p>{desc}</p>
            </div> 
            <div className='card__sub-tasks'>
                <ul> 
  
                            
                    {items ? items.map(item=>(
                        <div key={item.id}>

                        <li className='card__sub-tasks-lists'>
                            <input type='checkbox' onClick={(e)=>editCheckbox(item.id, item.refId, e)} />
                            {item.text}</li>
                        </div>
                        )) : <h3>"no tasks added" </h3>  
                    }    
                </ul>
            </div>
        </div>

    )
}