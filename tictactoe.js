const Turn = (() => {
  const thisTurn = () => 1
  const addTurn = newTurn => thisTurn + newTurn
  return { thisTurn, addTurn }
})()

const Board = (() => {
  const layout = new Array(9)
  const charChar = () => {
    if (Turn.thisTurn % 2 === 0) {
      Turn.addTurn(1)
      return 'X'
    } else {
      Turn.addTurn(1)
      return 'O'
    }
  }

  const createLayout = () => {
    const pageBoard = document.querySelector('.main')
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.className += ` ${i}`
      pageBoard.appendChild(cell)
      cell.addEventListener('click', () => {
        cell.textContent = charChar()
      })
    }
  }

  return { layout, createLayout }
})()

const Player = (playerMarker) => {
  return { playerMarker }
}

// ----

Board.createLayout()
const playerX = Player('X')
const playerO = Player('O')
