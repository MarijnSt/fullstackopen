import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return (
        <button onClick={ props.handleClick }>{props.text}</button>
    )
}

const Display = (props) => {
    if(props.total === 0) {
        return <p>No feedback given</p>
    } else {
        return (
            <div className='results'>
                <h1>Statistics</h1>
                <p>Good: { props.good }</p>
                <p>Neutral: { props.neutral }</p>
                <p>Bad: { props.bad }</p>
                <p>Total: { props.total }</p>
                <p>Average: { props.average }</p>
                <p>Positive: { props.positive } %</p>
            </div>
        )
    }
}

const App = (props) => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);


    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={ () => {
                setGood(good + 1); 
                setTotal(total + 1);
                setAverage(average + 1);
            }} text='Good'/>

            <Button handleClick={ () => {
                setNeutral(neutral + 1); 
                setTotal(total + 1);
            }} text='Neutral' />

            <Button handleClick={ () => {
                setBad(bad + 1); 
                setTotal(total + 1);
                setAverage(average - 1);
                }} text='Bad' />

            <Display 
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={total}
                average={average/total}
                positive={(good/total)*100}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
