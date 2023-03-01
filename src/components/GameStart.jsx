import * as Styled from '../styles/GameStart.Styled';

const GameStart = ({
    getRandomNumber,
    getRandomSuite,
}) => {
    return (
        <Styled.Container>
            <Styled.Title>
                King Of Memory
            </Styled.Title>
            <Styled.FallingCards>
                <Styled.Card>
                    <Styled.Top>
                        <Styled.Number>
                            {getRandomNumber()}
                        </Styled.Number>
                    </Styled.Top>
                    <Styled.Suite 
                        src={getRandomSuite()}
                    />
                </Styled.Card>
            </Styled.FallingCards>
            <Styled.Button
                type="button"
                value="Start Game"
            />
        </Styled.Container>
    );
}

export default GameStart;