import Typed from 'typed.js';



export function typeCode(el) {
  const str = el.innerHTML;
  el.innerHTML = ''; // Очищаем текущий текст
  new Typed(el, {
    strings: [str],
    typeSpeed: 0,
    showCursor: false,
  });
}