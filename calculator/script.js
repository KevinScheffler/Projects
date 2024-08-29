function createButtons() {
  const buttons = [
    '%', 'AC', '←', '/',
    7, 8, 9, 'x',
    4, 5, 6, '-',
    1, 2, 3, '+',
    '√x', 0, '.', '='
  ];

  const btnContainer = document.querySelector('.buttons');

  for (let i = 0; i < buttons.length; i++) {
    const buttonCard = document.createElement('button');
    buttonCard.classList.add('button-card');
    buttonCard.id = 'button' + buttons[i]
    buttonCard.textContent = buttons[i];

    switch (buttons[i])
    {
      case '/':
      case 'x':
      case '+':
      case '-':
      case '%':
      case '←':
      case 'AC':
      buttonCard.style.backgroundColor = '#aaaaaa50';
      buttonCard.addEventListener('mouseover', () => { buttonCard.style.opacity = 0.75 });
      buttonCard.addEventListener('mouseout', () => { buttonCard.style.opacity = 1 });
    }

    btnContainer.appendChild(buttonCard);
    if (buttons[i] == '=')
    {
      buttonCard.style.backgroundColor = 'darkblue';
      buttonCard.addEventListener('mouseover', () => { buttonCard.style.opacity = 0.75 });
      buttonCard.addEventListener('mouseout', () => { buttonCard.style.opacity = 1 });
    }
  }
}

createButtons()