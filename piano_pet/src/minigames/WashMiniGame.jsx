import ExitButton from "./ExitButton";
import "./WashMiniGame.css";
import "./Minigame.css";
import Bubble from "./Bubble";
import { useState } from "react";
import SuccessWindow from "./SuccessWindow";

const aMajFSharpMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/A-major_f-sharp-minor.svg"></img>
);
const aFlatMajFMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/A-flat-major_f-minor.svg"></img>
);
const bMajGSharpMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/B-major_g-sharp-minor.svg"></img>
);
const bFlatMajGMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/B-flat-major_g-minor.svg"></img>
);
export const cMajAMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/C-major_a-minor.svg"></img>
);
const cSharpMajASharpMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/C-sharp-major_a-sharp-minor.svg"></img>
);
const cFlatMajAFlatMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/C-flat-major_a-flat-minor.svg"></img>
);
const dFlatMajBFlatMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/D-flat-major_b-flat-minor.svg"></img>
);
const dMajBMinor = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/D-major_b-minor.svg"></img>
);
const eMajCSharpMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/E-major_c-sharp-minor.svg"></img>
);
const eFlatMajCMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/E-flat-major_c-minor.svg"></img>
);
const fMajDMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/F-major_d-minor.svg"></img>
);
const fSharpMajDSharpMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/F-sharp-major_d-sharp-minor.svg"></img>
);
const gFlatMajEFlatMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/G-flat-major_e-flat-minor.svg"></img>
);
const gMajEMin = (
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/G-major_e-minor.svg"></img>
);

const prompts = [
  aMajFSharpMin,
  aFlatMajFMin,
  bMajGSharpMin,
  bFlatMajGMin,
  cMajAMin,
  cSharpMajASharpMin,
  cFlatMajAFlatMin,
  dFlatMajBFlatMin,
  dMajBMinor,
  eMajCSharpMin,
  eFlatMajCMin,
  fMajDMin,
  fSharpMajDSharpMin,
  gFlatMajEFlatMin,
  gMajEMin,
];

const initializeAns = {
  note: "",
  accidental: "",
  tonality: "",
};

