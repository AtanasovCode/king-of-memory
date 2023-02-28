import * as Styled from '../styles/Card.Styled';
import { useEffect, useState } from 'react';

import heart from '../assets/suites/hearts.png';
import diamond from '../assets/suites/diamonds.png';
import spade from '../assets/suites/spades.png';
import club from '../assets/suites/spades.png';


const Card = () => {

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

        console.log(num);

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
        <Styled.Card onClick={() => {
            setCurrentNum(getRandomNumber());
            setCurrentSuite(getRandomSuite());
        }}>
            <Styled.Top>
                <Styled.Number>
                    {currentNum}
                </Styled.Number>
                <Styled.SmallSuite
                    src={currentSuite}
                />
            </Styled.Top>
            <Styled.Suite
                src={currentSuite}
            />
        </Styled.Card>
    );
}

export default Card;