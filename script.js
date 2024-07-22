const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 150);
});

let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlinks.classList.remove('open');
}