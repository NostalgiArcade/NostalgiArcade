import React, { useState, useEffect } from 'react';

const TetrisGame = () => {
  const [playfield, setPlayfield] = useState([]);
  const [tetrominoSequence, setTetrominoSequence] = useState([]);
  const [tetromino, setTetromino] = useState(null);
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  let rAF = null; // Keep track of the animation frame so we can cancel it

  useEffect(() => {
    const canvas = document.getElementById('game');
    const context = canvas.getContext('2d');
    const grid = 32;

    // Populate the empty state
    const initialPlayfield = [];
    for (let row = -2; row < 20; row++) {
      initialPlayfield[row] = Array(10).fill(0);
    }
    setPlayfield(initialPlayfield);

    // How to draw each tetromino
    const tetrominos = {
      'I': [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
      ],
      'J': [
        [1,0,0],
        [1,1,1],
        [0,0,0],
      ],
      'L': [
        [0,0,1],
        [1,1,1],
        [0,0,0],
      ],
      'O': [
        [1,1],
        [1,1],
      ],
      'S': [
        [0,1,1],
        [1,1,0],
        [0,0,0],
      ],
      'Z': [
        [1,1,0],
        [0,1,1],
        [0,0,0],
      ],
      'T': [
        [0,1,0],
        [1,1,1],
        [0,0,0],
      ]
    };

    // Color of each tetromino
    const colors = {
      'I': 'cyan',
      'O': 'yellow',
      'T': 'purple',
      'S': 'green',
      'Z': 'red',
      'J': 'blue',
      'L': 'orange'
    };

    // Get a random integer between the range of [min,max]
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Generate a new tetromino sequence
    const generateSequence = () => {
      const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
      const newSequence = [];
      while (sequence.length) {
        const rand = getRandomInt(0, sequence.length - 1);
        const name = sequence.splice(rand, 1)[0];
        newSequence.push(name);
      }
      setTetrominoSequence(newSequence);
    };

    // Get the next tetromino in the sequence
    const getNextTetromino = () => {
      if (tetrominoSequence.length === 0) {
        generateSequence();
      }

      const name = tetrominoSequence.pop();
      const matrix = tetrominos[name];

      // I and O start centered, all others start in left-middle
      const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

      // I starts on row 21 (-1), all others start on row 22 (-2)
      const row = name === 'I' ? -1 : -2;

      setTetromino({
        name: name,      // name of the piece (L, O, etc.)
        matrix: matrix,  // the current rotation matrix
        row: row,        // current row (starts offscreen)
        col: col         // current col
      });
    };

    // Rotate an NxN matrix 90deg
    const rotate = (matrix) => {
      const N = matrix.length - 1;
      const result = matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
      );
      return result;
    };

    // Check to see if the new matrix/row/col is valid
    const isValidMove = (matrix, cellRow, cellCol) => {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] && (
              // outside the game bounds
              cellCol + col < 0 ||
              cellCol + col >= playfield[0].length ||
              cellRow + row >= playfield.length ||
              // collides with another piece
              playfield[cellRow + row][cellCol + col])
            ) {
            return false;
          }
        }
      }
      return true;
    };

    // Place the tetromino on the playfield
    const placeTetromino = () => {
      const updatedPlayfield = [...playfield];
      for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
          if (tetromino.matrix[row][col]) {
            // Game over if piece has any part offscreen
            if (tetromino.row + row < 0) {
              showGameOver();
              return;
            }
            updatedPlayfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
          }
        }
      }

      // Check for line clears starting from the bottom and working our way up
      for (let row = updatedPlayfield.length - 1; row >= 0; ) {
        if (updatedPlayfield[row].every(cell => !!cell)) {
          // Drop every row above this one
          for (let r = row; r >= 0; r--) {
            for (let c = 0; c < updatedPlayfield[r].length; c++) {
              updatedPlayfield[r][c] = updatedPlayfield[r-1][c];
            }
          }
        } else {
          row--;
        }
      }

      setPlayfield(updatedPlayfield);
      getNextTetromino();
    };

    // Show the game over screen
    const showGameOver = () => {
      cancelAnimationFrame(rAF);
      setGameOver(true);

      context.fillStyle = 'black';
      context.globalAlpha = 0.75;
      context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);

      context.globalAlpha = 1;
      context.fillStyle = 'white';
      context.font = '36px monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
    };

    // Game loop
    const loop = () => {
      rAF = requestAnimationFrame(loop);
      context.clearRect(0,0,canvas.width,canvas.height);

      // Draw the playfield
      for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
          if (playfield[row][col]) {
            const name = playfield[row][col];
            context.fillStyle = colors[name];
            // Drawing 1 px smaller than the grid creates a grid effect
            context.fillRect(col * grid, row * grid, grid-1, grid-1);
          }
        }
      }

      // Draw the active tetromino
      if (tetromino) {
        // Tetromino falls every 35 frames
        if (++count > 35) {
          setTetromino(prevTetromino => {
            const newRow = prevTetromino.row + 1;
            if (!isValidMove(prevTetromino.matrix, newRow, prevTetromino.col)) {
              placeTetromino();
              return prevTetromino;
            }
            return { ...prevTetromino, row: newRow };
          });
          setCount(0);
        }

        context.fillStyle = colors[tetromino.name];

        for (let row = 0; row < tetromino.matrix.length; row++) {
          for (let col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {
              // Drawing 1 px smaller than the grid creates a grid effect
              context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid-1, grid-1);
            }
          }
        }
      }
    };

    // Start the game loop
    rAF = requestAnimationFrame(loop);

    // Cleanup function
    return () => cancelAnimationFrame(rAF);
  }, [playfield, tetromino, tetrominoSequence, count]);

  // Listen to keyboard events to move the active tetromino
  const handleKeyDown = (e) => {
    if (gameOver) return;

    // Left and right arrow keys (move)
    if (e.which === 37 || e.which === 39) {
      setTetromino(prevTetromino => {
        const newCol = e.which === 37 ? prevTetromino.col - 1 : prevTetromino.col + 1;
        if (isValidMove(prevTetromino.matrix, prevTetromino.row, newCol)) {
          return { ...prevTetromino, col: newCol };
        }
        return prevTetromino;
      });
    }

    // Up arrow key (rotate)
    if (e.which === 38) {
      setTetromino(prevTetromino => {
        const newMatrix = rotate(prevTetromino.matrix);
        if (isValidMove(newMatrix, prevTetromino.row, prevTetromino.col)) {
          return { ...prevTetromino, matrix: newMatrix };
        }
        return prevTetromino;
      });
    }

    // Down arrow key (drop)
    if (e.which === 40) {
      setTetromino(prevTetromino => {
        const newRow = prevTetromino.row + 1;
        if (!isValidMove(prevTetromino.matrix, newRow, prevTetromino.col)) {
          placeTetromino();
          return prevTetromino;
        }
        return { ...prevTetromino, row: newRow };
      });
    }
  };

  return (
    <canvas
      id="game"
      width="320"
      height="640"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      style={{ border: '1px solid white' }}
    />
  );
};

export default TetrisGame;