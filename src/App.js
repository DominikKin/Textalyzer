import React, { useState, useEffect } from "react";
import "./App.css";
import stopwords from "./components/stopwords";
import TextArea from "./components/TextArea/TextArea";
import ResultsArea from "./components/ResultsArea/ResultsArea";

function App() {
  const [allText, setAllText] = useState("");
  const [docLength, setDocLength] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [mostCommonWords, setMostCommonWords] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const [searchWordCount, setSearchWordCount] = useState("");

  function sortDictionary(obj) {
    const sortedObj = obj.sort((a, b) => {
      return b[1] - a[1];
    });
    return sortedObj;
  }

  function filterDictionary(obj) {
    let objArr = Object.entries(obj);
    const filteredArr = objArr.filter((el) => !stopwords.includes(el[0]));

    return filteredArr;
  }

  function allStats(text) {
    const textFormatted = text.toLowerCase();
    const allWordsArr = textFormatted.match(/\b\S+\b/g);
    const allWordsDictionary = {};

    for (let word in allWordsArr) {
      let wordValue = allWordsArr[word];
      if (allWordsDictionary[wordValue] > 0) {
        allWordsDictionary[wordValue]++;
      } else {
        allWordsDictionary[wordValue] = 1;
      }
    }

    const filteredDictionary = filterDictionary(allWordsDictionary);
    const sortedDictionary = sortDictionary(filteredDictionary);

    const mostCommonWords = sortedDictionary.slice(0, 100);

    const docLength = text.length;
    const wordCount = allWordsArr ? allWordsArr.length : 0;
    setDocLength(docLength);
    setWordCount(wordCount);
    setMostCommonWords(mostCommonWords);
  }

  function searchForWords(text, word) {
    let count = 0;
    if (text) {
      const textFormatted = text.toLowerCase();
      const allWordsArr = textFormatted.match(/\b\S+\b/g);
      allWordsArr.forEach((element) => {
        if (element === word) count++;
        return count;
      });
      setSearchWordCount(count);
    }
  }

  useEffect(() => {
    searchForWords(allText, searchWord);
  }, [searchWord]);

  useEffect(() => {
    allStats(allText);
    setSearchWord("");
  }, [allText]);

  return (
    <div className="App">
      <TextArea setAllText={setAllText} />
      <ResultsArea
        docLength={docLength}
        wordCount={wordCount}
        mostCommonWords={mostCommonWords}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        searchWordCount={searchWordCount}
      />
    </div>
  );
}

export default App;
