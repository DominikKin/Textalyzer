import React from "react";

function ButtonResult({ word }) {
  return (
    <div className="words-btn">
      <div>{word[0]}</div>
      <div>{word[1]}</div>
    </div>
  );
}

export default ButtonResult;
