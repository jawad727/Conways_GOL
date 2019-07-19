import React, { Component } from "react";
import Cell from "./Cell";
import Presets from "../presets/Presets";
import "./Grid.css";

const smile = [
  { x: 36, y: 11 },
  { x: 14, y: 12 },
  { x: 36, y: 12 },
  { x: 14, y: 13 },
  { x: 36, y: 13 },
  { x: 14, y: 14 },
  { x: 36, y: 14 },
  { x: 14, y: 15 },
  { x: 36, y: 15 },
  { x: 14, y: 16 },
  { x: 36, y: 16 },
  { x: 14, y: 17 },
  { x: 39, y: 25 },
  { x: 11, y: 26 },
  { x: 38, y: 27 },
  { x: 13, y: 28 },
  { x: 36, y: 29 },
  { x: 14, y: 31 },
  { x: 34, y: 31 },
  { x: 17, y: 32 },
  { x: 20, y: 33 },
  { x: 23, y: 33 },
  { x: 27, y: 33 },
  { x: 31, y: 33 }
];

const btc_preset = [
  { x: 20, y: 10 },
  { x: 21, y: 10 },
  { x: 22, y: 10 },
  { x: 23, y: 10 },
  { x: 24, y: 10 },
  { x: 25, y: 10 },
  { x: 26, y: 10 },
  { x: 27, y: 10 },
  { x: 28, y: 10 },
  { x: 29, y: 10 },
  { x: 18, y: 11 },
  { x: 19, y: 11 },
  { x: 30, y: 11 },
  { x: 31, y: 11 },
  { x: 16, y: 12 },
  { x: 17, y: 12 },
  { x: 32, y: 12 },
  { x: 33, y: 12 },
  { x: 15, y: 13 },
  { x: 34, y: 13 },
  { x: 14, y: 14 },
  { x: 35, y: 14 },
  { x: 13, y: 15 },
  { x: 23, y: 15 },
  { x: 26, y: 15 },
  { x: 36, y: 15 },
  { x: 13, y: 16 },
  { x: 23, y: 16 },
  { x: 26, y: 16 },
  { x: 36, y: 16 },
  { x: 12, y: 17 },
  { x: 19, y: 17 },
  { x: 20, y: 17 },
  { x: 21, y: 17 },
  { x: 22, y: 17 },
  { x: 23, y: 17 },
  { x: 24, y: 17 },
  { x: 25, y: 17 },
  { x: 26, y: 17 },
  { x: 27, y: 17 },
  { x: 28, y: 17 },
  { x: 37, y: 17 },
  { x: 12, y: 18 },
  { x: 22, y: 18 },
  { x: 29, y: 18 },
  { x: 37, y: 18 },
  { x: 11, y: 19 },
  { x: 22, y: 19 },
  { x: 29, y: 19 },
  { x: 38, y: 19 },
  { x: 11, y: 20 },
  { x: 22, y: 20 },
  { x: 29, y: 20 },
  { x: 38, y: 20 },
  { x: 11, y: 21 },
  { x: 22, y: 21 },
  { x: 29, y: 21 },
  { x: 38, y: 21 },
  { x: 11, y: 22 },
  { x: 22, y: 22 },
  { x: 29, y: 22 },
  { x: 38, y: 22 },
  { x: 11, y: 23 },
  { x: 22, y: 23 },
  { x: 29, y: 23 },
  { x: 38, y: 23 },
  { x: 11, y: 24 },
  { x: 22, y: 24 },
  { x: 23, y: 24 },
  { x: 24, y: 24 },
  { x: 25, y: 24 },
  { x: 26, y: 24 },
  { x: 27, y: 24 },
  { x: 28, y: 24 },
  { x: 38, y: 24 },
  { x: 11, y: 25 },
  { x: 22, y: 25 },
  { x: 29, y: 25 },
  { x: 38, y: 25 },
  { x: 11, y: 26 },
  { x: 22, y: 26 },
  { x: 29, y: 26 },
  { x: 38, y: 26 },
  { x: 11, y: 27 },
  { x: 22, y: 27 },
  { x: 29, y: 27 },
  { x: 38, y: 27 },
  { x: 11, y: 28 },
  { x: 22, y: 28 },
  { x: 29, y: 28 },
  { x: 38, y: 28 },
  { x: 12, y: 29 },
  { x: 22, y: 29 },
  { x: 29, y: 29 },
  { x: 37, y: 29 },
  { x: 12, y: 30 },
  { x: 20, y: 30 },
  { x: 21, y: 30 },
  { x: 22, y: 30 },
  { x: 23, y: 30 },
  { x: 24, y: 30 },
  { x: 25, y: 30 },
  { x: 26, y: 30 },
  { x: 27, y: 30 },
  { x: 28, y: 30 },
  { x: 37, y: 30 },
  { x: 13, y: 31 },
  { x: 23, y: 31 },
  { x: 26, y: 31 },
  { x: 36, y: 31 },
  { x: 13, y: 32 },
  { x: 23, y: 32 },
  { x: 26, y: 32 },
  { x: 36, y: 32 },
  { x: 14, y: 33 },
  { x: 35, y: 33 },
  { x: 15, y: 34 },
  { x: 34, y: 34 },
  { x: 16, y: 35 },
  { x: 17, y: 35 },
  { x: 32, y: 35 },
  { x: 33, y: 35 },
  { x: 18, y: 36 },
  { x: 19, y: 36 },
  { x: 30, y: 36 },
  { x: 31, y: 36 },
  { x: 20, y: 37 },
  { x: 21, y: 37 },
  { x: 22, y: 37 },
  { x: 23, y: 37 },
  { x: 24, y: 37 },
  { x: 25, y: 37 },
  { x: 26, y: 37 },
  { x: 27, y: 37 },
  { x: 28, y: 37 },
  { x: 29, y: 37 }
];

