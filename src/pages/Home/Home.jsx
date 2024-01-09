import React from 'react'
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Master the Grid: A Modern Twist on Tic-Tac-Toe Fun!</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  )
}

export default Home
