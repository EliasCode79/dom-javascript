// TODO: atravesando el padre
/*
const ul = document.querySelector('ul');

// Obteniendo el elemento padre de ul
// El parentElement devuelve un elemento html mientras el parent Node devuelve un nodo en este caso es un elemento html, pero puede haber otros tipos de nodos como de texto etc.
console.log(ul.parentElement);
console.log(ul.parentNode);

// Si queremos obtener el elemento padre del padre hacemos lo siguiente
console.log(ul.parentElement.parentElement);
console.log(ul.parentNode.parentNode);
*/

// TODO: Atravesando el hijo

/*
let ul = document.querySelector('ul');

// con este obtenemos los elementos html hijos, retorna un HTMLCollection con 5 elementos(los 5 li).
console.log(ul.children);

// con este obtenemos los nodos hijos de ul, retorna un NodeList con 11 elementos ya q este cuenta los 5 elementos html(li) y los saltos de linea o cualquier letra lo toma con un texto(en este caso hay 6)
console.log(ul.childNodes);

// * : Node Element
// obtenemos el 1er y el ultimo elemento Node, en este caso un texto(salto de linea).
console.log(ul.firstChild);
console.log(ul.lastChild);

// utilizamos el elemento 1, y no el cero poque el cero es un texto y el 1 si es un elemento html al cual podemos modificarles los estilos.
ul.childNodes[1].style.backgroundColor = 'green';

// *: Html Element
// obtenemos el 1er y ultimo elemento html.
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Como este es un elemento html podemos directamente aplicarle los estilos.
ul.lastElementChild.style.backgroundColor = 'blue';

*/

// TODO: 	Recorrido por elementos hermanos.

let ul = document.querySelector('ul');

// *: Node element
// ul se encuentre entre saltos de linea por lo q sus hermanos son text.
console.log(ul.previousSibling);
console.log(ul.nextSibling);

// *: Element html
// el previous no retorna el elemento anterior y el nextElement el elemento q sigue pero en este caso no hay otro elemento despues del ul, asi q nos retorna un null.
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
