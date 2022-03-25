import './ScoreBoard.css'

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { Player1, Player2 } = scores

  return (
    <div id='scoreboard'>
      <div
        className={`badge score x-score ${!xPlaying && 'inactive'}`}
        id='user-label'
      >
        Player 1
      </div>
      <div
        className={` badge score o-score ${xPlaying && 'inactive'}`}
        id='comp-label'
      >
        Player 2
      </div>
      <span>{Player1}</span>:<span>{Player2}</span>
    </div>
  )
}
