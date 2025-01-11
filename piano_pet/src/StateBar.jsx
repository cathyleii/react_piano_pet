import "./StateBar.css";

export default function StateBar({
  containerColor,
  amountColor,
  label,
  barAmount,
}) {
  return (
    <div
      className="attribute-container"
      style={{ backgroundColor: containerColor }}
    >
      <h4>{label}:</h4>
      <div className="amount-bar-container">
        <div
          className="amount-bar"
          style={{ backgroundColor: amountColor, width: `${barAmount}%` }}
        ></div>
      </div>
    </div>
  );
}
