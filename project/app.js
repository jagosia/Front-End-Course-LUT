
const showMoreBtn = document.getElementById('showMoreBtn');
const extraCards = document.querySelectorAll('.extra-card');

showMoreBtn.addEventListener('click', () => {
    extraCards.forEach(card => card.style.display = 'block');
    showMoreBtn.style.display = 'none';
});


document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const openItem = document.querySelector('.accordion-item.active');

        if (openItem && openItem !== item) {
            openItem.classList.remove('active');
        }

        item.classList.toggle('active');
    });
});