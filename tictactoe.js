const Board = (() => {
  const layout = new Array(9)
  const createLayout = () => {
    const pageBoard = document.querySelector('.main')
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.className += ` ${i}`
      pageBoard.appendChild(cell)
    }
  }
  return { layout, createLayout }
})()

const Player = (playerName, playerMarker) => {
  return { playerName, playerMarker }
}
