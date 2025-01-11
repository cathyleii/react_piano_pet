import "./Piano.css";

export default function BlackKey({ isHighlighted }) {
  function decideHighlight() {
    return isHighlighted ? "black-key-highlighted" : "black-key";
  }
  return <button className={decideHighlight()}></button>;
}
