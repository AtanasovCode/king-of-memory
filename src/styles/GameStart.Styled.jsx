import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Tint = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00000070;
    z-index: 10;
    width: 100vw;
    height: 100%;
`;

export const Title = styled.div`
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 60px;
    z-index: 5;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-family: 'Gloock', serif;
`;

export const King = styled.div`
    width: 50px;
    height: 70px;
    border: 1px solid #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
    position: relative;
    background-color: #ffffff;
`;

export const KingLetter = styled.div`
    position: absolute;
    top: 5px;
    left: 7px;
    font-size: 15px;
    color: #000;
`;

export const KingIcon = styled.img`
    width: 15px;
    height: 15px;
    position: absolute;
    top: 25px;
    left: 6px;
`;

export const Button = styled.input`
    height: 45px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 10px;
    padding: 10px 45px;
    font-weight: 600;
    z-index: 5;
    &:hover {
        background-color: #008e00;
        cursor: pointer;
    }
`;

