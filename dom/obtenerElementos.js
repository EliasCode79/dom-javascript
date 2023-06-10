// Formas de obtener un node del dom

// getElementById
const title = document.getElementById('title-id');
console.log(title);

// getElementByClassName
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);

// getElementByTagName
const container = document.getElementsByTagName('div');
console.log(container);

// querySelector
const item = document.querySelector('.list-items');
console.log(item);

// querySelectorAll
const items = document.querySelectorAll('.lis-items');
console.log(items);

// Lo mejore es utilizar el query selector.
