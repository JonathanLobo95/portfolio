const textElement = document.querySelector('.typing-text'); // Cambiado a selector de clase para que coincida con tu HTML
const textToType = "Full Stack Developer | 3 años liderando equipos y gestión comercial";
let index = 0;

function typeWriter(){
    if(index < textToType.length){ 
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// 2. Scroll suave (Funciona si el href coincide con el id de la sección)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const observarScroll = () => {
    const elementos = document.querySelectorAll('.revelar-izq, .revelar-der');

    const observer = new IntersectionObserver((entries) => {
         
        entries.forEach(entry => { 
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(el => observer.observe(el)); 
};

// Iniciar funciones
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    observarScroll();
});

const btnSubir = document.getElementById("btn-subir");

// Función que controla la visibilidad al hacer scroll
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
};

// Función para volver arriba con efecto suave
btnSubir.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};