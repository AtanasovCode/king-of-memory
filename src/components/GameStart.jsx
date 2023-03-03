import { useState } from 'react';
import * as Styled from '../styles/GameStart.Styled';
import Snowfall from 'react-snowfall';

import gh from '../assets/icons/gh.png';


const GameStart = ({
    diamond,
    heart,
    spade,
    club,
    setGameStart,
}) => {

    const diamondImg = document.createElement("img");
    const heartImg = document.createElement("img");
    const spadeImg = document.createElement("img");
    const clubImg = document.createElement("img");
    diamondImg.src = diamond
    heartImg.src = heart;
    spadeImg.src = spade;
    clubImg.src = club;

    //Images used for falling snow effect in title screen
    const [suites, setSuites] = useState([heartImg, diamondImg, spadeImg, clubImg]);


    return (
        <Styled.Container>
            <Snowfall //npm package
                images={suites} //Instead of snow - render images
                radius={[5.5, 37.5]} //Min and Max radius of images/snow
                style={{ backgroundColor: "#000000" }} //Apply style to the parent container
            />
            <Styled.Tint>
                <Styled.Title>
                    <Styled.King>
                        <Styled.KingLetter>K</Styled.KingLetter>
                        <Styled.KingIcon 
                            src={heart}
                        />
                    </Styled.King>
                    ing Of Memory
                </Styled.Title>
                <Styled.Button
                    type="button"
                    value="Start Game"
                    onClick={() => {
                        //When gameStart == false
                        //The game starts
                        setGameStart(false);
                    }}
                />
                <Styled.Credits href="https://github.com/atanasovCode">
                    Made by 
                    <Styled.CreditImage 
                        src={gh}
                    />
                    atanasovCode
                </Styled.Credits>
            </Styled.Tint>
        </Styled.Container>
    );
}

export default GameStart;