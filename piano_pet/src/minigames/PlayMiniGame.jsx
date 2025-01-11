import { useState } from "react";
import Piano from "../piano/Piano";
import ExitButton from "./ExitButton";
import SuccessWindow from "./SuccessWindow";
import "./PlayMiniGame.css";
import "./MiniGame.css";

const pianoKeys = [
  "C1",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
  "C2",
];

export default function PlayMiniGame({
  setMiniGame,
  chooseRandomKey,
  doneMinigame,
  setDoneMinigame,
  updateNeed,
  threshold,
}) {
  const [playPrompt, setPlayPrompt] = useState("Perfect 8th");
  const [answer, setAnswer] = useState("");
  const [highKeys, setHighKeys] = useState(["C1", "C2"]);
  const [counter, setCounter] = useState(0);

  function generatePlayPrompt(key1, key2) {
    const semitoneDiff = Math.abs(
      pianoKeys.indexOf(key1) - pianoKeys.indexOf(key2)
    );
    var newPrompt = "";
    switch (semitoneDiff) {
      case 1:
        newPrompt = "Minor 2nd";
        break;
      case 2:
        newPrompt = "Major 2nd";
        break;
      case 3:
        newPrompt = "Minor 3rd";
        break;
      case 4:
        newPrompt = "Major 3rd";
        break;
      case 5:
        newPrompt = "Perfect 4th";
        break;
      case 6:
        newPrompt = "Diminished 5th/Augmented 4th";
        break;
      case 7:
        newPrompt = "Perfect 5th";
        break;
      case 8:
        newPrompt = "Minor 6th";
        break;
      case 9:
        newPrompt = "Major 6th";
        break;
      case 10:
        newPrompt = "Minor 7th";
        break;
      case 11:
        newPrompt = "Major 7th";
        break;
      case 12:
        newPrompt = "Perfect 8th";
        break;
    }
    setPlayPrompt(newPrompt);
    console.log(`prompt updated: ${newPrompt}`);
  }

  function compareAnswer() {
    if (playPrompt == answer) {
      console.log("answer is correct!");
      setCounter((prevCounter) => {
        if (prevCounter >= threshold) {
          setDoneMinigame(true);
        }
        console.log(`counter: ${prevCounter + 1}`);
        return prevCounter + 1;
      });
      const key1 = chooseRandomKey(pianoKeys);
      var key2 = chooseRandomKey(pianoKeys);
      while (key1 == key2) {
        key2 = chooseRandomKey(pianoKeys);
      }
      setHighKeys([key1, key2]);
      console.log(`key1: ${key1}`);
      console.log(`key2: ${key2}`);
      generatePlayPrompt(key1, key2);
    } else {
      console.log("answer is incorrect!");
    }
  }
  function handleChange(e) {
    e.preventDefault();
    const newAnswer = e.target.value;
    setAnswer(newAnswer);
  }

  return (
    <div className="minigame-window" style={{ backgroundColor: "#ffed7a" }}>
      {doneMinigame && (
        <SuccessWindow
          updateNeed={updateNeed}
          setMiniGame={setMiniGame}
          setDoneMiniGame={setDoneMinigame}
          need="joy"
        ></SuccessWindow>
      )}
      <ExitButton setMiniGame={setMiniGame}></ExitButton>
      Play MiniGame
      <div className="play-minigame-container">
        <h5>Choose the correct name for the interval below</h5>
        <label className="item-label" for="interval-select"></label>
        <select
          className="item-select"
          id="interval-select"
          onChange={handleChange}
        >
          <option>Major 2nd</option>
          <option>Minor 2nd</option>
          <option>Major 3rd</option>
          <option>Minor 3rd</option>
          <option>Perfect 4th</option>
          <option>Diminished 5th/Augmented 4th</option>
          <option>Perfect 5th</option>
          <option>Major 6th</option>
          <option>Minor 6th</option>
          <option>Major 7th</option>
          <option>Minor 7th</option>
          <option>Perfect 8th</option>
        </select>
        <button className="submit-button" onClick={compareAnswer}>
          Submit
        </button>
        <Piano highlightedKeys={highKeys}></Piano>
      </div>
    </div>
  );
}
