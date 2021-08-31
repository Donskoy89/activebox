document.querySelector('.burger').addEventListener('click', ()=>{
    let nav = document.querySelector('.nav');
    nav.classList.toggle('nav-active');
    document.querySelector('.burger__item').classList.toggle('active');
});