import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const Button = (props) => {
        return (
            <button onClick={ props.handleClick }>{props.text}</button>
        )
    }

    const Display = (props) => {
        return (
            <div class='results'>
                <p>Good: { props.good }</p>
                <p>Neutral: { props.neutral }</p>
                <p>Bad: { props.bad }</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={ () => setGood(good + 1) } text='Good'/>
            <Button handleClick={ () => setNeutral(neutral + 1) } text='Neutral' />
            <Button handleClick={ () => setBad(bad + 1) } text='Bad' />

            <h1>Statistics</h1>
            <Display good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
