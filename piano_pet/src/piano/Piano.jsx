import WhiteKey from "./WhiteKey";
import "./Piano.css";
import BlackKey from "./BlackKey";

export default function Piano({ currentNote, compareNotes, highlightedKeys }) {
  function highlight(key) {
    return highlightedKeys.includes(key);
  }
  return (
    <div className="piano-container">
      <div className="piano">
        <WhiteKey
          note="C"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("C1")}
        ></WhiteKey>
        <BlackKey isHighlighted={highlight("C#")}></BlackKey>
        <WhiteKey
          note="D"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("D")}
        ></WhiteKey>
        <BlackKey isHighlighted={highlight("D#")}></BlackKey>
        <WhiteKey
          note="E"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("E")}
        ></WhiteKey>
        <WhiteKey
          note="F"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("F")}
        ></WhiteKey>
        <BlackKey isHighlighted={highlight("F#")}></BlackKey>
        <WhiteKey
          note="G"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("G")}
        ></WhiteKey>
        <BlackKey isHighlighted={highlight("G#")}></BlackKey>
        <WhiteKey
          note="A"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("A")}
        ></WhiteKey>
        <BlackKey isHighlighted={highlight("A#")}></BlackKey>
        <WhiteKey
          note="B"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("B")}
        ></WhiteKey>
        <WhiteKey
          note="C"
          currentNote={currentNote}
          compareNotes={compareNotes}
          isHighlighted={highlight("C2")}
        ></WhiteKey>
      </div>
    </div>
  );
}
