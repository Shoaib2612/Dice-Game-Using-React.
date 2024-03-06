import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
    display: grid ;
    /* grid-template-rows: repeat(auto-fit, minmax(100px,1fr));; */
    height: 72px;
    width: 72px;
    border: 1px solid black;
    place-items: center;
    margin-top: 30px;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>(props.isSelected ? "black" : "white")}; //if isselected is true display black color otherwise display white color.
    color: ${(props)=> (props.isSelected ? "white":"black")};
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: 30px;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        text-align: end;
    }
    .error{
        position: fixed;
        margin-bottom: 5px;
        line-height: 36px;
        font-size: 15px;
        color: red;
        font-weight: 400;
    }
`;

const NumberSelector = ({selectedNumber,setSelectedNumber,error}) => {
    const arrNumber = [1,2,3,4,5,6]
    // const [selectedNumber, setSelectedNumber] = useState();

    console.log("is selected nukber is ", selectedNumber);
    return ( 
        <>
        <Container>
            <p className="error">{error}</p>
        
        <div className="flex">
        {
            arrNumber.map((value,i) => (
                <Box 
                key={i} 
                onClick={() => setSelectedNumber(value)} //if the fuction has params then arrow function is used inside onclick.
                isSelected = {value == selectedNumber} //returns boolean if the value is equal to selected number and you can use it and style that number. this prop is used in Box styling above.
                >
                    {value}
                </Box>
            ))
        }
        </div>
        <div>
            <p>Select Number</p>
        </div>
        
        </Container>
        </>
     );
}
 
export default NumberSelector;