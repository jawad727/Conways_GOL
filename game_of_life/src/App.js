import React from "react";
import Grid from "./components/grid/Grid.js";
import Rules from "./components/rules/Rules";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <h1>Conway's Game of Life</h1>
      <div className='PageWrapper'>
        <Rules />
        <Grid />
      </div>
    </div>
  );
}

export default App;
