import { useState, useEffect } from "react";
import * as Styled from '../styles/Levels.Styled';
import Card from "./Card";

const Levels = ({
    cards,
    generateObjectWithCardDetails,
    level,
}) => {

    //Generates 3 random cards with random values and suites
    useEffect(() => {
        if (level === 1) generateObjectWithCardDetails(3);
        if (level === 2) generateObjectWithCardDetails(4);
    }, [])

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