import "./MiniGame.css";

export default function ExitButton({ setMiniGame }) {
  return (
    <button className="exit-button" onClick={() => setMiniGame("")}>
      X
    </button>
  );
}
