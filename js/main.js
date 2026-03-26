// =============================================
//  BARBERÍA EL PULGA — main.js
// =============================================

// --- Menú hamburguesa ---
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});

// Cerrar menú al hacer click en un link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});


// --- Validación del formulario de contacto ---
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valido = true;

  const nombre  = document.getElementById('nombre');
  const email   = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  // Limpiar errores previos
  ['errorNombre', 'errorEmail', 'errorMensaje'].forEach(id => {
    document.getElementById(id).textContent = '';
  });

  // Validar nombre
  if (nombre.value.trim().length < 2) {
    document.getElementById('errorNombre').textContent = 'Ingresá tu nombre (mínimo 2 caracteres).';
    valido = false;
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById('errorEmail').textContent = 'Ingresá un email válido.';
    valido = false;
  }

  // Validar mensaje
  if (mensaje.value.trim().length < 10) {
    document.getElementById('errorMensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.';
    valido = false;
  }

  if (valido) {
    document.getElementById('formSuccess').textContent = '¡Mensaje enviado! Te contactamos a la brevedad.';
    form.reset();
    // Acá más adelante podés conectar un servicio real como Formspree o EmailJS
  }
});
