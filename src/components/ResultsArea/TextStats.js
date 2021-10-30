import React from "react";

function TextStats({ docLength, wordCount }) {
  return (
    <div className="stats">
      <h2>Text stats and details</h2>
      <div className="text-stats">
        <div className="stats-card">
          <h3>Document Length</h3>
          <h3>{docLength}</h3>
        </div>
        <div className="stats-card">
          <h3>Word Count</h3>
          <h3>{wordCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default TextStats;
