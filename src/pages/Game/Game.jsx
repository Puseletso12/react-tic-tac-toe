import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoardStyle } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";

function Game() {
  const { game } = useContext(GameContext)
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      <GameBoardStyle>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardStyle>
    </Container>
  );
}

export default Game;
