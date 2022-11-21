import './Counter.css';
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1;
            }
        )
        console.log(count);
    }

    function reset(){
        setCount(
            function(oldCount){
                return oldCount = 0;
            }
        )
    }

    return (
      <div class = "counter">
        <h2>Counter</h2>
        <p>Counter is at - <div class="countVarible"> {count} </div> </p>
        <button onClick={incr}>Click to add <b class="txtOne">1</b> to Counter</button>
        <button onClick={reset}>Click to  <b class="txtReset">reset</b> the Counter</button>
      </div>
    );
  }
  
  export default Counter;
  