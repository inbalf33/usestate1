import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {

const [delta, setDelta] = useState(1);

function handleDelta(e){
  setDelta(Number(e.target.value));
}

const [maxCounter, setMaxCounter] = useState(10);

function handleMaxCounter(e){
  setMaxCounter(Number(e.target.value));
}

const [reset, setReset] = useState(false);

function getReset(data){
  console.log(data);
  setReset(data);
}

const [maxValue, setMaxValue] = useState(0); // define the variable of the maximum Value

function getAdd(data){
  console.log(data);
  if (data > maxValue) // if the data that return from the Counter afet click on Add button bigger than current maxValue
  {
    setMaxValue(data); // the maxValue becomes to data
  } 
  else
  {
    setMaxValue(maxValue); // // the maxValue stay the same value
  }
  
  
}

  return (
    <div className="App">
      <h2> <u>Inbal Fish Usestate</u></h2>      
      <div>  Number of jumps: <input type = "number" value = {delta} onChange = {handleDelta} /> </div>
      <div> Maximum number: <input type = "number" value = {maxCounter} onChange = {handleMaxCounter} /> </div>
      <div class = "maxVal">  Maximum value: <b id = "maxV"> {maxValue} </b> </div>
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset} getAdd = {getAdd}/>
      <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset} getAdd = {getAdd}/>
    </div>
  );
}

export default App;
