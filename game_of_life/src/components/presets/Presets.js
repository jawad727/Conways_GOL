import React from "react";
import "./presets.css";

const Presets = props => {
  return (
    <div className='presetWrapper'>
      <div className="presetWrapper3">
      <h2> Presets </h2>
      <div className="presetsInnerContainer">
      <div onClick={props.bitcoin} className='bitcoin_preset marg' />
      <div onClick={props.icecream} className='icecream_preset marg' />
      <div onClick={props.doge} className='doge_preset marg' />
      <div onClick={props.corner} className='corner_preset marg' />
      </div>
      </div>
    </div>
  );
};

export default Presets;
