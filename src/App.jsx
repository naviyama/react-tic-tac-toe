import Square from './component/Square'
import './App.css'
import { useState } from 'react'

function App() {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)
  const [foundWinLine, setFoundWinLine] = useState(false)

  const handleClick = (i) => {
    if(squareValue[i] || foundWinLine) return
    const copiedSquareValue = [...squareValue]
    copiedSquareValue[i] = xTurn? "X" : "O"
    setXTurn(!xTurn)
    setSquareValue(copiedSquareValue)
    if (whoIsWinner(copiedSquareValue)) {
      setFoundWinLine(true)
    }
  }

  const winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const isFilledAll = squareValue.every(value => value !== null)

  const whoIsWinner = (squareValue) => {

    for(let i = 0; i < winLine.length; i++){
      const [a, b, c] = winLine[i]
      if(squareValue[a] && squareValue[a] === squareValue[b] && squareValue[a] === squareValue[c]){
        return squareValue[a]
      } 
    } 
  return null
  }

  const winner = whoIsWinner(squareValue)

  let gameStatus;
  const allNull = squareValue.every(value => value === null)

  const style = {
    color: xTurn? "red" : "blue"
  }
  const winnerColor = {
    color: winner === "X"? "red": "blue"
  }

  if(winner){
    gameStatus = (
      <span>
        🎊 Congratulations 🎊 <span style={winnerColor}>{winner}</span> won!
      </span>
    )
    // gameStatus = "🎊 Congraturation 🎊  " + winner + " won!"
  }else if(isFilledAll){
    gameStatus = "Game Over..."
  }else{
    gameStatus = (
      <span>
        Turn: <span style={style}>{xTurn? "X": "O"}</span>
      </span>
    )
  }

  const handleResetGame = () => {
    setFoundWinLine(false)
    setSquareValue(Array(9).fill(null))
    setXTurn(true)
  }

  return (
    <div className='container'>
      <h1 className='game-title'>Tic Tac Toe</h1>
      <div className='game-status'>{gameStatus}</div>
      <div className='gamebox'>
        <Square squareValue={squareValue[0]} handleClick={() => handleClick(0)} />
        <Square squareValue={squareValue[1]} handleClick={() => handleClick(1)} />
        <Square squareValue={squareValue[2]} handleClick={() => handleClick(2)} />
        <Square squareValue={squareValue[3]} handleClick={() => handleClick(3)} />
        <Square squareValue={squareValue[4]} handleClick={() => handleClick(4)} />
        <Square squareValue={squareValue[5]} handleClick={() => handleClick(5)} />
        <Square squareValue={squareValue[6]} handleClick={() => handleClick(6)} />
        <Square squareValue={squareValue[7]} handleClick={() => handleClick(7)} />
        <Square squareValue={squareValue[8]} handleClick={() => handleClick(8)} />
      </div>
      <div className='reset-container'>
        {!allNull && <button onClick={handleResetGame} >Reset</button>}
      </div>
    </div>
  )
}

export default App
