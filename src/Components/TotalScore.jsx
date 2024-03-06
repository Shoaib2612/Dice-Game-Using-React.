import styled from "styled-components";

const ScoreContainer = styled.div`
    max-width: 195px;
    height: 151px;
    gap: 3px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center; 
    /* /* margin: 0 auto; */

    h1{
        height: 112px;
        width: 62px;
        font-weight: 500;
        font-size: 100px;
        line-height: 150px;
    }
    p{
        width: 115px;
        white-space: nowrap;
        height: 36px;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
    }
`;
const TotalScore = ({score}) => {
    return ( 
        <>
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
        </>
     );
}
 
export default TotalScore;