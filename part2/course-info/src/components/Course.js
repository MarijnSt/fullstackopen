import React from 'react';
import Subcomponents from './Subcomponents';

const Course = ({course}) => {
    const display = () => course.map(info => {
        return (
            <div key={info.id}>
                <Subcomponents info={info}/>
            </div>
        )
    })

    return (
    <div>
        {display()}
    </div>
    );
}

export default Course;