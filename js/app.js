window.onload = function() {
  var board = document.querySelector('.board-js');
  
  board.addEventListener('click', addJugada);
};
  
var centinel = true;
  
function addJugada(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel) 
      event.target.textContent = 'X';
    else 
      event.target.textContent = 'O';
  
    centinel = !centinel;
  }
}

if (document.getElementById('uno').firstChild === document.getElementById('dos').firstChild && document.getElementById('dos').firstChild === document.getElementById('tres').firstChild && document.getElementById('tres') !== '' && document.getElementById('uno') !== '' && document.getElementById('tres') !== '') {
  document.write('El ganador es:' + getElementById('dos'));
} else if (document.getElementById('cuatro').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('seis').firstChild) {
  document.write('El ganador es:' + document.getElementById('cuatro'));
} else if (document.getElementById('siete').firstChild === document.getElementById('ocho').firstChild && document.getElementById('ocho').firstChild === document.getElementById('nueve').firstChild) {
  document.write('El ganador es:' + document.getElementById('siete'));
} else if (document.getElementById('uno').firstChild === document.getElementById('cuatro').firstChild && document.getElementById('cuatro').firstChild === document.getElementById('siete').firstChild) {
  document.write('El ganador es:' + document.getElementById('cuatro'));
} else if (document.getElementById('dos').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('ocho').firstChild) {
  document.write('El ganador es:' + document.getElementById('dos'));
} else if (document.getElementById('tres').firstChild === document.getElementById('seis').firstChild && document.getElementById('seis').firstChild === document.getElementById('nueve').firstChild) {
  document.write('El ganador es:' + document.getElementById('seis'));
} else if (document.getElementById('uno').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('nueve').firstChild) {
  document.write('El ganador es:' + document.getElementById('cinco'));
} else if (document.getElementById('tres').firstChild === document.getElementById('cinco').firstChild && document.getElementById('cinco').firstChild === document.getElementById('siete').firstChild) {
  document.write('El ganador es:' + document.getElementById('cinco'));
} else {
  document.write('no hay ganador');
}