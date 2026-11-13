// ===== SISTEMA DE PESTAÑAS =====
document.addEventListener('DOMContentLoaded', function () {
  const botones = document.querySelectorAll('.tab-btn');
  const contenidos = document.querySelectorAll('.tab-content');

  botones.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // 1. Quitar la clase "active" y el "aria-selected" de TODOS los botones
      botones.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      
      // 2. Ocultar TODOS los contenidos
      contenidos.forEach(function (c) {
        c.classList.remove('active');
      });

      // 3. Activar el botón que se presionó
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      // 4. Buscar el ID del contenido y mostrarlo
      const destinoId = btn.getAttribute('data-tab');
      const destino = document.getElementById(destinoId);
      
      if (destino) {
        destino.classList.add('active');
      } else {
        console.error("No se encontró el contenido para la pestaña:", destinoId);
      }
    });
  });
});

// ===== BOTONES "VER MÁS" Y "VER ACCIONES" =====
function toggleDetalle(boton) {
  const detalles = boton.nextElementSibling;
  if (!detalles) return;
  
  const estaAbierto = detalles.classList.toggle('abierto');
  
  // Cambiar el texto del botón dependiendo del estado
  if (boton.textContent.trim() === 'Ver acciones') {
    boton.textContent = estaAbierto ? 'Ocultar acciones' : 'Ver acciones';
  } else {
    boton.textContent = estaAbierto ? 'Ver menos' : 'Ver más';
  }
}
// ===== FUNCIÓN PARA ABRIR Y CERRAR IMÁGENES =====
function abrirModal(rutaImagen) {
  const modal = document.getElementById("miModal");
  const imgModal = document.getElementById("imgModal");
  modal.style.display = "block";
  imgModal.src = rutaImagen;
}

function cerrarModal() {
  document.getElementById("miModal").style.display = "none";
}

// Cerrar la ventana si se hace clic afuera de la imagen
window.addEventListener('click', function(event) {
  const modal = document.getElementById("miModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
