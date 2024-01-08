import { createContext, useState } from "react"

export const GameContext = createContext({})

export const GameContextProvider = (props) => {
    const [game, setGame] = useState ({
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player: {
            choice: "x",
            name: "Puseletso",
            score: 0
        },
        player2: {
            choice: "o",
            name: "Phuti",
            score: 0
        },
        turn: "x"
    })

    const updateBoard = (index) => {
        const updateBoard = game.board;
        updateBoard[index] = game.turn
        setGame({
            ...game,
            board: updateBoard,
            turn: game.turn === "x" ? "o" : "x"
        })
    }

    const resetBoard = () => {
        setGame({
            ...game,
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        })
    }

    return(
        <GameContext.Provider value={{
            game,
            updateBoard,
            resetBoard
        }}>
            {props.children}
        </GameContext.Provider>
    )
}