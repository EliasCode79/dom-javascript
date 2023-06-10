// TODO: existen un monton de evento y tambien existen muhcos formas de  escuchar(listener) un evento, veremos algunas de esas formas

// * poniendo el evento en el codigo html
{
	/* <button class="btn-1 btn" onclick="alert('hola mundo')">Enter</button> */
} // El evento aqui es el onclick, cuando se haga click en el boton lanzaremos el alert con el msj 'hola mundo'.

// * otra forma es agregando evento mediantes JS.

// element.addEventListener("evento", "listener(es una funcion)");

let btnDos = document.querySelector('.btn-2');
const alertBtn = () => {
	alert('se presiono el boton 2');
};
btnDos.addEventListener('click', alertBtn);

// * Evento mouseOver
let btnTres = document.querySelector('.box-3');
const newBbColor = () => {
	btnTres.style.backgroundColor = 'black';
};

btnTres.addEventListener('mouseover', newBbColor);
