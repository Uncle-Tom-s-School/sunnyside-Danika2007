const menu = document.getElementById('menu');
const open = document.getElementById('menu-open');
menu.addEventListener('click', ()=>{
    if (open.style.display === 'flex') {
        open.style.display = 'none';
    } else {
        open.style.display = 'flex';
    }
})