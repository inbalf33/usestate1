import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {

const [delta, setDelta] = useState(1);

function handleDelta(e){
  setDelta(Number(e.target.value));
}

const [maxCounter, setMaxCounter] = useState(1);

function handleMaxCounter(e){
  setMaxCounter(Number(e.target.value));
}

  return (
    <div className="App">
      <h2> <u>Inbal Fish Usestate</u></h2>      
      <div>  Number of jumps: <input type = "number" value = {delta} onChange = {handleDelta} /> </div>
      <div> Maximum number: <input type = "number" value = {maxCounter} onChange = {handleMaxCounter} /> </div>
      <Counter delta = {delta} maxCounter = {maxCounter}/>
      <Counter delta = {delta} maxCounter = {maxCounter}/>
    </div>
  );
}

export default App;
