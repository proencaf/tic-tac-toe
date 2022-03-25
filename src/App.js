import { useState } from 'react'
import Board from './components/Board/Board'
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard'
import { Restart } from './components/Restart/Restart'

function App() {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [scores, setScores] = useState({ Player1: 0, Player2: 0 })
  const [gameOver, setGameOver] = useState(false)

  const handleCell = (cellIndex) => {
    const updateBoard = board.map((value, index) => {
      if (index === cellIndex) {
        return xPlaying === true ? 'X' : 'O'
      } else {
        return value
      }
    })

    const winner = checkWinner(updateBoard)

    if (winner) {
      if (winner === 'O') {
        let { Player2 } = scores
        Player2 += 1
        setScores({ ...scores, Player2 })
      } else {
        let { Player1 } = scores
        Player1 += 1
        setScores({ ...scores, Player1 })
      }
    }

    setBoard(updateBoard)
    setXPlaying(!xPlaying)
  }

  const checkWinner = (board) => {
    for (let i = 0; i < winningCombination.length; i++) {
      const [choice1, choice2, choice3] = winningCombination[i]
      if (
        board[choice1] &&
        board[choice1] === board[choice2] &&
        board[choice2] === board[choice3]
      ) {
        setGameOver(true)
        return board[choice1]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleCell} />
      <Restart resetBoard={resetBoard} />
    </div>
  )
}

export default App