export default function WashMiniGame({
  setMiniGame,
  prompt,
  setPrompt,
  generateRandomPrompt,
  doneMinigame,
  setDoneMinigame,
  updateNeed,
  threshold,
}) {
  const [answer, setAnswer] = useState(initializeAns);
  const [counter, setCounter] = useState(0);
  const [activeNote, setActiveNote] = useState("");
  const [activeAcc, setActiveAcc] = useState("");
  const [activeTone, setActiveTone] = useState("");

  function isDefault() {
    return (
      answer.note == "" && answer.accidental == "" && answer.tonality == ""
    );
  }

  function isNatural() {
    return answer.accidental == "♮";
  }

  function displayAnswer() {
    if (isDefault()) {
      return "";
    } else {
      if (isNatural()) {
        return answer.note + ` ${answer.tonality}`;
      }
      return answer.note + answer.accidental + ` ${answer.tonality}`;
    }
  }

  function compareAnswer(sol1, sol2) {
    const matchSol1 =
      sol1.note == answer.note &&
      sol1.accidental == answer.accidental &&
      sol1.tonality == answer.tonality;

    const matchSol2 =
      sol2.note == answer.note &&
      sol2.accidental == answer.accidental &&
      sol2.tonality == answer.tonality;

    const isCorrect = matchSol1 || matchSol2;
    console.log(`answer is correct?: ${isCorrect}`);
    if (isCorrect) {
      setCounter((prevCounter) => {
        if (prevCounter >= threshold) {
          setDoneMinigame(true);
        }
        console.log(`fm counter: ${prevCounter + 1}`);
        return prevCounter + 1;
      });
    }
    return matchSol1 || matchSol2;
  }

  function handleSubmit() {
    console.log(`prompt: ${prompt}`);
    console.log(cMajAMin);
    switch (prompt) {
      case aMajFSharpMin:
        if (
          compareAnswer(
            { note: "A", accidental: "♮", tonality: "Major" },
            { note: "F", accidental: "♯", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case aFlatMajFMin:
        if (
          compareAnswer(
            { note: "A", accidental: "♭", tonality: "Major" },
            { note: "F", accidental: "♮", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case bMajGSharpMin:
        if (
          compareAnswer(
            { note: "B", accidental: "♮", tonality: "Major" },
            { note: "G", accidental: "♯", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case bFlatMajGMin:
        if (
          compareAnswer(
            { note: "B", accidental: "♭", tonality: "Major" },
            { note: "G", accidental: "♮", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case cMajAMin:
        if (
          compareAnswer(
            { note: "C", accidental: "♮", tonality: "Major" },
            { note: "A", accidental: "♮", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case cSharpMajASharpMin:
        if (
          compareAnswer(
            { note: "C", accidental: "♯", tonality: "Major" },
            { note: "A", accidental: "♯", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case cFlatMajAFlatMin:
        if (
          compareAnswer(
            { note: "C", accidental: "♭", tonality: "Major" },
            { note: "A", accidental: "♭", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case dFlatMajBFlatMin:
        if (
          compareAnswer(
            { note: "D", accidental: "♭", tonality: "Major" },
            { note: "B", accidental: "♭", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case dMajBMinor:
        if (
          compareAnswer(
            { note: "D", accidental: "♮", tonality: "Major" },
            { note: "B", accidental: "♮", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case eMajCSharpMin:
        if (
          compareAnswer(
            { note: "E", accidental: "♮", tonality: "Major" },
            { note: "C", accidental: "♯", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case eFlatMajCMin:
        if (
          compareAnswer(
            { note: "E", accidental: "♭", tonality: "Major" },
            { note: "C", accidental: "♮", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case fMajDMin:
        if (
          compareAnswer(
            { note: "F", accidental: "♮", tonality: "Major" },
            { note: "D", accidental: "♮", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case fSharpMajDSharpMin:
        if (
          compareAnswer(
            { note: "F", accidental: "♯", tonality: "Major" },
            { note: "D", accidental: "♯", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
      case gFlatMajEFlatMin:
        if (
          compareAnswer(
            { note: "G", accidental: "♭", tonality: "Major" },
            { note: "E", accidental: "♭", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;

      case gMajEMin:
        if (
          compareAnswer(
            { note: "G", accidental: "♮", tonality: "Major" },
            { note: "E", accidental: "♮", tonality: "Minor" }
          )
        ) {
          setPrompt(generateRandomPrompt(prompts));
        }
        break;
    }
  }

  return (
    <div className="minigame-window">
      {doneMinigame && (
        <SuccessWindow
          updateNeed={updateNeed}
          setMiniGame={setMiniGame}
          setDoneMiniGame={setDoneMinigame}
          need="hygiene"
        ></SuccessWindow>
      )}
      <ExitButton setMiniGame={setMiniGame}></ExitButton>
      Wash MiniGame
      <div className="wash-minigame-container">
        <h5>Select the correct bubbles for the given key signature</h5>
        <div className="wash-options-container">
          <div className="bubble-note-row">
            <Bubble
              label="C"
              answer={answer}
              setAnswer={setAnswer}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeAcc={activeAcc}
              setActiveAcc={setActiveAcc}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
            ></Bubble>
            <Bubble
              label="E"
              answer={answer}
              setAnswer={setAnswer}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeAcc={activeAcc}
              setActiveAcc={setActiveAcc}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
            ></Bubble>
            <Bubble
              label="G"
              answer={answer}
              setAnswer={setAnswer}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeAcc={activeAcc}
              setActiveAcc={setActiveAcc}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
            ></Bubble>
            <Bubble
              label="B"
              answer={answer}
              setAnswer={setAnswer}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeAcc={activeAcc}
              setActiveAcc={setActiveAcc}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
            ></Bubble>
          </div>
          <div className="bubble-note-row">
            <Bubble
              label="D"
              answer={answer}
              setAnswer={setAnswer}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeAcc={activeAcc}
              setActiveAcc={setActiveAcc}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
            ></Bubble>
            <Bubble
              label="F"
              answer={answer}
              setAnswer={setAnswer}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeAcc={activeAcc}
              setActiveAcc={setActiveAcc}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
            ></Bubble>
            <Bubble
              label="A"
              answer={answer}
              setAnswer={setAnswer}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeAcc={activeAcc}
              setActiveAcc={setActiveAcc}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
            ></Bubble>
          </div>
          <div className="acc-tone-container">
            <div className="bubble-acc-row">
              <Bubble
                label="♯"
                answer={answer}
                setAnswer={setAnswer}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
                activeAcc={activeAcc}
                setActiveAcc={setActiveAcc}
                activeTone={activeTone}
                setActiveTone={setActiveTone}
              ></Bubble>
              <Bubble
                label="♭"
                answer={answer}
                setAnswer={setAnswer}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
                activeAcc={activeAcc}
                setActiveAcc={setActiveAcc}
                activeTone={activeTone}
                setActiveTone={setActiveTone}
              ></Bubble>
              <Bubble
                label="♮"
                answer={answer}
                setAnswer={setAnswer}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
                activeAcc={activeAcc}
                setActiveAcc={setActiveAcc}
                activeTone={activeTone}
                setActiveTone={setActiveTone}
              ></Bubble>
            </div>
            <div className="bubble-tone-row">
              <Bubble
                label="Major"
                answer={answer}
                setAnswer={setAnswer}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
                activeAcc={activeAcc}
                setActiveAcc={setActiveAcc}
                activeTone={activeTone}
                setActiveTone={setActiveTone}
              ></Bubble>
              <Bubble
                label="Minor"
                answer={answer}
                setAnswer={setAnswer}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
                activeAcc={activeAcc}
                setActiveAcc={setActiveAcc}
                activeTone={activeTone}
                setActiveTone={setActiveTone}
              ></Bubble>
            </div>
          </div>
          <div className="prompt-and-answer">
            {prompt}
            <div className="answer-container">
              <div className="answer">{displayAnswer()}</div>
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
