import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svg/icon-x.svg";
import { ReactComponent as XIconOutline } from "../../assets/svg/icon-x-outline.svg";
import { ReactComponent as IconO } from "../../assets/svg/icon-o.svg";
import { ReactComponent as OIconOutline } from "../../assets/svg/icon-o-outline.svg";

function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext)

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board)
    if(result) {
      roundComplete(result)
      handleModal(<RoundOverModal />)
    }
  };
  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="marketItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="marketItem" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? (
        <XIconOutline className="outlineIcon" />
      ) : (
        <OIconOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
}

export default GameCell;
