const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    clearActiveCard();
    card.classList.add('active');
  })
})
function clearActiveCard() {
  cards.forEach((item) => {
    item.classList.remove('active');
  })
}
