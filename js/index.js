const navToggle = document.querySelector(".navToggle");
const navLinks = document.querySelectorAll(".nav__item");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})