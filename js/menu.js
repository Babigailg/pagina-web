const menu = document.querySelector('.menu');
const mimenu = document.querySelector('.menu-navegacion');

menu.addEventListener('click', ()=>{
    mimenu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(mimenu.classList.contains('spread')
    && e.target != mimenu && e.target != menu){
        mimenu.classList.toggle("spread")
    }
})