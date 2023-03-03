import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Styled from '../styles/Game.Styled';
import GameStart from './GameStart';
import Levels from './Levels';

import heart from '../assets/suites/hearts.png';
import diamond from '../assets/suites/diamonds.png';
import spade from '../assets/suites/spades.png';
import club from '../assets/suites/spades.png';

const Game = () => {


    const [suite, setSuite] = useState(["heart", "diamond", "spade", "club"]);
    const [level, setLevel] = useState(1);
    const [cards, setCards] = useState({});
    const [gameStart, setGameStart] = useState(true);

    //Set in session storage so that the game does not
    //Go back to title screen every refresh
    //sessionStorage.setItem("gameStart", true);

    const getRandomNumber = () => {
        let min = Math.ceil(1);
        let max = Math.floor(13);
        let num = Math.floor(Math.random() * (max - min + 1)) + min;


        if (num > 1 && num <= 10) return num;
        if (num === 1) return "A";
        if (num === 11) return "J";
        if (num === 12) return "Q";
        if (num === 13) return "K";
    }

    const getRandomSuite = () => {
        let randomIndex = Math.floor(Math.random() * 4);
        if (suite[randomIndex] === "diamond") return diamond;
        if (suite[randomIndex] === "heart") return heart;
        if (suite[randomIndex] === "spade") return spade;
        if (suite[randomIndex] === "club") return club;
    }

    //Generates an array with objects containing
    //Info about N number of cards depending on parameter
    //i.e {value: "A", suite: "src/assets/cards/spade.png"}
    const generateObjectWithCardDetails = (numOfCards) => {
        let tempCards = [];
        for (let i = 0; i < numOfCards; i++) {
            tempCards.push({ value: `${getRandomNumber()}`, suite: `${getRandomSuite()}`, id: uuidv4() })
        }
        setCards(tempCards);
    }



    return (
        <Styled.Container>
            {
                gameStart === true ?
                    <GameStart 
                        getRandomNumber={getRandomNumber}
                        getRandomSuite={getRandomSuite}
                        heart={heart}
                        diamond={diamond}
                        spade={spade}
                        club={club}
                        setGameStart={setGameStart}
                    />
                    :
                    <Levels
                        cards={cards}
                        generateObjectWithCardDetails={generateObjectWithCardDetails}
                        level={level}
                        setLevel={setLevel}
                        setGameStart={setGameStart}
                    />
            }
        </Styled.Container>
    );
}

export default Game;