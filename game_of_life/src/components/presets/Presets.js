import React from "react";
import "./presets.css";

const Presets = props => {
  return (
    <div className='presetWrapper'>
      <h2> Presets </h2>
      <div className='bitcoin_preset marg' />
      <div className='icecream_preset marg' />
      <div className='doge_preset marg' />
      <div className='corner_preset marg' />
    </div>
  );
};

export default Presets;
