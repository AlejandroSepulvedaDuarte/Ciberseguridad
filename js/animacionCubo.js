const escudos = document.querySelectorAll('.slider img[src="assets/images/cubo.png"]');

setInterval(() => {
  escudos.forEach((img) => {
    img.style.animation = 'none'; // Detener la animación
    img.offsetHeight; // Forzar el reflow
    img.style.animation = ''; // Reiniciar la animación
  });
}, 10000); // Cada 10 segundos (5 segundos de animación + 5 segundos de espera)