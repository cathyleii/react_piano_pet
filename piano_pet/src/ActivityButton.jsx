import "./ActivityButton.css";

export default function ({ label, minigame, setMiniGame }) {
  return (
    <button className="activity-button" onClick={() => setMiniGame(minigame)}>
      {label}
    </button>
  );
}
