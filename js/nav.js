// Cargar la barra de navegación
fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    // Añade el evento para el botón de menú hamburguesa
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.nav-list');

    menuBtn.addEventListener('click', function () {
      // Cambia entre mostrar y ocultar el menú
      navList.classList.toggle('active');
    });

    // Una vez cargada la navbar, selecciona la URL actual y resalta el enlace activo
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
      // Si el enlace coincide con la URL actual, añade la clase 'active'
      if (link.href === currentLocation) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
