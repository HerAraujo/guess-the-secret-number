'use strict';
(() => {
  let secretNumber;
  let count = 20;
  let highscore = localStorage.getItem('highscore');
  document.querySelector('.highscore').textContent = highscore;

  const assignSecretNumber = () => {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
  };
  assignSecretNumber();

  const changeMessage = message => {
    document.querySelector('.message').textContent = message;
  };

  const changeBackground = color => {
    document.body.style.backgroundColor = color;
  };

  const changeScore = score => {
    document.querySelector('.score').textContent = score;
  };

  const changeHighscore = highscore => {
    document.querySelector('.highscore').textContent = highscore;
  };

  const changeSecretNumber = value => {
    document.querySelector('.number').textContent = value;
  };

  document.querySelector('.check').addEventListener('click', () => {
    const guess = document.querySelector('.guess').value;
    /* SI ACIERTA EL NUMERO SECRETO - TODO: REINICIAR MARCADOR LUEGO DE ACERTAR Y DESHABILITAR EL BOTON DE CHECK */
    if (secretNumber === +guess) {
      changeMessage('🎉 Correct!'); // MENSAJE CAMBIA A "CORRECT"
      changeSecretNumber(secretNumber); // REVELA NUMERO SECRETO
      changeBackground('green'); // BACKGROUND A GREEN
      if (count > highscore) {
        highscore = count;
        changeHighscore(highscore); // ACTUALIZA HIGHSCORE SI ES NECESARIO
      }
    } else if (!guess) {
      changeMessage('⛔️ No number'); // SI NO ENVIAN NUMERO, MENSAJE DE ERROR
    } else if (count <= 1) {
      changeMessage('💥 YOU LOST'); // SI EL CONTADOR LLEGA A 0, MENSAJE DE PERDISTE
      changeSecretNumber(secretNumber); // REVELA NUMERO SECRETO
      count = 0;
      changeBackground('red'); // BACKGROUND A RED
      changeScore(count);
    } else {
      // CASO DE QUE SE EQUIVOQUE
      count--; // RESTA UN PUNTO
      changeScore(count);
      changeMessage('❌ Try again!'); // MUESTRA MENSAJE DE INTENTAR DE NUEVO
    }
    localStorage.setItem('highscore', highscore);
  });

  document.querySelector('.again').addEventListener('click', () => {
    assignSecretNumber();
    count = 20;
    document.querySelector('.guess').value = null;
    changeSecretNumber('?'); // REVELA NUMERO SECRETO
    changeScore(count);
    changeBackground('#222');
    changeMessage('Start guessing...');
  });
})();
