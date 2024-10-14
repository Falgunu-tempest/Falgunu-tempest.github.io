function showMessage() {
  const message = document.getElementById('message');
  message.innerText = "Semoga cita-citamu tercapai! 🎂";
  
  // Tampilkan confetti
  const confetti = document.getElementById('confetti');
  confetti.style.display = 'block';
  
  // Sembunyikan confetti setelah beberapa detik
  setTimeout(() => {
    confetti.style.display = 'none';
  }, 5000);
}