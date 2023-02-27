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

//add item in the slider section

slider.innerHTML +=  item;

//temporary show the first img

document.querySelector('.item').classList.add('show');

//define prev and next button variable

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

//define collection of imgs

const itemsCollection = document.querySelectorAll('.item');

//define an active index variable

let active = 0;
//define click event of next button

nextButton.addEventListener('click',function(){
    
    if (active < itemsCollection.length - 1){
            itemsCollection[active].classList.remove('show');
            active++;
            itemsCollection[active].classList.add('show');
        } else {
            itemsCollection[active].classList.remove('show');
            active = 0;
            itemsCollection[active].classList.add('show');
        }

});

//define click event of prev button

prevButton.addEventListener('click',function(){
    
    if (active > 0){
            itemsCollection[active].classList.remove('show');
            active--;
            itemsCollection[active].classList.add('show');
        } else {
            itemsCollection[active].classList.remove('show');
            active = (itemsCollection.length - 1);
            itemsCollection[active].classList.add('show');
        }
});
