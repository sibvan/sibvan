import './css/main.scss';
import { typeCode } from './js/about-me';
import { changeText } from './js/projects';



// Напечать код в «Обо мне»
const aboutMeStrsEl = document.querySelector('.about-me__strs');
document.addEventListener('scroll', onScroll);
function onScroll() {
    const posTop = aboutMeStrsEl.getBoundingClientRect().top; 
    if (posTop <= window.innerHeight && posTop >= 0) { 
        typeCode(aboutMeStrsEl);
        document.removeEventListener('scroll', onScroll);
    }
}



// Cмена текста в кнопке
const sibvanBtnEl = document.querySelector('.projects-list__url_sibvan');
sibvanBtnEl.addEventListener('click', function(e) {
    e.preventDefault();
    changeText(sibvanBtnEl);
});