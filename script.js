'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20 + 1);

let count = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(secretNumber);
  /* SI ACIERTA EL NUMERO SECRETO - TODO: REINICIAR MARCADOR LUEGO DE ACERTAR Y DESHABILITAR EL BOTON DE CHECK */
  if (secretNumber === +guess) {
    document.querySelector('.message').textContent = '🎉 Correct!'; // MENSAJE CAMBIA A "CORRECT"
    document.querySelector('.number').textContent = secretNumber; // REVELA NUMERO SECRETO
    document.body.style.backgroundColor = 'green'; // BACKGROUND A GREEN
    if (count > highscore) {
      highscore = count;
      document.querySelector('.highscore').textContent = highscore; // ACTUALIZA HIGHSCORE SI ES NECESARIO
    }
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number'; // SI NO ENVIAN NUMERO, MENSAJE DE ERROR
  } else if (count <= 1) {
    document.querySelector('.message').textContent = '💥 YOU LOST'; // SI EL CONTADOR LLEGA A 0, MENSAJE DE PERDISTE
    document.querySelector('.number').textContent = secretNumber; // REVELA NUMERO SECRETO
    count = 0;
    document.body.style.backgroundColor = 'red'; // BACKGROUND A RED
    document.querySelector('.score').textContent = count;
  } else {
    // CASO DE QUE SE EQUIVOQUE
    count--; // RESTA UN PUNTO
    document.querySelector('.score').textContent = count;
    document.querySelector('.message').textContent = '❌ Try again!'; // MUESTRA MENSAJE DE INTENTAR DE NUEVO
  }
});
