//strict rules

'use strict'

//define array of img used

const images = ['01.webp','02.webp','03.webp','04.webp','05.webp'];

//define item variable

let item = '';

//define slider variable

const slider =  document.querySelector('.slider');

//cycle trough all img for creating html elements with code

for (let i = 0; i < images.length; i++) {

   item += `<div class="item">
   <img src="img/${images[i]}" alt="">
    </div>`;
}

slider.innerHTML +=  item;

//temporary show the first img

document.querySelector('.item').classList.add('show');
