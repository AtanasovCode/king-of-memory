import * as Styled from '../styles/Card.Styled';
import { useEffect, useState } from 'react';



const Card = ({
    value,
    suite,
    id,
    handleCardClick,
    isDuplicate,
    handleCardDuplicate,
}) => {
    return (
        <Styled.Card onClick={() => {
            if (isDuplicate(id)) {
                handleCardDuplicate();
                console.log("Game Over!");
            } else {
                handleCardClick(value, suite, id);
            }
        }}>
            <Styled.Top>
                <Styled.Number>
                    {value}
                </Styled.Number>
                <Styled.SmallSuite
                    src={suite}
                />
            </Styled.Top>
            <Styled.Suite
                src={suite}
            />
        </Styled.Card>
    );
}

export default Card;