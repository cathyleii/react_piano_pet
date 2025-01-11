import "./Piano.css";

export default function WhiteKey({
  note,
  currentNote,
  compareNotes,
  isHighlighted,
}) {
  function decideColor() {
    return isHighlighted ? "white-key-highlighted" : "white-key";
  }

  return (
    <button className={decideColor()} onClick={() => compareNotes(note)}>
      {note}
    </button>
  );
}
