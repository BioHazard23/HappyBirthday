const playBtn = document.getElementById("playMusic");
const audio = document.getElementById("birthdaySong");

// Asegurar que ambos elementos existen antes de interactuar
if (playBtn && audio) {
  // Establecer volumen al 30%
  audio.volume = 0.3;

  // Botón de reproducción
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.querySelector(".music-icon").classList.add("animate");
    } else {
      audio.pause();
      playBtn.querySelector(".music-icon").classList.remove("animate");
    }
  });
}

// ============================
// CONFETI ANIMADO
// ============================

const confettiContainer = document.getElementById("confetti-container");

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.animationDuration = `${6 + Math.random() * 4}s`; // más lento
  confetti.style.opacity = Math.random();
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  confetti.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 10000);
}

setInterval(createConfetti, 300);
