const canvas = document.getElementById('animated-bg');
const ctx = canvas.getContext('2d');

// Ajusta o canvas para a tela inteira
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100; // partículas começam um pouco abaixo da tela
    this.size = Math.random() * 4 + 1; // tamanho entre 1 e 5
    this.speedY = Math.random() * -3 - 1; // velocidade vertical para cima (-1 a -4)
    this.color = `rgba(0, 150, 255, ${Math.random()})`; // cor azul translúcida
  }

  update() {
    this.y += this.speedY;
    if (this.y < 0) { // reseta a posição para baixo quando sai da tela
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles(count) {
  particles.length = 0; // limpa o array antes de criar partículas novas
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  // Fundo preto com transparência para efeito "rastro"
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

// Inicializa e começa a animação
initParticles(100);
animate();

// Ajusta o tamanho do canvas quando a janela muda de tamanho
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles(100); // reinicia as partículas para preencher corretamente
});

// Áudio: toca ao primeiro clique na página
const audio = document.getElementById('audio');
document.body.addEventListener('click', () => {
  audio.play();
}, { once: true });

// OBS: createSnowflake não está definido, então essa linha dá erro, retire ou defina a função
// setInterval(createSnowflake, 150);

document.addEventListener('DOMContentLoaded', () => {
  const itens = document.querySelectorAll('.painel-item');

  itens.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
      item.style.transition = 'all 0.6s ease';
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }, index * 150); // delay em cascata
  });
});

document.querySelectorAll('.painel-item.discord, .painel-item.tiktok').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const icon = item.querySelector('i');
    icon.style.transition = 'transform 0.3s ease';
    icon.style.transform = 'scale(1.3)';
  });
  item.addEventListener('mouseleave', () => {
    const icon = item.querySelector('i');
    icon.style.transform = 'scale(1)';
  });
});
document.querySelectorAll('.painel-item.discord, .painel-item.tiktok, .painel-item.instagram').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const icon = item.querySelector('i');
    icon.style.transition = 'transform 0.3s ease';
    icon.style.transform = 'scale(1.3)';
  });
  item.addEventListener('mouseleave', () => {
    const icon = item.querySelector('i');
    icon.style.transform = 'scale(1)';
  });
});
