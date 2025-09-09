// Scroll suave
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Confirmación de formulario
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("¡Gracias por contactarnos! Pronto te responderemos.");
  this.reset();
});