const gameController = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];
  let players = [];
  let activePlayer;
  let winner;
  let activeGame = false;


  const createPlayer = (name, mark) => {
    return {
      name: name,
      mark: mark
    }
  }

  const checkWin = () => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = activePlayer;
        let combo = [a, b, c];
        highlightWin(combo);
        return true;
      }
    }
    return false;
  };

  const checkTie = () => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        return false;
      }
    }
    return !checkWin();
  }

  const highlightWin = (combo) => {
    combo.forEach(index => {
      const cell = document.querySelector(`[data-index="${index}"]`);
      cell.style.color = '#D62828';
      flicker(cell);
    });
  }

  const flicker = (cell) => {
    let color = '#000';
    const flickerInterval = setInterval(() => {
      cell.style.color = color;
      color = color === '#000' ? '#D62828' : '#000';
    }, 500);

    setTimeout(() => {
      clearInterval(flickerInterval);
      cell.style.color = '#D62828';
    }, 3000);
  };
  

  const start = () => {
    players = [
      createPlayer(document.querySelector('#player-1').value, 'X'),
      createPlayer(document.querySelector('#player-2').value, 'O')
    ]
    activePlayer = players[0];
    activeGame = true;
  }


  const playAgain = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => {
      cell.textContent = '';
      cell.style.color = '#000';
    });
    document.getElementById('result').textContent = '';
    activePlayer = players[0];
    activeGame = true;
  }

  const handleClick = (e) => {
    const index = e.target.getAttribute('data-index');
    if (board[index] === '' && activeGame) {
      board[index] = activePlayer.mark;
      e.target.textContent = activePlayer.mark;
    }
    if (checkWin()) {
      document.getElementById('result').textContent = `The Winner is: ${winner.name}!`;
      activeGame = false;
     } else if (checkTie()) {
      document.getElementById('result').textContent = 'It\'s a tie!';
      activeGame = false;
     } else {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
     }
  }

  return {
    start,
    playAgain,
    handleClick
  };
})();

document.getElementById('start-btn').addEventListener('click', () => {
  document.querySelector('.players').style.display = 'none';
  document.querySelector('.start').style.display = 'none';
  gameController.start();
})

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', gameController.handleClick);
});

document.getElementById('play-again-btn').addEventListener('click', () => {
  gameController.playAgain();
})










