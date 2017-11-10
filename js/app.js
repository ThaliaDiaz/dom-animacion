var td = document.querySelectorAll('td');

window.onload = function() {
  var aleatorio = Math.round(Math.random() * 10);
  /* var aleatorio = 6;*/
  var position = aleatorio;
  td[position].classList.add('red');

  
  window .addEventListener('keyup', function(e) {
    var ascii = e.keyCode;
    console.log(ascii);
    td[position].classList.add('red');
    /* flecha arriba*/ 
    if (ascii === 38) {
      td[position].classList.remove('red');
      td[position - 4].classList.add('red');
    }
    /* flecha abajo*/ 
    if (ascii === 40) {
      td[position - 4].classList.remove('red');
      td[position].classList.remove('red');
      td[position + 4].classList.add('red');
    }
    /* Flecha izquierda */
    if (ascii === 37) {
      td[position + 4].classList.remove('red');
      td[position].classList.remove('red');
      td[position - 1].classList.add('red');
    }
    /* Flecha derecha */
    if (ascii === 39) {
      td[position - 1].classList.remove('red');
      td[position].classList.remove('red');
      td[position].classList.add('red');
    }
  });
};

