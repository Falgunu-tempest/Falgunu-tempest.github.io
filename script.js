function showMessage() {
  const message = document.getElementById('message');
  message.innerText = "ini cuman contoh loh yah, by fadly :v";
  
  // Tampilkan confetti
  const confetti = document.getElementById('confetti');
  confetti.style.display = 'block';
  
  // Sembunyikan confetti setelah beberapa detik
  setTimeout(() => {
    confetti.style.display = 'none';
  }, 5000);
}
