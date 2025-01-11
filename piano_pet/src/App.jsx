import { useState, useEffect } from "react";
import "./App.css";
import StateBar from "./StateBar";
import ActivityButton from "./ActivityButton";
import FeedMiniGame from "./minigames/FeedMiniGame";
import DrinkMiniGame from "./minigames/DrinkMiniGame";
import WashMiniGame from "./minigames/WashMiniGame";
import { cMajAMin } from "./minigames/WashMiniGame";
import PlayMiniGame from "./minigames/PlayMiniGame";
import Pet from "./Pet";

const DECREASE = 1;
const INCREASE = 29;
const THRESHOLD = 6;
const START = 65;

function App() {
  const [miniGame, setMiniGame] = useState("");
  const [drinkPrompt, setDrinkPrompt] = useState("Quarter Note");
  const [washPrompt, setWashPrompt] = useState(cMajAMin);
  const [doneMinigame, setDoneMinigame] = useState(false);

  const [hunger, setHunger] = useState(START);
  const [thirst, setThirst] = useState(START);
  const [hygiene, setHygiene] = useState(START);
  const [joy, setJoy] = useState(START);

  useEffect(() => {
    const hungerInterval = setInterval(() => {
      setHunger((prevHunger) => Math.max(0, prevHunger - DECREASE));
    }, 5000);
    const thirstInterval = setInterval(() => {
      setThirst((prevThirst) => Math.max(0, prevThirst - DECREASE));
    }, 6000);

    const hygieneInterval = setInterval(() => {
      setHygiene((prevHygiene) => Math.max(0, prevHygiene - DECREASE));
    }, 7000);

    const joyInterval = setInterval(() => {
      setJoy((prevJoy) => Math.max(0, prevJoy - DECREASE));
    }, 8000);

    return () => {
      clearInterval(hungerInterval);
      clearInterval(thirstInterval);
      clearInterval(hygieneInterval);
      clearInterval(joyInterval);
    };
  }, []);

  function generateRandomPrompt(prompts) {
    const randomNum = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomNum];
    return randomPrompt;
  }

  function updateNeed(need) {
    switch (need) {
      case "hunger":
        setHunger(hunger + INCREASE);
        break;
      case "thirst":
        setThirst(thirst + INCREASE);
        break;
      case "hygiene":
        setHygiene(hygiene + INCREASE);
        break;
      case "joy":
        setJoy(joy + INCREASE);
        break;
    }
  }

  return (
    <>
      <div className="pet-container">
        <div className="pet-inner-container">
          <Pet></Pet>
        </div>
      </div>
      <div className="state-container">
        <div className="manage-state">
          <StateBar
            containerColor="#ffbad0"
            amountColor="#ff7396"
            label="Hunger"
            barAmount={hunger}
          ></StateBar>
          <ActivityButton
            label="Feed"
            minigame="feed-minigame"
            setMiniGame={setMiniGame}
          ></ActivityButton>
        </div>
        <div className="manage-state">
          <StateBar
            containerColor="#99c7ff"
            amountColor="#59afff"
            label="Thirst"
            barAmount={thirst}
          ></StateBar>
          <ActivityButton
            label="Drink"
            minigame="drink-minigame"
            setMiniGame={setMiniGame}
          ></ActivityButton>
        </div>
        <div className="manage-state">
          <StateBar
            containerColor="#a9eafc"
            amountColor="#57dbff"
            label="Hygiene"
            barAmount={hygiene}
          ></StateBar>
          <ActivityButton
            label="Wash"
            minigame="wash-minigame"
            setMiniGame={setMiniGame}
          ></ActivityButton>
        </div>
        <div className="manage-state">
          <StateBar
            containerColor="#fff7a3"
            amountColor="#ffe159"
            label="Joy"
            barAmount={joy}
          ></StateBar>
          <ActivityButton
            label="Play"
            minigame="play-minigame"
            setMiniGame={setMiniGame}
          ></ActivityButton>
        </div>
      </div>
      {miniGame === "feed-minigame" && (
        <FeedMiniGame
          setMiniGame={setMiniGame}
          doneMinigame={doneMinigame}
          setDoneMinigame={setDoneMinigame}
          updateNeed={updateNeed}
          threshold={THRESHOLD}
        />
      )}
      {miniGame === "drink-minigame" && (
        <DrinkMiniGame
          setMiniGame={setMiniGame}
          prompt={drinkPrompt}
          setPrompt={setDrinkPrompt}
          generateRandomPrompt={generateRandomPrompt}
          doneMinigame={doneMinigame}
          setDoneMinigame={setDoneMinigame}
          updateNeed={updateNeed}
          threshold={THRESHOLD}
        />
      )}
      {miniGame === "wash-minigame" && (
        <WashMiniGame
          setMiniGame={setMiniGame}
          prompt={washPrompt}
          setPrompt={setWashPrompt}
          generateRandomPrompt={generateRandomPrompt}
          doneMinigame={doneMinigame}
          setDoneMinigame={setDoneMinigame}
          updateNeed={updateNeed}
          threshold={THRESHOLD}
        />
      )}
      {miniGame === "play-minigame" && (
        <PlayMiniGame
          setMiniGame={setMiniGame}
          chooseRandomKey={generateRandomPrompt}
          doneMinigame={doneMinigame}
          setDoneMinigame={setDoneMinigame}
          updateNeed={updateNeed}
          threshold={THRESHOLD}
        ></PlayMiniGame>
      )}
    </>
  );
}

export default App;
