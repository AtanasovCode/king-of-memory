import * as Styled from '../styles/Game.Styled';
import Card from './Card';

const Game = () => {
    return (
        <Styled.Container>
            <Styled.Heading>
                Card Memory Game
            </Styled.Heading>
            <Card />
        </Styled.Container>
    );
}

export default Game;