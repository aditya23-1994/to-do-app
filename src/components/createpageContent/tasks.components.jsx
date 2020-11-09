import React from 'react';


export const Tasks = (props) => {

    const {handleChange,checkboxChange, submitTasks, ...tasks} = props;
    return (
        <form className='inline-form' onSubmit={submitTasks}>
        <div className='Form-content__side-input'>
        <input type='checkbox' className='checkbox-main' id='cbx' checked={tasks.isDone} onChange={checkboxChange} style={{display: 'none'}} />
        <label for="cbx" className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,
            17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
        </label>
        </div>
        <div>
        <input name='text' value={tasks.text} onChange={handleChange} /></div>
        <div className='btn-3'>
        <button className='Form-content__main--btn-3' 
        type='submit'><ion-icon name="checkmark-done-outline"></ion-icon>
        </button>
        </div>
        </form>
    )
}