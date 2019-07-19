import React from "react";
import "./rules.css";

const Rules = () => {
  return (
    <div className='rulesWrapper'>
      <h2>Rules:</h2>
      <br />
      <ol className='ruleList'>
        <li>
          Any live cell with fewer than two live neighbors dies, as if caused by
          under population.
        </li>
        <br />
        <li>
          Any live cell with two or three live neighbors lives on to the next
          generation.
        </li>
        <br />
        <li>
          Any live cell with more than three live neighbors dies, as if by
          overpopulation.
        </li>
        <br />
        <li>
          Any dead cell with exactly three live neighbors becomes a live cell,
          as if by reproduction.
        </li>
      </ol>
    </div>
  );
};

export default Rules;
