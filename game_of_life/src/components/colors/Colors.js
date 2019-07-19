import React from "react";
import "./colors.css";

const Colors = props => {
  return (
    <div className='presetWrapper'>
      <h2> Presets </h2>
      <div onClick={props.bitcoin} className='marg' />
      <div onClick={props.icecream} className='marg' />
      <div onClick={props.doge} className='marg' />
      <div onClick={props.corner} className='marg' />
    </div>
  );
};

export default Colors;
