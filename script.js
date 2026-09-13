document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.system-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -2;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-7px)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
