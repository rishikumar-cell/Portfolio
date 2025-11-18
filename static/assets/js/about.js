const aboutText = document.getElementById('aboutText');
const readMoreBtn = document.getElementById('readMoreBtn');

readMoreBtn.addEventListener('click', () => {
  aboutText.classList.toggle('open');
  
  if (aboutText.classList.contains('open')) {
    readMoreBtn.textContent = 'Read Less';
  } else {
    readMoreBtn.textContent = 'Read More';
  }
});
