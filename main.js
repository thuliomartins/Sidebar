const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
});
