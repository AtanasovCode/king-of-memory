import { useState, useEffect } from 'react';
import * as Styled from '../styles/Game.Styled';
import LevelOne from './levels/LevelOne';
import Card from './Card';

import heart from '../assets/suites/hearts.png';
import diamond from '../assets/suites/diamonds.png';
import spade from '../assets/suites/spades.png';
import club from '../assets/suites/spades.png';

const Game = () => {


    const [suite, setSuite] = useState(["heart", "diamond", "spade", "club"]);

    const [currentNum, setCurrentNum] = useState();
    const [currentSuite, setCurrentSuite] = useState();

    useEffect(() => {
        setCurrentNum(getRandomNumber());
        setCurrentSuite(getRandomSuite());
    }, [])

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


    return (
        <Styled.Container>
            <Styled.Heading>
                Card Memory Game
            </Styled.Heading>
            <LevelOne
                currentNum={currentNum}
                setCurrentNum={setCurrentNum}
                currentSuite={currentSuite}
                setCurrentSuite={setCurrentSuite}

                getRandomNumber={getRandomNumber}
                getRandomSuite={getRandomSuite}
            />
        </Styled.Container>
    );
}

export default Game;