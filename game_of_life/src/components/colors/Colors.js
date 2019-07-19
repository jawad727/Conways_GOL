import React from "react";
import "./colors.css";

const Colors = props => {
  const BGCarray = ["red", "green", "orange", "blue"];

  return (
    <div className='presetWrapper'>
      <div>
        <h2> Colors </h2>
        {BGCarray.map((item, i) => {
          return (
            <div
              style={{ backgroundColor: BGCarray[i] }}
              onClick={() => {
                props.colorPicker(BGCarray[i]);
              }}
              className='colorsquare'
            />
          );
        })}
      </div>
      <div />
      {/* <div className='colorsquare' />
      <div className='colorsquare' />
      <div className='colorsquare' /> */}
    </div>
  );
};

export default Colors;
