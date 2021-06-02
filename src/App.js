import React,{ useState} from "react";
import "./styles.css";

export default function App(){
  const [minval, setminval]=useState();
  const [maxval, setmaxval]=useState();
  const [randomnum, setRandomnum]=useState()

  const handlerandomnum = () =>{
    setRandomnum(Math.floor(Math.random() * (maxval-minval+1)+minval));
  };

  return(
    <div className="hero">
      <div className="container">
        <div className="randomnum">
        <p>
          Random number: <span>{randomnum}</span>
        </p>
        </div>
        <div className="numcontainer">
         <div>
        <p>Min:</p>
        <input type="number" value={minval} onChange={e => setminval(+e.target.value)} />
      </div>
    <div>
    <p>Max:</p>
        <input type="number" value={maxval} onChange={e => setmaxval(+e.target.value)} />
      </div>
    </div>
    <button onClick={handlerandomnum}>get random number</button>
    </div>
    </div>
    
  )
}