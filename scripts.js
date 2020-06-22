const modalOverlay = document.querySelector('.modal_overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener('click', () =>{
        cardId = card.getAttribute('id')
        cardName = card.querySelector('p.nome').innerHTML
        cardChef = card.querySelector('p.chef').innerHTML
        modalOverlay.querySelector('img').src = `assets/${cardId}.png`
        modalOverlay.querySelector('h1').innerHTML = cardName
        modalOverlay.querySelector('p').innerHTML = cardChef
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.modal_close').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
    modalOverlay.querySelector('h1').innerHTML = null
    modalOverlay.querySelector('p').innerHTML = null
})

