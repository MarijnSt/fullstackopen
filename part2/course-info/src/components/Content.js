import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({parts}) => {
  const rows = () => parts.map(part =>
    <Part 
      key={part.id}
      part={part}
    /> 
  )

  const total = parts.reduce((sum, order) => sum + order.exercises, 0);

  return (
    <div>
        {rows()}
        <Total total={total}/>
    </div>
  );
};

export default Content;