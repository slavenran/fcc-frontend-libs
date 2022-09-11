import React from "react";
import classes from './DrumMachine.module.scss';

const DrumMachine = () => {

  const logValue = (e) => {
    console.log(e.target.innerText);
  }

  return <div id="drum-machine">
    <div id="display">
      <div className="drum-pad" onClick={(e) => logValue(e)}>Q</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>W</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>E</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>A</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>S</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>D</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>Z</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>X</div>
      <div className="drum-pad" onClick={(e) => logValue(e)}>C</div>
    </div>
  </div>
}

export default DrumMachine;