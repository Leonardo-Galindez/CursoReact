import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6] 
]

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children} 
    </div>
  )
}



function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner,setWinner] = useState(null)


  const updateBoard = (index) => {
    // Verificar si la casilla ya tiene algo
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  const checkWinner = (boartToCheck) =>{
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(boartToCheck[a] && boartToCheck[a] === boartToCheck[b] && boartToCheck[a] === boartToCheck[c]){
          return boartToCheck[a]
      }
    }
    return null
  }

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App;
