var td = document.querySelectorAll('td');

window.onload = function() {
  var aleatorio = Math.round(Math.random() * 10);
  var position = aleatorio;
  td[position].classList.add('red');

  
  window .addEventListener('keyup', function(e) {
    var ascii = e.keyCode;
    console.log(ascii);
    td[position].classList.add('red');
    
    if (position === 0) {
      derecha();
      abajo();
    } else if (position === 1 || position === 2) {
      izquierda();
      derecha();
      abajo();
    } else if (position === 3) {
      izquierda();
      abajo();
    } else if (position === 4 || position === 8) {
      arriba();
      derecha();
      abajo();
    } else if (position === 5 || position === 6 || position === 9 || position === 10) {
      arriba();
      abajo();
      derecha();
      izquierda();
    } else if (position === 7 || position === 11) {
      arriba();
      izquierda();
      abajo();
    } else if (position === 12) {
      arriba();
      derecha();
    } else if (position === 13 || position === 14) {
      arriba();
      derecha();
      izquierda();
    } else if (position === 15) {
      arriba();
      izquierda();
    }

    /* flecha arriba*/ 
    function arriba() {
      if (ascii === 38) {
        td[position].classList.remove('red');
        td[position - 4].classList.add('red');
        position = position - 4;
      }
    }
    
    /* flecha abajo*/ 
    function abajo() {
      if (ascii === 40) {
        td[position].classList.remove('red');
        td[position + 4].classList.add('red');
        position = position + 4;
      }
    }
    
    /* Flecha izquierda */
    function izquierda() {
      if (ascii === 37) {
        td[position].classList.remove('red');
        td[position - 1].classList.add('red');
        position = position - 1;
      }
    }
    
    /* Flecha derecha */
    function derecha() {
      if (ascii === 39) {
        td[position].classList.remove('red');
        td[position + 1].classList.add('red');
        position = position + 1;
      }
    }
  });
};

