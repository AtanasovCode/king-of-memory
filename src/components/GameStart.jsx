import { useState } from 'react';
import * as Styled from '../styles/GameStart.Styled';
import Snowfall from 'react-snowfall';

const GameStart = ({
    getRandomNumber,
    getRandomSuite,
    diamond,
    heart,
    spade,
    club,
}) => {

    const diamondImg = document.createElement("img");
    const heartImg = document.createElement("img");
    const spadeImg = document.createElement("img");
    const clubImg = document.createElement("img");
    diamondImg.src = diamond
    heartImg.src = heart;
    spadeImg.src = spade;
    clubImg.src = club;

    const [suites, setSuites] = useState([heartImg, diamondImg, spadeImg, clubImg]);


    return (
        <Styled.Container>
            <Snowfall
                images={suites}
                radius={[8.5, 35.5]}
                snowFlakeCount={1}
                style={{ backgroundColor: "#000000" }}
            />
            <Styled.Tint>
                <Styled.Title>
                    King Of Memory
                </Styled.Title>
                <Styled.Button
                    type="button"
                    value="Start Game"
                />
            </Styled.Tint>
        </Styled.Container>
    );
}

export default GameStart;