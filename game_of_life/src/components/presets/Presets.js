import React from "react";
import "./presets.css";

const Presets = props => {
  return (
    <div className='presetWrapper'>
      <h2> Presets </h2>
      <div onClick={props.bitcoin} className='bitcoin_preset marg' />
      <div onClick={props.icecream} className='icecream_preset marg' />
      <div onClick={props.doge} className='doge_preset marg' />
      <div onClick={props.corner} className='corner_preset marg' />
    </div>
  );
};

export default Presets;
