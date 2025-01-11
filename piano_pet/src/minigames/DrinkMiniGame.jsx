import { useEffect, useState } from "react";
import "./MiniGame.css";
import "./DrinkMiniGame.css";
import ExitButton from "./ExitButton";
import cup from "/DrinkMiniGame/cup-svgrepo-com.svg";
import eighthNote from "/DrinkMiniGame/eighth-note.svg";
import eighthRest from "/DrinkMiniGame/eighth-rest.svg";
import sixteenthNote from "/DrinkMiniGame/sixteenth-note.svg";
import sixteenthRest from "/DrinkMiniGame/sixteenth-rest.svg";
import halfNote from "/DrinkMiniGame/half-note.svg";
import halfRest from "/DrinkMiniGame/half-rest.svg";
import wholeNote from "/DrinkMiniGame/whole-note.svg";
import wholeRest from "/DrinkMiniGame/whole-rest.svg";
import quarterNote from "/DrinkMiniGame/quarter-note.svg";
import quarterRest from "/DrinkMiniGame/quarter-rest.svg";
import SuccessWindow from "./SuccessWindow";

const EIGHTHNOTE = "Eighth Note";
const SIXTEENTHNOTE = "Sixteenth Note";
const EIGHTHREST = "Eighth Rest";
const SIXTEENTHREST = "Sixteenth Rest";
const HALFREST = "Half Rest";
const QUARTERNOTE = "Quarter Note";
const HALFNOTE = "Half Note";
const WHOLENOTE = "Whole Note";
const QUARTERREST = "Quarter Rest";
const WHOLEREST = "Whole Rest";
const ONEBEAT = "1 Beat";
const TWOBEATS = "2 Beats";
const FOURBEATS = "4 Beats";
const HALFBEAT = "1/2 of a beat";
const QUARTERBEAT = "1/4 of a beat";
const prompts = [
  SIXTEENTHNOTE,
  SIXTEENTHREST,
  EIGHTHNOTE,
  EIGHTHREST,
  QUARTERNOTE,
  QUARTERREST,
  HALFNOTE,
  HALFREST,
  WHOLENOTE,
  WHOLEREST,
  ONEBEAT,
  TWOBEATS,
  FOURBEATS,
  HALFBEAT,
  QUARTERBEAT,
];

export default function DrinkMiniGame({
  setMiniGame,
  prompt,
  setPrompt,
  generateRandomPrompt,
  doneMinigame,
  setDoneMinigame,
  updateNeed,
  threshold,
}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const target = document.getElementById("drop-target");
    target.addEventListener("dragenter", handleDragEnter);
    target.addEventListener("dragleave", handleDragLeave);
    target.addEventListener("dragover", handleDragOver);
    target.addEventListener("drop", handleDrop);

    return () => {
      target.removeEventListener("dragenter", handleDragEnter);
      target.removeEventListener("dragleave", handleDragLeave);
      target.removeEventListener("dragover", handleDragOver);
      target.removeEventListener("drop", handleDrop);
    };
  }, [prompt]);

  function handleDragEnter(event) {
    event.target.classList.add("dragover");
  }

  function handleDragLeave(event) {
    event.target.classList.remove("dragover");
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    event.target.classList.remove("dragover");
    const givenOption = event.dataTransfer.getData("text/plain");
    console.log("current prompt (in handleDrop): " + prompt);
    compareOption(givenOption);
  }

  function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function compareOption(givenOption) {
    console.log("givenOption: " + givenOption);
    console.log("current prompt (in compareOption): " + prompt);
    console.log(givenOption === prompt);
    var isCorrect = true;
    if (givenOption === prompt) {
      console.log("givenOption is equal to prompt");
      setPrompt(generateRandomPrompt(prompts));
    } else {
      switch (prompt) {
        case ONEBEAT:
          if (givenOption == QUARTERREST || givenOption == QUARTERNOTE) {
            setPrompt(generateRandomPrompt(prompts));
          }
          break;
        case TWOBEATS:
          if (givenOption == HALFREST || givenOption == HALFNOTE) {
            setPrompt(generateRandomPrompt(prompts));
          }
          break;
        case FOURBEATS:
          if (givenOption == WHOLEREST || givenOption == WHOLENOTE) {
            setPrompt(generateRandomPrompt(prompts));
          }
          break;
        case HALFBEAT:
          if (givenOption == EIGHTHREST || givenOption == EIGHTHNOTE) {
            setPrompt(generateRandomPrompt(prompts));
          }
          break;
        case QUARTERBEAT:
          if (givenOption == SIXTEENTHREST || givenOption == SIXTEENTHNOTE) {
            setPrompt(generateRandomPrompt(prompts));
          }
          break;
        default:
          isCorrect = false;
          break;
      }
    }
    if (isCorrect) {
      setCounter((prevCounter) => {
        if (prevCounter >= threshold) {
          setDoneMinigame(true);
        }
        console.log(`fm counter: ${prevCounter + 1}`);
        return prevCounter + 1;
      });
    }
  }

  return (
    <div className="minigame-window">
      {doneMinigame && (
        <SuccessWindow
          updateNeed={updateNeed}
          setMiniGame={setMiniGame}
          setDoneMiniGame={setDoneMinigame}
          need="thirst"
        ></SuccessWindow>
      )}
      <ExitButton setMiniGame={setMiniGame}></ExitButton>
      Drink MiniGame
      <div className="drink-minigame-container">
        <h5>Drag the correct rhythm into the cup</h5>
        <span>{prompt}</span>
        <img src={cup} className="cup" id="drop-target"></img>
        <div className="options-container">
          <div className="option-bg">
            <img
              src={eighthNote}
              className="option"
              id={EIGHTHNOTE}
              draggable="true"
              onDragStart={handleDragStart}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={sixteenthNote}
              className="option"
              id={SIXTEENTHNOTE}
              draggable="true"
              onDragStart={handleDragStart}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={eighthRest}
              className="option"
              id={EIGHTHREST}
              draggable="true"
              onDragStart={handleDragStart}
              style={{ height: "30px" }}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={sixteenthRest}
              className="option"
              id={SIXTEENTHREST}
              draggable="true"
              onDragStart={handleDragStart}
              style={{ height: "30px" }}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={halfRest}
              className="option"
              id={HALFREST}
              draggable="true"
              onDragStart={handleDragStart}
              style={{ height: "10px" }}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={quarterNote}
              className="option"
              id={QUARTERNOTE}
              draggable="true"
              onDragStart={handleDragStart}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={halfNote}
              className="option"
              id={HALFNOTE}
              draggable="true"
              onDragStart={handleDragStart}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={wholeNote}
              className="option"
              id={WHOLENOTE}
              draggable="true"
              onDragStart={handleDragStart}
              style={{ height: "15px" }}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={quarterRest}
              className="option"
              id={QUARTERREST}
              draggable="true"
              onDragStart={handleDragStart}
              style={{ height: "38px" }}
            ></img>
          </div>
          <div className="option-bg">
            <img
              src={wholeRest}
              className="option"
              id={WHOLEREST}
              draggable="true"
              onDragStart={handleDragStart}
              style={{ height: "10px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
