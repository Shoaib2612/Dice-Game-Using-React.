import styled from "styled-components";
import StartGame from "./Components/StartGame";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";
// import './App.css';



function App() {
  const[isGameStarted,setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev); //reversing the previous value..if its false then it will become true and the game wll start.
  }

  return (

    <>
    {/* if is game started is true then it will execute gameplay and if it is false then startgame will be executed */}
    {isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}  />}
    
    {/* <StartGame/> */}
    </>
  )
}

export default App;
