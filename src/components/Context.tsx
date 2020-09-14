import React, { createContext, useReducer } from "react";
import { Board, BoardType } from "./Board";
import { reducer, Actions } from "./Reducers";

export type StateType = {
  gameBoard: BoardType;
  isGameOver: boolean;
  playerIcon: string;
};

export const initialState: StateType = {
  gameBoard: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  },
  isGameOver: false,
  playerIcon: "X"
};

export const TicTacToeContext = createContext<any>(initialState);

export const Context = () => {
  return (
    <Provider>
      <Board />
    </Provider>
  );
};

const Provider: React.FC<{ children?: any }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    gameBoard: state.gameBoard,
    isGameOver: state.isGameOver,
    playerIcon: state.playerIcon,
    setGameBoard: (index: number, playerIcon: string) => {
      let payload = { index: index, playerIcon: playerIcon };
      dispatch({ type: Actions.SET_GAMEBOARD, payload: payload });
    },
    reset: () => {
      dispatch({ type: Actions.RESET });
    }
  };
  return (
    <TicTacToeContext.Provider value={value}>
      {children}
    </TicTacToeContext.Provider>
  );
};
