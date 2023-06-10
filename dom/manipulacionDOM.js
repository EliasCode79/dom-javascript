// TODO modifyig styles

const title = document.querySelector('#title-id');
title.style.color = 'black';

// querySelectorAll devuelve un array(NodeList).
const listItems = document.querySelectorAll('.list-items');
// console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
	listItems[i].style.backgroundColor = 'black';
}

// TODO: 	Add elementos

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);

// TODO: modifyig the text

li.innerHTML = 'nueva pelicula';

// TODO: modifyig atributtes

li.setAttribute('id', 'list-id'); // si no tiene agrega el atributo.
li.removeAttribute('id'); // removiendo el atributo

// obtentiendo atributos de un elemento.
const firstTitle = document.querySelector('#title-id');
console.log(firstTitle.getAttribute('id')); // se pueden obtener cualquier atributo.

li.classList.add('list-items'); // agreando un clase
li.classList.remove('list-items'); // eliminando un clase.

li.classList.contains('list-items'); // retorna un valor booleano dependiendo si tiene o no este clase.

// TODO: Remove element
li.remove(); // con esto eliminamos elementos.
