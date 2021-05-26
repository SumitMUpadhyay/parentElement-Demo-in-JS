// parentElement

// const heading = document.querySelector('h2');
// const parent = heading.parentElement;
// parent.style.color = 'red';

//previousSibling
//nextSibling
// return whitspace

// const first = document.querySelector('.first');
// // console.log(first);
// const second = (first.nextSibling.nextSibling.style.color = 'red');
// console.log(second);

// const last = document.querySelector('#last');
// const third = last.previousSibling.previousSibling;
// console.log(third);
// console.log(last.nextSibling.nextSibling);

// const first = document.querySelector('.first');
// first.nextElementSibling.style.color = 'red';
// const last = document.querySelector('#last');

// nodeValue
//textContent

// const item = document.getElementById('special');
// const value = item.nodeValue;
// console.log(item.childNodes);
// console.log(item.firstChild.nodeValue);

// const item = document.getElementById('special');
// const value = item.nodeValue;
// console.log(item.childNodes[0].nodeValue);
// console.log(easyValue);

// getAttribute
// setAttribute

// const first = document.querySelector('.first');
// const classValue = first.getAttribute('class');
// const idValue = first.getAttribute('id');
// console.log(idValue);
// console.log(classValue);

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);

// const links = document.querySelectorAll('.first');
// console.log(links);

// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'i also have a class of first';
// console.log(last);

// className
//classList

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// const classValue = first.className;
// console.log(classValue);

// second.className = 'colors';
// second.className = 'text';

// second.className = 'colors text';
// const classValue = third.classList;
// third.classList.add('colors');
// third.classList.remove('text');
// console.log(classValue);

// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// const result = document.querySelector('#result');

// create empty element

// const bodyDiv = document.createElement('div');

// create text node

// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// console.log(result.children);

// remove
//removeChild

// const result = document.querySelector.('#result');
// // result.remove();
// const heading = result.querySelector('h1');
// result.removeChild(heading);
// console.log(heading);

// innerHTML
// textContent

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// console.log(div.textContent);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const randomVar = 'random value${randomVar}';

// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">${randomVar}</li>
// <li>list item</li><li>list item</li>`;
// document.body.appendChild(ul);

// div.textContent = 'hello world';
// div.innerHTML = 'hello people';

// div.innerHTML = `<li class="item">${randomVar}</li>
// <li>list item</li> <li> list item</li>`;

// CSS

// const random = document.querySelector('.random');
// console.log(random.style);

// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.backgroundColor = 'blue';
// random.style.textTransform = 'captalize';

random.classList.add('title');
