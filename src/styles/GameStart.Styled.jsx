import styled from "styled-components";
import * as Cards from './Card.Styled';

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
`;

export const Button = styled.input`
    height: 45px;
    background-color: #fb2525;
    color: #fff;
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

export const FallingCards = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
`;


export const Card = styled(Cards.Card)`
    width: 100px;
    height: 170px;
    animation-name: fall;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    
    @keyframes fall {
        from {
            transform: translateY(-500px) rotateY(0);
        }
        to {
            transform: translateY(420%) rotateY(360deg);
        }
    }
`;

export const Top = styled(Cards.Top)``;

export const Number = styled(Cards.Number)`
    font-size: 18px;
`;

export const Suite = styled.img`
    width: 25px;
    height: 25px;
`;

export const SmallSuite = styled.img`
    width: 15px;
    height: 15px;
`;

