import React from "react";

export const AppStyle: React.CSSProperties = {
  fontFamily: "sans-serif",
  textAlign: "center",
  alignItems: "center"
};

export const container: React.CSSProperties = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};

export const boardRowStyle: React.CSSProperties = {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "center"
};

export const boardStyle: React.CSSProperties = {};

const squareBackgroundColor = "#87CEEB";
const squareBorderColor = "MidnightBlue"

const squareStyle: React.CSSProperties = {
  padding: "10px 20px",
  minWidth: "60px",
  minHeight: "45px",
  fontSize: "14px",
  color: squareBorderColor,
  backgroundColor: squareBackgroundColor,
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.25s ease-in-out",
  borderStyle: "none",
  outlineStyle: "none"
};

export const squareStyles: Array<React.CSSProperties> = [{
    ...squareStyle,
    borderRight:  "3px solid " + squareBorderColor, 
    borderBottom: "3px solid " + squareBorderColor
  }, {
    ...squareStyle,
    borderRight:  "3px solid " + squareBorderColor,
    borderBottom: "3px solid " + squareBorderColor,
    borderLeft:   "3px solid " + squareBorderColor
  }, { 
    ...squareStyle,
    borderBottom: "3px solid " + squareBorderColor,
    borderLeft:   "3px solid " + squareBorderColor
  }, {   
    ...squareStyle,
    borderTop:    "3px solid " + squareBorderColor,
    borderRight:  "3px solid " + squareBorderColor, 
    borderBottom: "3px solid " + squareBorderColor
  }, {    
    ...squareStyle,
    borderTop:    "3px solid " + squareBorderColor,
    borderRight:  "3px solid " + squareBorderColor,
    borderBottom: "3px solid " + squareBorderColor,
    borderLeft:   "3px solid " + squareBorderColor
  }, {
    ...squareStyle,
    borderTop:    "3px solid " + squareBorderColor,
    borderBottom: "3px solid " + squareBorderColor,
    borderLeft:   "3px solid " + squareBorderColor
  }, {
    ...squareStyle,
    borderTop:    "3px solid " + squareBorderColor,
    borderRight:  "3px solid " + squareBorderColor
  }, {
    ...squareStyle,
    borderTop:    "3px solid " + squareBorderColor,
    borderRight:  "3px solid " + squareBorderColor,
    borderLeft:   "3px solid " + squareBorderColor
  }, {
    ...squareStyle,
    borderTop:    "3px solid " + squareBorderColor,
    borderLeft:   "3px solid " + squareBorderColor
  }
];