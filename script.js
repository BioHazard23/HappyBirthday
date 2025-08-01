document.getElementById('playMusic').addEventListener('click', function () {
    const audio = document.getElementById('birthdaySong');
    audio.volume = 0.3; // Volumen al 30%
    audio.currentTime = 0; // Reiniciar la canción al inicio
    audio.play();
    this.disabled = true;
    this.innerHTML = "<span class='music-icon animate'>🎶</span> Reproduciendo...";
  });

// CONFETI ANIMADO.
const confettiContainer = document.getElementById("confetti-container");

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.animationDuration = `${8 + Math.random() * 4}s`; // Más lento
  confetti.style.opacity = Math.random();
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 12000);
}
setInterval(createConfetti, 300);
