import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Buttons";
import { OutlineButton } from "../styled/Buttons";
import Rules from "./Rules";

const MainContainer = styled.div`
.top_section{
    display: flex;
    justify-content: space-between;
    gap: 693px;
    width: 1380px;
    height: 151px;
    margin-top: 24px;
    margin-left: 80px;
    /* left: 80px; */
    
    /* background-color: red; */
}
.btns{
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 220px;
    height: 112px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 35px;
}


`;

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState();
    const [showRules, setShowRules] = useState(false);

    const handleClick = () => {
        //this is called as toggle function
        setShowRules((prev) => !prev);
    }

    const generate_Random_Number = (min,max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    // console.log(generate_Random_Number(1,7));
    const rollDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number");
            return
        }else{
            setError(undefined);
            
        
            const randomNumber = generate_Random_Number(1,7);
            
            setCurrentDice((prev) => randomNumber );
            if(selectedNumber === randomNumber){
                //this is called as toggle function
                setScore((prev) => prev + randomNumber )
            }else{
                //this is called as toggle function
                setScore((prev) => prev -2);

            }
    }
        setSelectedNumber(undefined);

    }

    return ( 
        <>
        <MainContainer>
            <div className="top_section">
                <TotalScore score = {score} />
                
                <NumberSelector  setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber} error={error}/>
            </div>
            <RollDice currentDice={currentDice} rollDice = {rollDice}/>
            <div className="btns">
                <OutlineButton onClick={()=>{setScore(0);setCurrentDice(1)}}>Reset Scores</OutlineButton>
                <Button onClick={handleClick} >{showRules ? "Hide": "Show"} Rules</Button>
            </div>
            {/* <Rules/> */}
            {showRules && <Rules/>}
            
    
        </MainContainer>
        </>
     );
}
 
export default GamePlay;