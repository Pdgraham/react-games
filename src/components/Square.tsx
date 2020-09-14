import React, { useContext } from "react";
import * as styles from "../styles";
import { TicTacToeContext } from "./Context";

export const Square: React.FC<{ index: number; onClick: any }> = ({
  index,
  onClick
}) => {
  const { gameBoard } = useContext(TicTacToeContext);

  return (
    <button
      className={"square"}
      onClick={() => onClick()}
      style={styles.squareStyles[index-1]}
    >
      {" "}
      {gameBoard[index]}{" "}
    </button>
  );
};
