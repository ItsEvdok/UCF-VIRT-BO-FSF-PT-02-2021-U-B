// Import useState Hook from React
import React, { useState } from 'react';

function Counter() {
  // Using `useState`, declare a new state variable, called "count", and set it to 0
  // Name the returned setter method "setCount"
  const [ count,setCount ] = useState(0);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        
        <p className="card-text">Click Count: {count} </p>

        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>{' '}

        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
        
      </div>
    </div>
  );
}

export default Counter;
