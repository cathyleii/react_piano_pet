import "./MiniGame.css";

export default function SuccessWindow({
  updateNeed,
  setMiniGame,
  setDoneMiniGame,
  need,
}) {
  function handleClick() {
    updateNeed(need);
    setDoneMiniGame(false);
    setMiniGame("");
  }
  return (
    <div className="success-window">
      MiniGame Completed!
      <button className="done-button" onClick={handleClick}>
        Done
      </button>
    </div>
  );
}
