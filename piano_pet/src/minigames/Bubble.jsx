import "./WashMiniGame.css";

const notes = ["C", "D", "E", "F", "G", "A", "B"];

const accidentals = ["♯", "♭", "♮"];

const tonalities = ["Major", "Minor"];

export default function Bubble({
  label,
  answer,
  setAnswer,
  activeNote,
  setActiveNote,
  activeAcc,
  setActiveAcc,
  activeTone,
  setActiveTone,
}) {
  function decideCN() {
    if (label == activeNote || label == activeAcc || label == activeTone) {
      return "bubble-selected";
    } else {
      return "bubble";
    }
  }
  function updateActive() {
    if (notes.includes(label)) {
      console.log("new note selected!");
      setActiveNote(label);
    } else if (accidentals.includes(label)) {
      console.log("new accidental selected!");
      setActiveAcc(label);
    } else if (tonalities.includes(label)) {
      console.log("new tonality selected!");
      setActiveTone(label);
    }
  }

  function handleClick() {
    updateAns();
    updateActive();
  }

  function updateAns() {
    if (notes.includes(label)) {
      setAnsNote(label);
    } else if (accidentals.includes(label)) {
      setAnsAcc(label);
    } else if (tonalities.includes(label)) {
      setAnsTonality(label);
    }
  }
  function setAnsNote(note) {
    setAnswer({
      note: note,
      accidental: answer.accidental,
      tonality: answer.tonality,
    });
  }

  function setAnsAcc(acc) {
    setAnswer({
      note: answer.note,
      accidental: acc,
      tonality: answer.tonality,
    });
  }

  function setAnsTonality(tonality) {
    setAnswer({
      note: answer.note,
      accidental: answer.accidental,
      tonality: tonality,
    });
  }

  return (
    <button className={decideCN()} onClick={handleClick}>
      {label}
    </button>
  );
}
