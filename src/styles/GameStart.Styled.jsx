import styled from "styled-components";
import * as Cards from './Card.Styled';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 60px;
    z-index: 5;
`;

export const Button = styled.input`
    height: 45px;
    background-color: lime;
    border: none;
    padding: 10px 45px;
    z-index: 5;
    &:hover {
        background-color: #01b701;
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
    animation-duration: 5s;
    animation-iteration-count: 1;
    
    @keyframes fall {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(420%);
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

