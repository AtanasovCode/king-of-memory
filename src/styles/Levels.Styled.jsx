import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GameInfo = styled.div`
    width: 100%;
    height: 85px;
    padding: 20px 45px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;


export const Level = styled.div`

`;

export const Score = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin: 0 50px;
`;

export const MainMenu = styled.div``;

export const Game = styled.div`
    min-height: 70vh;
    height: min-content;
    max-width: 1700px;
    width: 100%;
    margin-top: 70px;
    padding: 25px 55px;
    display: grid;
    grid-template-columns: repeat(${props => props.cards}, 1fr);
    grid-template-rows: 200px;
    place-content: center;
    ${props => props.cards >= 6 && `
        grid-template-columns: repeat(3, 1fr);
    `} 
`;

export const GameDescription = styled.div`
    position: absolute;
    bottom: 25px;
    font-size: 16px;
    font-weight: 300;
    color: darkgray;
    opacity: .6;
`;