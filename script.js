// ===== SISTEMA DE PESTAÑAS =====
document.addEventListener('DOMContentLoaded', function () {
  const botones = document.querySelectorAll('.tab-btn');
  const contenidos = document.querySelectorAll('.tab-content');

  botones.forEach(function (btn) {
    btn.addEventListener('click', function () {
      botones.forEach(function (b) { b.classList.remove('active'); });
      contenidos.forEach(function (c) { c.classList.remove('active'); });

      btn.classList.add('active');
      const destino = document.getElementById(btn.dataset.tab);
      if (destino) {
        destino.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
});

// ===== BOTONES "VER MÁS" =====
function toggleDetalle(boton) {
  const detalles = boton.nextElementSibling;
  if (!detalles) return;
  detalles.classList.toggle('abierto');
  boton.textContent = detalles.classList.contains('abierto') ? 'Ver menos' : 'Ver más';
}
