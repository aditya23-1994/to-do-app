import React from 'react';
import {TextField, Button, Radio} from '@material-ui/core';
import {Tasks} from '../createpageContent/tasks.components';

export const UpdateTaskContent = (props) => {
    const {handleSubmit, handleChange, ...values} = props;
    
    return (
        <div className='createpage'>
        <div className='createpage__head'>
            <button className='createpage__head--back'>
            </button>
            <ion-icon class='createpage__head--icon' name="arrow-back-outline"></ion-icon>
            <p className='createpage__head--para'>Create Task</p>
        </div>
        <div className='Form-content'>
        <div className='Form-content__main'>
        <form onSubmit={handleSubmit} >
            <TextField  
                name='title' 
                onChange={handleChange} 
                value={values.title}
                className='form-content__main--title'
            />    
            <TextField 
                name='desc' 
                onChange={handleChange} 
                value={values.desc}
                className='form-content__main--desc' 
            />
        <div>
        <Radio name='branch' value="todo" type='radio' onChange={handleChange} />
        <Radio name='branch' value="inProgress" type='radio' onChange={handleChange}/>
        <Radio name='branch' value="Done" type='radio' onChange={handleChange}/>
        </div>
        <div>
        <Radio name='tag' value="personal" type='radio' onChange={handleChange}/>
        <Radio name='tag' value="official" type='radio' onChange={handleChange}/>
        <Radio name='tag' value="misc" type='radio' onChange={handleChange}/>
        </div>
        <input type='date' name='date' value={values.date} onChange={handleChange}/>
            <Button className='Form-content__main--btn' type='submit'>Update</Button>           
        </form>
        <div className='Form-content__todo'>
            <Tasks {...props} />
        </div>
        </div>
        </div>
        </div>
    )
};