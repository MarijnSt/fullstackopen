import React from 'react';

const Header = ({name}) => {
    return (
      <h2>{name}</h2>
    );
};

const Part = ({part}) => {
    return (
      <p>{part.name}: {part.exercises}</p>
    )
}

const Total = ({total}) => {
    return (
        <p><b>Total of {total} exercises</b></p>
    )
}

const Subcomponents = ({info}) => {
    const courserows = () => info.parts.map(part =>
        <Part 
          key={part.id}
          part={part}
        /> 
    )

    const total = info.parts.reduce((sum, order) => sum + order.exercises, 0);

    return (
        <div>
            <Header name={info.name}/>
            {courserows()}
            <Total total={total}/>
        </div>
    )
}

export default Subcomponents;