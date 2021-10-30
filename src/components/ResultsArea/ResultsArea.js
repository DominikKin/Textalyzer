import React from "react";
import MostCommon from "./MostCommon";
import TextStats from "./TextStats";
import Search from "./Search";

function ResultsArea({
  mostCommonWords,
  docLength,
  wordCount,
  setSearchWord,
  searchWordCount,
  searchWord,
}) {
  return (
    <div className="results-area">
      <Search
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        searchWordCount={searchWordCount}
      />
      <MostCommon mostCommonWords={mostCommonWords} />
      <TextStats docLength={docLength} wordCount={wordCount} />
    </div>
  );
}

export default ResultsArea;
