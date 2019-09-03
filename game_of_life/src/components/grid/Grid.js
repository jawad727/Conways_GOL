import React, { Component } from "react";
import Cell from "./Cell";
import Presets from "../presets/Presets";
import Colors from "../colors/Colors";
import "./Grid.css";
import {
  btc_preset,
  doge,
  corner_pattern,
  icecream
} from "../presets/preset_arrays";

class Grid extends Component {
  state = {
    cells: [],
    interval: 100,
    isRunning: false,
    CELL_SIZE: 10,
    WIDTH: 500,
    HEIGHT: 500,
    counter: 0,
    gridcolor: "#000",
    cellColor: "#ccc"
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

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells_copy.push({ x: x, y: y });
        }
      }
    }

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

  preset2 = () => {
    this.handleClear();
    doge.forEach(item => {
      this.board[item.y][item.x] = true;
    });

    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };

  preset3 = () => {
    this.handleClear();
    corner_pattern.forEach(item => {
      this.board[item.y][item.x] = true;
    });

    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };

  preset4 = () => {
    this.handleClear();
    icecream.forEach(item => {
      this.board[item.y][item.x] = true;
    });

    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };

  BGcolorChanger = arg => {
    this.setState({
      gridcolor: arg
    });
  };

  cellColorChanger = arg => {
    this.setState({
      cellColor: arg
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
              backgroundColor: this.state.gridcolor,
              width: this.state.WIDTH,
              height: this.state.HEIGHT,
              backgroundSize: `${this.state.CELL_SIZE}px ${
                this.state.CELL_SIZE
              }px`,
              backgroundImage: `linear-gradient(#333 1px, transparent 1px),
              linear-gradient(90deg, #333 1px, transparent 1px)`
            }}
            onClick={this.handleClick}
            ref={n => {
              this.boardRef = n;
            }}
          >
            {this.state.cells.map(cell => (
              <Cell
                cellColor={this.state.cellColor}
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
            <div class="playButtons">
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
        </div>
        <Presets
          corner={this.preset3}
          doge={this.preset2}
          bitcoin={this.preset1}
          icecream={this.preset4}
        />
        <Colors
          cellColorChange={this.cellColorChanger}
          colorPicker={this.BGcolorChanger}
        />
      </div>
    );
  }
}

export default Grid;
