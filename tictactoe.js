const Turn = (() => {
  let counter = 1
  const incrementTurn = () => {
    counter += 1
  }
  const thisTurn = () => {
    if (counter % 2 === 0) {
      incrementTurn()
      return 'X'
    } else {
      incrementTurn()
      return 'O'
    }
  }
  return ({ thisTurn })
})()

const Board = (() => {
  const layout = new Array(9)
  const charChar = () => {
    const turn = Turn.thisTurn()
    return turn
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

const Player = (playerName) => {
  return { playerName }
}

// ----
Board.createLayout()
const playerX = Player('X')
const playerO = Player('O')
