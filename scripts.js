// crear variables que representen a los selectores de cada uno de esos elementos
    // seleccionar los elementos que hay en el HTML

//selecciona el primer H1 que haya en el DOM
const myH1 = document.querySelector('h1');

//selecciona todos los pàrrafos que haya en el DOM
const myP = document.querySelectorAll('p');

const myParrafito = document.querySelector('.parrafito');
const myID = document.getElementById('p_id');
const myInput = document.querySelector('input');

/* console.log(myH1); */
/* console.log(myP); */

//acceder al valor de un input
console.log(myInput.value);

console.log( {
    myH1,
    myP,
    myParrafito,
    myID,
    myInput,
} );

