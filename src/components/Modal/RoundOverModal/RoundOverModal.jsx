import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

function RoundOverModal() {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title primary>Puseletso Wins this Round!</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>
          Puseletso won this round! Choices will be switched now.
        </Subtitle>
        <Subtitle primary>Puseletso: 1</Subtitle>
        <Subtitle primary>Tshuputji: 1</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
          }}
        >
          Continue Playing
        </Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
