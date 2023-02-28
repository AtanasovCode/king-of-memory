import { useState, useEffect } from "react";
import * as Styled from '../../styles/Levels.Styled';
import Card from "../Card";

const LevelOne = ({
    getRandomNumber,
    getRandomSuite,
}) => {

    return (
        <Styled.Container>
            <Styled.Heading>
                Level One
            </Styled.Heading>
            <Styled.Game>
                <Card
                    getRandomNumber={getRandomNumber}
                    getRandomSuite={getRandomSuite}
                />
                <Card
                    getRandomNumber={getRandomNumber}
                    getRandomSuite={getRandomSuite}
                />
                <Card
                    getRandomNumber={getRandomNumber}
                    getRandomSuite={getRandomSuite}
                />
            </Styled.Game>
        </Styled.Container>
    );
}

export default LevelOne;