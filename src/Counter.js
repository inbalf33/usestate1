import './Counter.css';
import { useState } from "react";
import { useEffect } from 'react';

function Counter(props) {
    const {delta} = props;
    const {maxCounter} = props;
    const {getReset} = props;
    const {getAdd} = props;
    const {needToReset} = props;
    const [count, setCount] = useState(0); 
    
    useEffect(()=>{
        if(needToReset){
            setCount(0);
            getReset(false);
        }
    },[needToReset, getReset])

    function incr(){
        setCount(
            function(oldCount){
               
                if (oldCount + delta > maxCounter)
                {
                    getAdd(oldCount); // return to the maxValue the oldCount without delat beacuse it pass the maxCounter
                    return 0;
                }
                else {
                    getAdd(oldCount + delta); //return to the maxValue the oldCount with delat
                    return oldCount + delta;                    
                }
                
            }            
        )        
        //console.log(maxCounter);

        
        //getAdd("Hi Inbal");

    }

    function reset(){
        getReset(true);
        //setCount(0);
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
  