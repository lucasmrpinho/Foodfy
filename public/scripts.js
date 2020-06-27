
const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener("click", () => {
        window.location.href = `/receitas/${i}`;
  });
}

document.querySelector('.modal_close').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
    modalOverlay.querySelector('h1').innerHTML = null
    modalOverlay.querySelector('p').innerHTML = null
})

