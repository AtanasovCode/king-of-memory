import styled from "styled-components";

export const Card = styled.div`
    width: 250px;
    height: 350px;
    border-radius: 20px;
    border: 1px solid #d8caca80;
    background-color: #0f0d0d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    position: relative;
`;

export const Top = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const Number = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    font-family: sans-serif;
    margin-bottom: 10px;
`;

export const Suite = styled.img`
    width: 70px;
    height: 70px;
`;

export const SmallSuite = styled.img`
    width: 25px;
    height: 25px;
`;