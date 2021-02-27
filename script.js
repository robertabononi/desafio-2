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
const maximizeModal = document.querySelector('.maximize-modal');

maximizeModal.addEventListener('click', function() {
    modalContent.classList.add('active');
})