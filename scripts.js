// crear variables que representen a los selectores de cada uno de esos elementos presentes en html 
    // seleccionar los elementos que hay en el HTML

//selecciona el primer H1 que haya en el DOM
const myH1 = document.querySelector('h1');

//selecciona todos los pàrrafos que haya en el DOM
const myP = document.querySelectorAll('p');

const myParrafito = document.querySelector('.parrafito');
const myID = document.getElementById('p_id');
const myInput = document.querySelector('input');

console.log(myH1);
/* console.log(myP); */
/* console.log(myID); */

//acceder al valor de un input
/* console.log(myInput.value); */

console.log( {
    myH1,
    myP,
    myParrafito,
    myID,
    myInput,
} );

//agregando HTML
myH1.innerHTML = 'Cambiando el texto a la <br> etiqueta H1';
//agregando sòlo texto, no interpreta el HTML
/* myH1.innerText = 'Cambiando el texto a la <br> etiqueta H1'; */

//leer atributos de un elemento con: .getAttribute
console.log(myH1.getAttribute('theme'));
 //dark
console.log('clase: ' + myH1.getAttribute('class'));
//black
console.log(myH1.getAttribute('align'));
//null

//modificando atributos de un elemento con: .setAttribute
myH1.setAttribute('class', 'light');
console.log('clase: ' + myH1.getAttribute('class'));

//agregando/removiendo una clase a un elemento
myH1.classList.add('white');
myH1.classList.remove('light');

myInput.value = "My Value";

//crear un Elemento "desde cero"
console.log(document.createElement('span'));
  //<span></span>

//crear un elemento IMG y agregarle el atributo src
const img = document.createElement('img');
img.setAttribute('src', 'https://www.logomoose.com/images/logomoose-2x.png');
//adjuntar, añadir la imagen el el contenedor myID, sin eliminar el contenido que tiene
myID.append(img);

console.log(img);
  //<img src="https://www.logomoose.com/images/logomoose-2x.png">

