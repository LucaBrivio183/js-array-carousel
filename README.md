Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

//start  with  index.html file and gonna create a simple scaffolding with a centered container and a fixed height slider for imgs

/position  2 buttons absolutote  relative to slider  box

//insert all imgs and styling all with css for checking the right functioning with manual input

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

//define the array with all the imgs

//using a cycle gonna insert a div and the correct indexed img

MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//define 2 variable for  transforming html arrows in clickable items

//define an index (number), for scrolling trought the imgs at button  click

//at click gonna change index and add a  class for  showing the right  img
    //if condition for not going over the last img

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

//resetting the index  number when reached the last img for starting from first img at next click

//definining  the idex as  img  array lenght  when reached first img, for  showing the last img at  previous  click button

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:

//adding a new on-side container  next to the slider

//injecting div element with every  img from an array copied using slice function

//creating 2 different arrays (one for 2 img before the active one,one  for 2 img after the active one) gonna inject the proper slice of img array


