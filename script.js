const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) (
    card.addEventListener('click', function() {
        const postId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postId}/`;
    })
)

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalContent.classList.remove('active');
})

const modalContent = document.querySelector('.modal-content');

document.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modalContent.classList.contains('active')) {
        modalContent.classList.remove('active');
    } else {
        modalContent.classList.add('active');
    }
})