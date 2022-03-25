import './Restart.css'

export const Restart = ({ resetBoard }) => {
  return (
    <button className='restart ' onClick={resetBoard}>
      Restart
    </button>
  )
}
