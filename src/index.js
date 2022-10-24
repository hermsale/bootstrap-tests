buttonHamburguesa = document.querySelector('.navbar-toggler')
navbarcollapse = document.querySelector('.navbar-collapse');

buttonHamburguesa.addEventListener('click', () =>{
    console.log('boton presionado');
    buttonHamburguesa.classList.aria-expanded('false');
})