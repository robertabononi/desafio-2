const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) (
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active');
    })
)

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
})

const modalContent = document.querySelector('.modal-content');

document.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modalContent.classList.contains('active')) {
        modalContent.classList.remove('active');
    } else {
        modalContent.classList.add('active');
    }
})