# Dama Game Documentation

Dama is a two-player board game played on an 8x8 grid. This documentation will explain the rules of the game and how to play it using the provided code.

## Game Rules

### Game Setup
- Dama is played on an 8x8 grid.
- Each player controls pieces of their own color. Player 1's pieces are red, and Player 2's pieces are blue.
- The initial board is set up as follows:
  ```
  [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
  ]
  ```
  - `0` represents an empty cell.
  - `1` represents Player 1's pieces.
  - `2` represents Player 2's pieces.
  - `3` represents a King piece of Player 1.
  - `4` represents a King piece of Player 2.

### Game Objective
- The goal of the game is to capture all of your opponent's pieces or make it impossible for them to make a legal move.

### Game Flow
- Players take turns, starting with Player 1.
- During a player's turn, they can select one of their pieces to move.
- Pieces can move diagonally forward one space to an empty cell.
- If there is an opponent's piece in the diagonal direction, the player can jump over it to capture it. The captured piece is removed from the board.

### King Pieces
- A piece becomes a King when it reaches the opponent's back row (the row closest to the opponent).
- Kings can move and capture pieces diagonally in both forward and backward directions.

### Winning the Game
- The game is won by the player who captures all of their opponent's pieces or puts their opponent in a situation where they cannot make any legal moves.

### Resetting the Game
- Players can reset the game to its initial state by clicking the "Reset" button.

## How to Play

1. To start the game, run the provided code.

2. The game begins with Player 1's turn. Player 1's pieces are red, and they can select one of their pieces to move. Click on a red piece to select it.

3. The selected piece will be highlighted. You can then click on an empty cell diagonally forward to move the piece. If there is an opponent's piece to capture, the game will automatically capture it.

4. The game alternates turns between Player 1 and Player 2.

5. If one of the player's pieces reaches the opponent's back row, it becomes a King and can move and capture pieces diagonally in both forward and backward directions.

6. The game continues until one player wins by capturing all of their opponent's pieces or putting their opponent in a situation where they cannot make any legal moves.

7. When a player wins, a message will be displayed, and you can click "Play Again" to reset the game and start a new round.

## Game Interface
- The game interface includes a visual representation of the game board with pieces and a score display.
- Player 1's turn is indicated with a red message, and Player 2's turn is indicated with a blue message.
- The scores for both players are displayed.

