import { StateType, initialState } from "./Context";
import { Reducer } from "react";
import { playerWon, isTie } from "./Board";

export const Actions = {
  SET_IS_GAME_OVER: "SET_IS_GAME_OVER",
  SET_GAMEBOARD: "SET_GAMEBOARD",
  SET_PLAYER_ICON: "SET_PLAYER_ICON",
  RESET: "RESET"
};

export const reducer: Reducer<StateType, any> = (state, action) => {
  switch (action.type) {
    case Actions.SET_GAMEBOARD:
      let tempGameBoard: any = state.gameBoard;
      let nextPlayerIcon: string = state.playerIcon;
      let isGameOver = state.isGameOver;
      tempGameBoard[action.payload.index] = action.payload.playerIcon;
      
      // If this was a game winning move, end game and announce winner
      if (playerWon(state.gameBoard, state.playerIcon) ||
          isTie(state.gameBoard)) {
        isGameOver = true;
      } else {
        // If this was not a game winning move, next player's turn
        if (state.playerIcon === "X") {
          nextPlayerIcon = "O";
        } else {
          nextPlayerIcon = "X";
        }
      }
      return { ...state, gameBoard: tempGameBoard, playerIcon: nextPlayerIcon, isGameOver: isGameOver
       };
    case Actions.RESET:
      return { ...initialState, gameBoard: {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: ""
      } };
    default:
      return state;
  }
};
