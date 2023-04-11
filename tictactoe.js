const Score = (() => {
  const winningMoves = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 8], [1, 5, 9], [3, 5, 7]]

  const insertTest = (id, marker) => {
    for (let i = 0; i < winningMoves.length; i++) {
      if (winningMoves[i].includes(id)) {
        const thisId = winningMoves[i].indexOf(id)
        Score.winningMoves[i][thisId] = marker
        if (checkEqual(winningMoves[i])) {
          console.log('WINNER')
        }
      }
    }
  }
  return { winningMoves, insertTest }
})()

const Turn = (() => {
  let counter = 1
  const incrementTurn = () => {
    counter += 1
  }
  const thisTurn = () => {
    if (counter % 2 !== 0) {
      return player1.getMarker()
    } else {
      return player2.getMarker()
    }
  }
  return ({ thisTurn, incrementTurn })
})()

const Board = (() => {
  // const layout = new Array(9)
  const addMarker = () => {
    const turn = Turn.thisTurn()
    return turn
  }

  const createLayout = () => {
    const pageBoard = document.querySelector('.main')
    for (let i = 1; i < 10; i++) { // start at 1, for ease
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.setAttribute('id', `${i}`)
      pageBoard.appendChild(cell)
      cell.addEventListener('click', () => {
        if (!cell.textContent) {
          const cellId = Number(cell.getAttribute('id'))
          console.log(cellId)
          cell.textContent = addMarker()
          Score.insertTest(cellId, Turn.thisTurn())
          Turn.incrementTurn()
        }
      })
    }
  }

  return { createLayout }
})()

const Player = (playerMarker) => {
  const getMarker = () => playerMarker
  return { getMarker }
}

// ----
Board.createLayout()
const player1 = Player('X')
const player2 = Player('O')

function checkEqual (arry) {
  return arry.every((val, i, arr) => val === arr[0])
}
