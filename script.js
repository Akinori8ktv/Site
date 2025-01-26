const button = document.getElementById('Error');

button.addEventListener('mouseenter', () => {
  // Pega a largura e altura da tela
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  // Gera posições aleatórias dentro da tela, garantindo que o botão não saia da área visível
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Move o botão para a nova posição
  button.style.position = 'absolute'; // Garante que o botão seja movido corretamente
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
});
