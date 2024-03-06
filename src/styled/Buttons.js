import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    
    min-width: 220px;
    height: 44px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    
    border-radius: 5px;
    padding: 10px, 18px, 10px, 18px;
    background-color: black;
    color: white;
    border: none;
    gap: 10px;
    cursor: pointer;
    transition: 0.5s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

// all properties of Button will be inside OutlineButton
export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
            background-color: black;
            border: 1px solid white;
            color: white;
            transition: 0.3s background ease-in;
        }

`;