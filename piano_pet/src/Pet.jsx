import frame0 from "./assets/tile000.png";
import frame1 from "./assets/tile001.png";
import frame2 from "./assets/tile002.png";
import frame3 from "./assets/tile003.png";
import frame4 from "./assets/tile004.png";
import { useState, useEffect } from "react";
import "./App.css";

export default function Pet() {
  const frames = [frame0, frame1, frame2, frame3];
  const [currentFrame, setCurrentFrame] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        var nextFrame = prevFrame + direction;
        if (nextFrame >= frames.length) {
          setDirection(-1);
          return prevFrame - 1;
        } else if (nextFrame < 0) {
          setDirection(1);
          return prevFrame + 1;
        }
        return nextFrame;
      });
    }, 200);

    return () => {
      clearInterval(animationInterval);
    };
  }, [direction]);
  return (
    <div>
      <img className="pet" src={frames[currentFrame]} alt="Pet"></img>
    </div>
  );
}
