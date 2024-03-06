import { useState } from "react";
import styled from "styled-components";

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    justify-content: center;
    gap: 15px;
    /* flex-direction: column; */
    p{
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
    }
`;
const RollDice = ({currentDice,rollDice}) => {
    // const [currentDice, setCurrentDice] = useState(1);
    
    return (  
        <>
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
                <p>Click on Dice to roll.</p>
            </div>
            
        </DiceContainer>
        </>
    );
}
 
export default RollDice;