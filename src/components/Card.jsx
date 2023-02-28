import * as Styled from '../styles/Card.Styled';
import { useEffect, useState } from 'react';



const Card = ({
    getRandomNumber,
    getRandomSuite,
}) => {

    const [currentNum, setCurrentNum] = useState();
    const [currentSuite, setCurrentSuite] = useState();

    useEffect(() => {
        setCurrentNum(getRandomNumber());
        setCurrentSuite(getRandomSuite());
    }, []);

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