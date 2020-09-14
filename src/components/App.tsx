import React from "react";
import { Context } from "./Context";
import { AppStyle } from "../styles";

const App = () => {
  return (

    <div className="component-app" style={AppStyle}>
      <h1>Tic Tac Toe</h1>
      <Context />
    </div>

  );
};

export default App;
