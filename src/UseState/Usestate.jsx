import { useState } from "react";

function Usestate() {
  const [count, setcount] = useState(0); 
  const increment = () => {
    setcount(count + 1);
  };
  
  const decrement = () => {
    setcount(count - 1);
  };
    return (
      <div className="usestate">
      
        <h1>Count {count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>Decrement</button>

      </div>
    );
  }

  export default Usestate