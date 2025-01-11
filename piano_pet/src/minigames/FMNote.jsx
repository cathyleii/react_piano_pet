import woodSquare from "../assets/pixel-wood-board-square.png";

export default function FMNote({ note, x, y }) {
  return (
    <div
      className="note"
      style={{
        top: y,
        left: x,
        color: "black",
        fontSize: "35px",
        position: "absolute",
        width: "60px",
        height: "60px",
        lineHeight: "60px",
        fontFamily: "Tahoma",
        background: `url(${woodSquare}) no-repeat center`,
        backgroundSize: "cover",
        border: `0.8mm solid rgba(${154}, ${118}, ${255}, ${0.6})`,
        textShadow: `1px 1.8px 1px rgba(${154}, ${118}, ${255}, ${0.9})`,
      }}
    >
      {note}
    </div>
  );
}
