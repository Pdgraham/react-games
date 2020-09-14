import React, { useContext } from "react";
import { Square } from "./Square";
import { TicTacToeContext } from "./Context";
import * as styles from "../styles";
import { ResetButton } from "./ResetButton";

export type BoardType = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
};

export const Board = () => {
  const {
    gameBoard,
    isGameOver,
    playerIcon,
    setGameBoard,
    reset
  } = useContext(TicTacToeContext);

  const isGameStarted = () => {
    for (let square in gameBoard) {
      if (gameBoard[square] === "X" || gameBoard[square] === "O") {
        return true;
      }
    }
    return false;
  };

  // User has clicked a button to place their X/O
  const selectSquare = (index: number): void => {

    if (isValidPlay(index) && !isGameOver) {
      setGameBoard(index, playerIcon);
    }
    return;
  };

  const isValidPlay = (index: number) => {
    return gameBoard[index] === "";
  };

  return (
    <div className={"container"} style={styles.container}>
      <div className={"board"} style={styles.boardStyle}>
        <div className={"boardRow"} style={styles.boardRowStyle}>
          <Square index={1} onClick={() => selectSquare(1)} />

          <Square index={2} onClick={() => selectSquare(2)} />

          <Square index={3} onClick={() => selectSquare(3)} />
        </div>

        <div className={"boardRow"} style={styles.boardRowStyle}>
          <Square index={4} onClick={() => selectSquare(4)} />

          <Square index={5} onClick={() => selectSquare(5)} />

          <Square index={6} onClick={() => selectSquare(6)} />
        </div>

        <div className={"boardRow"} style={styles.boardRowStyle}>
          <Square index={7} onClick={() => selectSquare(7)} />

          <Square index={8} onClick={() => selectSquare(8)} />

          <Square index={9} onClick={() => selectSquare(9)} />
        </div>
      </div>
      <div>
        {isGameOver &&
          playerWon(gameBoard, playerIcon) &&
          "Congratulations! We have a winner! Player: " + playerIcon}
        {isGameOver &&
          !playerWon(gameBoard, playerIcon) &&
          "Game Over. We have a tie!"}
        {isGameStarted() && (
          <div>
            <ResetButton
              onClick={() => {
                reset();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const playerWon = (gameBoard: BoardType, playerIcon: string): boolean => {  
  if (
    (gameBoard[1] === playerIcon && // Across Top 1, 2, 3
      gameBoard[2] === playerIcon &&
      gameBoard[3] === playerIcon) ||
    (gameBoard[4] === playerIcon && // Across Middle 4, 5, 6
      gameBoard[5] === playerIcon &&
      gameBoard[6] === playerIcon) ||
    (gameBoard[7] === playerIcon && // Accross Bottom 7, 8, 9
      gameBoard[8] === playerIcon &&
      gameBoard[9] === playerIcon) ||
    (gameBoard[1] === playerIcon && // Down Left 1, 4, 7
      gameBoard[4] === playerIcon &&
      gameBoard[7] === playerIcon) ||
    (gameBoard[2] === playerIcon && // Down Middle 2, 5, 8
      gameBoard[5] === playerIcon &&
      gameBoard[8] === playerIcon) ||
    (gameBoard[3] === playerIcon && // Down Right 3, 6, 9
      gameBoard[6] === playerIcon &&
      gameBoard[9] === playerIcon) ||
    (gameBoard[1] === playerIcon && // Downlard Diagonal 1, 5, 9
      gameBoard[5] === playerIcon &&
      gameBoard[9] === playerIcon) ||
    (gameBoard[3] === playerIcon && // Upward Diagonal 3, 5, 7
      gameBoard[5] === playerIcon &&
      gameBoard[7] === playerIcon)
  ) {
    return true;
  }

  return false;
};

// Check if there is a tie and the game is over
export const isTie = (gameBoard: BoardType): boolean => {
  let values = Object.values(gameBoard);
  return !values.includes("");
}