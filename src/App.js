import { useState } from 'react'
import Board from './components/Board/Board'

function App() {
  const winningCondition = [
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

    console.log(scores)

    setBoard(updateBoard)
    setXPlaying(!xPlaying)
  }

  const checkWinner = (board) => {
    for (let i = 0; i < winningCondition.length; i++) {
      const [choice1, choice2, choice3] = winningCondition[i]
      if (
        board[choice1] &&
        board[choice1] === board[choice2] &&
        board[choice2] === board[choice3]
      ) {
        console.log(board[choice1])
        return board[choice1]
      }
    }
  }

  return (
    <div>
      <Board board={board} onClick={handleCell} />
    </div>
  )
}

export default App
