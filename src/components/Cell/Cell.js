import './Cell.css'

export const Cell = ({ value, onClick }) => {
  const style = value === 'X' ? 'cell x' : 'cell o'

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  )
}
