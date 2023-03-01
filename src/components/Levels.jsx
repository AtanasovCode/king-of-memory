import { useState, useEffect } from "react";
import * as Styled from '../styles/Levels.Styled';
import Card from "./Card";

const Levels = ({
    cards,
    generateObjectWithCardDetails,
    level,
    setLevel,
}) => {

    const [cardsClicked, setCardsClicked] = useState([]);
    const [numOfCards, setNumOfCards] = useState(3);

    useEffect(() => {
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

    const isDuplicate = (cards) => {
        const values = cards.map((card) => {
            return card.id;
        });
        const isDuplicate = values.some((card, idx) => {
            return cards.indexOf(card) !== idx;
        })
        return isDuplicate;
    }


    const handleCardClick = (value, suite, id) => {
        //Add the clicked card to the array
        let temp = {value: value, suite: suite, id: id};
        console.log(temp);
        setCardsClicked((current) => [temp, ...current]);

        //If the cardsClicked array has more than one card
        //Check to see if the cards are the same
        if(cardsClicked.length > 1) {
           if(isDuplicate(cardsClicked)) console.log(isDuplicate(cardsClicked));
        }
        
        //Check if the two arrays have the same length
        //If they do, it means there were no duplicate cards clicked
        //And the level can be incremented
        if(cardsClicked.length === numOfCards) setLevel(level + 1);
    }

    useEffect(() => {
        console.log(cardsClicked);
    }, [cardsClicked])

    return (
        <Styled.Container>
            <Styled.Heading>
                Level One
            </Styled.Heading>
            <Styled.Game>
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
                                handleCardClick={handleCardClick}
                            />
                        );
                    })
                }
            </Styled.Game>
        </Styled.Container>
    );
}

export default Levels;