import { useState } from 'react'


const Count = () => {

    //Define a state variable 'count' and a function 'setcount' to update it
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    }





  return (
    <>
    
    <div className="COUNTER-CONTAINER">
        <h1 className="">Counter Example</h1>
        <h1 className="count-display">Count: {count}</h1>
        <div className="button-container">
            <button className="increase-button" onClick={handleIncrement}>Increment</button>
            <button className="decrease-button" onClick={handleDecrement}>Decrement</button>
            <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
    </div>
    
    </>
  )
}

export default Count