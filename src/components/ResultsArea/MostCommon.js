import React from "react";
import ButtonResult from "./ButtonResult";

function MostCommon({ mostCommonWords }) {
  return (
    <div className="cards">
      <h2>Most commonly used words are</h2>
      <div className="most-common">
        {mostCommonWords.length > 0
          ? mostCommonWords.map((word) => {
              return <ButtonResult word={word} />;
            })
          : null}
      </div>
    </div>
  );
}

export default MostCommon;
