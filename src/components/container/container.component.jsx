import React from 'react';
import {Card} from '../card/card.component';

export const TodoContainer = (props) => {
    return(
        <div className="content-item">
            <p className="container-title container-title-1">To-Do</p>
            <div className="content__card">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};

export const InProgressContainer = (props) => {
    return(
        <div className="content-item">
            <p className="container-title container-title-2">in-progress</p>
            <div className="content__card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>
    )
};

export const DoneContainer = (props) => {
    return(
        <div className="content-item">
            <p className="container-title container-title-3">Done</p>
            <div className="content__card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    )
};