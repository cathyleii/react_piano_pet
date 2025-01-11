import "./MiniGame.css";
import Piano from "../piano/Piano";
import { useState } from "react";
import FMNote from "./FMNote";
import ExitButton from "./ExitButton";
import SuccessWindow from "./SuccessWindow";

export default function FeedMiniGame({
  setMiniGame,
  doneMinigame,
  setDoneMinigame,
  updateNeed,
  threshold,
}) {
  const [notePosition, setNotePosition] = useState({ x: 279, y: 120 });
  const [currentNote, setCurrentNote] = useState("C");
  const notes = ["C", "D", "E", "F", "G", "A", "B"];
  const [counter, setCounter] = useState(0);

  function compareNotes(note) {
    if (note == currentNote) {
      setCounter((prevCounter) => {
        if (prevCounter >= threshold) {
          setDoneMinigame(true);
        }
        console.log(`fm counter: ${prevCounter + 1}`);
        return prevCounter + 1;
      });
      generateRandomNote();
    }
  }

  return (
    <div className="minigame-window" style={{ backgroundColor: "#ffbed8" }}>
      {doneMinigame && (
        <SuccessWindow
          updateNeed={updateNeed}
          setMiniGame={setMiniGame}
          setDoneMiniGame={setDoneMinigame}
          need="hunger"
        ></SuccessWindow>
      )}
      <ExitButton setMiniGame={setMiniGame}></ExitButton>
      Feed MiniGame
      <div
        style={{
          backgroundColor: `rgba(${255}, ${255}, ${255}, ${0.6})`,
          height: "260px",
        }}
      >
        <h5>Press the correct note on the piano</h5>
        <FMNote
          note={currentNote}
          x={notePosition.x}
          y={notePosition.y}
        ></FMNote>
      </div>
      <Piano
        currentNote={currentNote}
        compareNotes={compareNotes}
        highlightedKeys={[]}
      ></Piano>
    </div>
  );

  function generateRandomNote() {
    setNotePosition({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * (220 - 57) + 57),
    });
    setCurrentNote(notes[Math.floor(Math.random() * notes.length)]);
  }
}
