import styled from "styled-components";

const RulesContainer = styled.div`
    width: 794px;
    height: 140px; 
    padding: 24px;
    background-color: #FBF1F1;
    display: flex;
    /* justify-content: center; */
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;

`;


const Rules = () => {
    return (  
        <>
        <RulesContainer>
            <div>
                <h2>How to play Dice Game</h2>
                <div className="text">
                    <p>Select any number</p>
                    <p>Click on the dice Image</p>
                    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                    <p>if you get wrong guess then  2 point will be dedcuted </p> 
                </div>
            </div>
        </RulesContainer>
        </>
    );
}
 
export default Rules;