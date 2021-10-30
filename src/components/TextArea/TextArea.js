import React, { useState } from "react";

function TextArea({ setAllText }) {
  function getInput(input) {
    setAllText(input.target.value);
  }

  return (
    <div className="text-area">
      <h2 className="text-header">Enter your text here</h2>
      <textarea type="text" class="text-input" onChange={getInput}></textarea>
    </div>
  );
}

export default TextArea;
