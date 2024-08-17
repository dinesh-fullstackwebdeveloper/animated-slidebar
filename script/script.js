document.addEventListener('DOMContentLoaded',()=>{
var slidebar = document.querySelector('.slidebar');
var btn = document.querySelector('#btn');
var overlay = document.querySelector('.nav-overlay');

btn.addEventListener('click',()=>{
    slidebar.classList.add('open');
});

overlay.addEventListener('click',()=>{
    slidebar.classList.remove('open');
});
});