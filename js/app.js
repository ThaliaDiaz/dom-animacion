
window .addEventListener('keyup', function(e) {
  var ascii = e.keyCode;
  console.log(ascii);
  var aleatorio = Math.round(Math.random() * 10);

  var td = document.querySelectorAll('td');
  td[aleatorio].classList.add('red');

  /* flecha arriba*/ 
  if (ascii === 38) {
    td[6].classList.remove('red');
    td[2].classList.add('red');
  }
  /* flecha abajo*/ 
  if (ascii === 40) {
    td[2].classList.remove('red');
    td[6].classList.remove('red');
    td[10].classList.add('red');
  }
  /* Flecha izquierda */
  if (ascii === 37) {
    td[10].classList.remove('red');
    td[6].classList.remove('red');
    td[5].classList.add('red');
  }
  /* Flecha derecha */
  if (ascii === 39) {
    td[5].classList.remove('red');
    td[6].classList.remove('red');
    td[7].classList.add('red');
  }
});
