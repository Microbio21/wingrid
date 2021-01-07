let boton = document.getElementById('button');
let menu = document.getElementById('menu');

boton.addEventListener('click', ()=>{
    menu.classList.toggle('open');
})