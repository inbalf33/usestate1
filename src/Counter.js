import './Counter.css';
import { useState } from "react";


function Counter(props) {
    const {delta} = props;
    const {maxCounter} = props;
    const [count, setCount] = useState(0);   

    function incr(){
        setCount(
            function(oldCount){
                if (oldCount + delta > maxCounter)
                {
                    return 0;
                }
                else {
                    return oldCount + delta;
                }
                
            }
        )
        console.log(maxCounter);
    }

    function reset(){
        setCount(0)
    }


    return (
      <div class = "counter">
        <h2>Counter</h2>        
        <p>Counter is at - <div class="countVarible"> {count} </div> </p>
        <button onClick={incr}>Click to add <b class="txtOne"> {delta} </b> to Counter</button>
        <button onClick={reset}>Click to  <b class="txtReset">reset</b> the Counter</button>
      </div>
    );
  }
  
  export default Counter;
  