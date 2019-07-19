# Conways_GOL

My attempt at Conways Game Of Life

---

Conways Game of life is a is a zero-player "game" created in 1970 by mathematician John Conway. Given an initial state, a two-dimensional cellular grid of "cells" changes over time in a series of generations. For each cell there are rules that they need to follow in order for the "game" to work properly. They are as follows..

1. Any live cell with fewer than two live neighbors dies, as if caused by under population.

2. Any live cell with two or three live neighbors lives on to the next generation.

3. Any live cell with more than three live neighbors dies, as if by overpopulation.

4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

---

File Set Up

To be able to impliment all these rules we need to start with the basics. First we will need a grid component (Grid.js) aswell as a cell component (Cell.js). We will also need a few more components to show on the screen so our UI will be better, so I created a component for rules, colors, and presets. Once we have created all the components and seperated them into their folders we are ready to begin making the game work.

---

Project Set up

The grid that we will create will essientially be an array of arrays (matrix). Each array within our matrix will represent a Y intercept value while each cell in the array will represent the X intercept value. So to find a certain cell in the matrix we will need to give an X and Y coordinate (ex {x: 25, y: 13}). Before creating the grid we will need to give it a height, width, and cell size, so I created these in state just in case we need to change them later it will be easy. The way I planned on showing each cell as either on or off is by creating a replica of the grid and giving every cell a value of false ( makeEmptyBoard() in Grid.js), then when they are clicked it should change to true and the cell should change colors. The way we will link these 2 charts (T/F and original) is in a function called makeCells. What it does is running a double for loop to check every value in my replica grid, if a value is false it will skip over it, but if its true then it will push the coordinates of that spot up to my state to display on screen. Next the user will need to be able to click on a cell and change its color, so for that I created a click handler which calculated the cell spot based on its x and y values and passed it to an onClick on the cell component. After this i created a handleRandom function which should set random values in my chart to true. I did this by running a double for loop through my board and set each one equal to to Math.random() >= 0.5. This means it has an equal chance of going over .5 than it does of going under, or in other words it has a 50/50 chance of being either true of false (I also set this to an onClick on a button below the chart). Lastly we are going to need to create neighbors for each cell, indicating which values are directly next to or diagonal from each cell. This takes place in calculateNeighbors, which takes 3 arguments, the board, and x value and a y value. By using these 3 args it will pinpoint a cell on the board and then check the values all around it ( [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1] ) and return them.

---

Rules Implementation

Now that we've created a board we will need to start with the "animation" by following the rules that I listed above. This takes place in the runIteration function. In the function we check if a cell is alive by if its true or false. So first we look at if a cell is alive and if its neighbors are too, if they are not then it will change to false on the next iteration. If it and it neighbors are alive the cell will continue alive on the next iteration. We then check if a cell has more than 3 live neighbors, if so it changes to false (dies). Finally for the last rule we check if a cell has exactly 3 neighbors that are true , if so it will continue to the next iteration. Now that we've completed the rules in runIteration we will need a function to either run it or end it. For this I simply created the functions runGame, and stopGame which will either invoke the runIteration and change isRunning on state to true, or stop it and change isRunning on state to false.

---

Presets

Now that the app is completed and can run, I wanted to create some presets to give a better UX. This part was definitely a drag but the way I did it was by console.logging the cells state on componentDidUpdate and then literally clicking every cell until I had the preset that I wanted, and then copy pasted it into an array to use as a preset. Unfortunately this couldn't be avoided because I wanted specific cells to be a certain color so I couldnt do it with a loop or any other DRY practice. For each preset I created a function which will loop through the array of copy pasted coordinates and for each one it would change that spot on the board to True and then push the final product to state once all iterations are complete. Finally I set this function equal to an onClick on an image of the preset (for a better UX) and repeated the process 3 more times until I had all of my presets.

---

Colors

To give the app some more flare I decided to let the user choose which color they want the grid and each cell to be. Implementing this was very simple. I set the color of the grid and cell to equal their own state and then onClick of the color (that the user sees on screen) it will change the state and thus change the color of the cell or grid to what the user wants.

---

Styling

For styling I just used vanilla CSS because the app is only one page so there is no need to use a preprocessor.
