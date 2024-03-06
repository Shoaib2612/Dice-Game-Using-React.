import styled from "styled-components";
import { Button } from "../styled/Buttons";

const Container = styled.div`
    display: flex;
    max-width: 1186px;
    margin: 0 auto;
    height: 522px;
    margin-top: 100px;
    margin-left: 129px;
    gap: 5px;

    .content h1{
        /* display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row ;
        min-width: 5; */
        /* height: 144px; */
        /* line-height: 144px; */
        font-size: 96px;
        font-weight: 700;
        white-space: nowrap;

    }
    .content{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: Hug (528px);
        height: Hug (188px);

    }

`;
// the below code was written here earlier..afterwards its written in button.js file and is imported inside this file.
// const Button = styled.button`
//     display: flex;
    
//     min-width: 220px;
//     height: 44px;
//     align-items: center;
//     justify-content: center;
//     font-size: 16px;
    
//     border-radius: 5px;
//     padding: 10px, 18px, 10px, 18px;
//     background-color: black;
//     color: white;
//     border: none;
//     gap: 10px;
//     cursor: pointer;
//     transition: 0.5s background ease-in;
//     &:hover{
//         background-color: white;
//         border: 1px solid black;
//         color: black;
//         transition: 0.3s background ease-in;
//     }
// `;
//toggle is a prop passed from app.jsx to indicate whether the game is started or not.
const StartGame = ({toggle}) => {
    return (  
        <>
        <Container>
            <div>
                <img src="/images/dices 1.png" alt="" />

            </div>
            
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
            
        </Container>
        </>
    );
}
 
export default StartGame;