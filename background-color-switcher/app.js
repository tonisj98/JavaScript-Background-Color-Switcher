// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

let color
const onClick = function() {
    console.log(this.id, this.innerHTML);
    color = this.id;
    body.style.backgroundColor = color
  }
 color =  document.getElementById('grey').onclick = onClick;
 color = document.getElementById('white').onclick = onClick;
 color = document.getElementById('blue').onclick = onClick;
 color = document.getElementById('yellow').onclick = onClick;
