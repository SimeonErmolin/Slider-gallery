const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    clearActiveCard();
    card.classList.toggle('active');
  })
})
function clearActiveCard() {
  cards.forEach((item) => {
    item.classList.toggle('active');
  })
}
