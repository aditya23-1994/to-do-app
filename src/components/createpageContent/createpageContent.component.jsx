import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {Tasks} from './tasks.components';
import './createpageContent.styles.scss';

export const CreatePageContent = (props) => {

    const {handleSubmit, handleChange, checkboxChange, submitTasks, ...values} = props;

    return (
        <div className='createpage'>
        <div className='createpage__head'>
            <Link to='/'><button className='createpage__head--back'>
            </button></Link>
            <ion-icon className='createpage__head--icon' name="arrow-back-outline"></ion-icon>
            <p className='createpage__head--para'>Create Task</p>
        </div>
        <div className='Form-content'>
            <div className='Form-content__main'>
                <form onSubmit={handleSubmit} >
                  <div>
                    <p>enter task name</p>
                    <input  
                      
                      name='title' 
                      onChange={handleChange} 
                      value={values.title}
                      className='form-content__main--title'
                    />    
                  </div>
                  <div className='form-content__main--desc' >
                    <p>Enter Description</p>
                    <input 
                      name='desc' 
                      onChange={handleChange} 
                      value={values.desc}
                    />
                  </div>
                  <p>Branch to</p>
                  <div className='radio-group'>
                    <input name='branch' id='option-one' value="todo" type='radio' onChange={handleChange}/>
                    <label for='option-one'>to-do</label>
                    <input name='branch' id='option-two' value="inProgress" type='radio' onChange={handleChange}/>
                    <label for='option-two'>in-progress</label>
                    <input name='branch' id='option-three' value="Done" type='radio' onChange={handleChange}/>
                    <label for='option-three'>Done</label>
                  </div>    
                  
                  <p>select tag</p>
                  <div className='radio-group-2'>
                    <input name='tag' value="official" type='radio' id='select-1' onChange={handleChange}/>
                    <label for='select-1'>Official</label>
                    <input name='tag' value="personal" type='radio' id='select-2' onChange={handleChange}/>
                    <label for='select-2'>Personal</label>
                    <input name='tag' value="misc" type='radio' id='select-3' onChange={handleChange}/>
                    <label for='select-3'>Misc</label>                  
                    </div>
                  <div>
                    <p>select date</p>
                    <input type='date' name='date' value={values.date} onChange={handleChange}/>
                  </div>
                    <div className='btn-together'>
                    <Button type='submit'className='form-content__main--btn-1'>Cancel</Button>
                    <Button  className='Form-content__main--btn'  type='submit'>Submit</Button>           
                  </div>                
                </form>
            </div>
            <div className='Form-content__side'>
              <Tasks {...props}/>
            <div>
              <button className= 'button-to-add'>&#43; <span>Add more Tasks</span></button>
            </div>
            </div>
        </div>
        </div>
    )
}


