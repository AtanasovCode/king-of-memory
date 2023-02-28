import { useState, useEffect } from "react";
import * as Styled from '../../styles/Levels.Styled';
import Card from "../Card";

const LevelOne = ({
    currentNum,
    currentSuite,
    setCurrentNum,
    setCurrentSuite,

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
                    currentNum={currentNum}
                    setCurrentNum={setCurrentNum}
                    currentSuite={currentSuite}
                    setCurrentSuite={setCurrentSuite}

                    getRandomNumber={getRandomNumber}
                    getRandomSuite={getRandomSuite}
                />
                <Card
                    currentNum={currentNum}
                    setCurrentNum={setCurrentNum}
                    currentSuite={currentSuite}
                    setCurrentSuite={setCurrentSuite}

                    getRandomNumber={getRandomNumber}
                    getRandomSuite={getRandomSuite}
                />
                <Card
                    currentNum={currentNum}
                    setCurrentNum={setCurrentNum}
                    currentSuite={currentSuite}
                    setCurrentSuite={setCurrentSuite}

                    getRandomNumber={getRandomNumber}
                    getRandomSuite={getRandomSuite}
                />
            </Styled.Game>
        </Styled.Container>
    );
}

export default LevelOne;