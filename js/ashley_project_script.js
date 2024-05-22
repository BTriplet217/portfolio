document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const thumbnail = item.querySelector('.thumbnail');
        const modal = item.querySelector('.modal');
        const closeModal = modal.querySelector('.close-modal');

        thumbnail.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});
