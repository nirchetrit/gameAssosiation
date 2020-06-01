import React, { useRef, useState, useEffect } from "react";
import Level from "./Level";
//import flatten from "../helpers/flatten";
import shuffle from "../helpers/shuffle";
import getRandomElements from "../helpers/getRandomElements";
const staticImgPairs = [
  ["bana1", "bana2"],
  ["doron1", "doron2"],
  ["tamar1", "tamar2"],
];

const staticExtraImages = [
  "asd",
  "asdd",
  "asdsdfggv",
  "hbvaasd",
  "uhxcasd",
  "hbdghbfasd",
  "hbvasd",
  "bjfghn asd",
  "jdrta",
  "saeqds",
];

function Game({ isPlaying, onFinish }) {
  const matchingPairs = useRef(shuffle(staticImgPairs));
  console.log(matchingPairs);
  const extraImagesToSend = useRef(getRandomElements(staticExtraImages, 5)); /////////////////////////////////////

  const [levelNumber, setLevelNumber] = useState(1);
  useEffect(() => {
    extraImagesToSend.current = getRandomElements(staticExtraImages, 5);
  }, [levelNumber]);
  const onSolved = function () {
    if (levelNumber === staticImgPairs.length) {
      alert("well done, you've finished the game");
      onFinish();
    } else {
      alert("well done, now the next level");
      setLevelNumber(levelNumber + 1);
    }
  };
  // setLevelNumber(1);

  const matchingPair = matchingPairs.current[levelNumber - 1];
  console.log("Game rendered");

  return (
    <Level
      onSolved={onSolved}
      levelNumber={levelNumber}
      imgPair={matchingPair}
      extraImages={extraImagesToSend.current}
    />
  );
}
export default Game;
