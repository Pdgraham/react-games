import React from "react";

export const ResetButton: React.FC<{ onClick: any }> = ({ onClick }) => {
  return (
    <button className="resetButton" 
    onClick={() => onClick()}>
      {" "}
      Reset Game{" "}
    </button>
  );
};
