import Typed from 'typed.js';



export function changeText(el) {

    new Typed(el.querySelector('.projects-list__link-text_sibvan'), {
        strings: ['Вы уже тут'],
        typeSpeed: 50,
        showCursor: false,
        backSpeed: 50,   
        smartBackspace: false
      });




}