class Grid extends Component {
  state = {
    cells: [],
    interval: 100,
    isRunning: false,
    CELL_SIZE: 10,
    WIDTH: 500,
    HEIGHT: 500,
    counter: 0
  };

  rows = this.state.HEIGHT / this.state.CELL_SIZE;
  cols = this.state.WIDTH / this.state.CELL_SIZE;
  board = this.makeEmptyBoard();

  // Creates an empty board (board with false as every single value)
  makeEmptyBoard() {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }

  componentDidMount() {
    console.log(this.state.cells);
  }

  componentDidUpdate() {
    console.log(this.state.cells);
  }

  // Create cells from this.board
  makeCells() {
    let cells_copy = [];
    // if (this.state.counter == 0) {
    //   let cells_copy = [...this.state.cells]
    // } else {
    //   let cells_copy = []
    // }
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells_copy.push({ x: x, y: y });
        }
      }
    }
    // console.log(`CELLS COPY: ${cells_copy}`);
    return cells_copy;
  }

  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / this.state.CELL_SIZE);
    const y = Math.floor(offsetY / this.state.CELL_SIZE);
    console.log(x, y);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }

    this.setState({
      cells: this.makeCells()
    });
  };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  handleClear = () => {
    this.board = this.makeEmptyBoard();
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
  };

  handleRandom = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = Math.random() >= 0.5;
      }
      this.stopGame();
    }
    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };

  preset1 = () => {
    this.handleClear();
    btc_preset.forEach(item => {
      this.board[item.y][item.x] = true;
    });

    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };

  handlePreset = () => {
    this.setState({
      cells: smile,
      counter: 0
    });
  };

  runIteration() {
    console.log("running iteration");
    let newBoard = this.makeEmptyBoard();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y);
        /* Checks to see if cell exists */
        if (this.board[y][x]) {
          /* Satisfies 2nd rule of Conway's Game of Life */
          if (neighbors === 2 || neighbors === 3) {
            /* This cell lives to the next generation */
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }
    this.board = newBoard;
    console.log("Generation: ", this.state.counter);
    this.setState((prevState, { counter }) => ({
      cells: this.makeCells(),
      counter: prevState.counter + 1
    }));
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1]
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (
        x1 >= 0 &&
        x1 < this.cols &&
        y1 >= 0 &&
        y1 < this.rows &&
        board[y1][x1]
      ) {
        neighbors++;
      }
    }

    return neighbors;
  }

  render() {
    return (
      <div className='gridWrapper'>
        <div>
          <h2>Generation: {this.state.counter}</h2>
          <br />
          <div
            className='Board'
            style={{
              width: this.state.WIDTH,
              height: this.state.HEIGHT,
              backgroundSize: `${this.state.CELL_SIZE}px ${
                this.state.CELL_SIZE
              }px`
            }}
            onClick={this.handleClick}
            ref={n => {
              this.boardRef = n;
            }}
          >
            {this.state.cells.map(cell => (
              <Cell
                CELL_SIZE={this.state.CELL_SIZE}
                x={cell.x}
                y={cell.y}
                key={Math.floor(Math.random() * Math.floor(100000000))}
              />
            ))}
          </div>
          <div className='controls'>
            Update every
            <input
              value={this.state.interval}
              onChange={this.handleIntervalChange}
            />{" "}
            msec{" "}
            {this.state.isRunning ? (
              <button className='button' onClick={this.stopGame}>
                Stop
              </button>
            ) : (
              <button className='button' onClick={this.runGame}>
                Play
              </button>
            )}{" "}
            <button className='button' onClick={this.handleRandom}>
              Random
            </button>{" "}
            <button className='button' onClick={this.handleClear}>
              Clear
            </button>{" "}
          </div>
        </div>
        <Presets bitcoin={this.preset1} />
      </div>
    );
  }
}

export default Grid;
