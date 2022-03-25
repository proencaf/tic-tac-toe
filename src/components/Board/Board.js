import './Board.css'
import { Cell } from '../Cell/Cell'

export default function Board({ board, onClick }) {
  return (
    <div className='board'>
      {board.map((value, index) => {
        return (
          <Cell
            value={value}
            onClick={() => value === null && onClick(index)}
          />
        )
      })}
    </div>
  )
}
