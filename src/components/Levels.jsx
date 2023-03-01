import { useState, useEffect } from "react";
import * as Styled from '../styles/Levels.Styled';
import Card from "./Card";

const Levels = ({
    cards,
    generateObjectWithCardDetails,
    level,
}) => {

    const [cardsClicked, setCardsClicked] = useState({});

    //Generates 3 random cards with random values and suites
    useEffect(() => {
        if (level === 1) generateObjectWithCardDetails(3);
        if (level === 2) generateObjectWithCardDetails(4);
    }, [])

    const handleCardClick = (value, suite) => {
        //Add the clicked card to the array
        cardsClicked.push({value: value, suite: suite});

        //If the cardsClicked array has more than one card
        //Check to see if the cards are the same
        if(cardsClicked.length > 1) {

        }
    }

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
                            />
                        );
                    })
                }
            </Styled.Game>
        </Styled.Container>
    );
}

export default Levels;