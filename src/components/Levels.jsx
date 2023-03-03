import { useState, useEffect } from "react";
import * as Styled from '../styles/Levels.Styled';
import Card from "./Card";


const Levels = ({
    cards,
    generateObjectWithCardDetails,
    level,
    setLevel,
    setGameStart,
}) => {

    const [cardsClicked, setCardsClicked] = useState([]);
    const [numOfCards, setNumOfCards] = useState(3);
    const [showFail, setShowFail] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (level === 0) {
            setShowFail(true);
            generateObjectWithCardDetails(0);
        };
        if (level === 1) setShowFail(false);
        if (level === 2) setNumOfCards(4);
        if (level === 3) setNumOfCards(5);
        if (level === 4) setNumOfCards(6);
        if (level === 5) setNumOfCards(8);
        if (level === 6) setNumOfCards(10);
        if (level === 7) setNumOfCards(12);
    }, [level])

    //Generates 3 random cards with random values and suites
    useEffect(() => {
        generateObjectWithCardDetails(numOfCards);
    }, [numOfCards])

    //Check if there are duplicate cards
    //It checks the id of the card that has been clicked
    //With the remaining card id's inside of cardsClicked
    const isDuplicate = (cardId) => {
        return cardsClicked.find((card) => card.id === cardId)
    }


    const handleCardClick = (value, suite, id) => {
        //Add the clicked card to the array
        let temp = { value: value, suite: suite, id: id };
        setCardsClicked((current) => [temp, ...current]);

        //Shuffle card elements using Durstenfeld shuffle algorithm
        //https://stackoverflow.com/a/12646864
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }


        //If the cardsClicked array has more than one card
        //Check to see if the cards are the same
        if (cardsClicked.length) {
            if (isDuplicate(cardsClicked, id)) alert("You clicked the same card twice");
        }
    }

    const handleCardDuplicate = () => {
        setLevel(0);
        setScore(0);
    }

    useEffect(() => {

        //Every time cardsClicked is updated, it means the user
        //Has clicked a card, so we increase the score
        if (cardsClicked.length > 0) setScore(score + 5);

        //Check if the two arrays have the same length
        //If they do, it means there were no duplicate cards clicked
        //And the level can be incremented
        if (cardsClicked.length === numOfCards) {
            setCardsClicked([]);
            setLevel(level + 1);
        };
    }, [cardsClicked]);

    return (
        <Styled.Container>
            <Styled.GameInfo>
                <Styled.Level>
                    Level {level}
                </Styled.Level>
                <Styled.Score>
                    Score {score}
                </Styled.Score>
                <Styled.MainMenu onClick={() => setGameStart(true)}>
                    Main Menu
                </Styled.MainMenu>
            </Styled.GameInfo>
            <Styled.Game cards={numOfCards}>
                {
                    cards.length > 0 &&
                    cards.map((card) => {
                        return (
                            <Card
                                key={card.id}
                                value={card.value}
                                suite={card.suite}
                                id={card.id}
                                level={level}
                                setLevel={setLevel}
                                isDuplicate={isDuplicate}
                                handleCardClick={handleCardClick}
                                handleCardDuplicate={handleCardDuplicate}
                            />
                        );
                    })
                }
            </Styled.Game>
            <Styled.GameDescription>
                Don't click the same card twice!
            </Styled.GameDescription>
        </Styled.Container>
    );
}

export default Levels;