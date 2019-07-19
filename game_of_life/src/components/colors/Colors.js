import React from "react";
import "./colors.css";

const Colors = props => {
  const BGCarray = ["red", "green", "orange", "blue"];
  const CellColorArray = ["#5CDCCB", "#D2DC5C", "#D05CDC", "#282828"];

  return (
    <div className='colorsWrapper'>
      <div className='colorStrip'>
        <h2> BG Colors </h2>
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
      <div className='colorStrip'>
        <h2> Cell Colors </h2>
        {BGCarray.map((item, i) => {
          return (
            <div
              style={{ backgroundColor: CellColorArray[i] }}
              onClick={() => {
                props.cellColorChange(CellColorArray[i]);
              }}
              className='colorsquare'
            />
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
