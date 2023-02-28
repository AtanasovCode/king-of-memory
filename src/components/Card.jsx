import * as Styled from '../styles/Card.Styled';
import { useEffect, useState } from 'react';



const Card = ({
    value,
    suite,
}) => {
    return (
        <Styled.Card>
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