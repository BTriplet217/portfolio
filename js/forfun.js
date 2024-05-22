// Optionally, add JavaScript for additional interactivity (e.g., opening a modal on click)
document.querySelectorAll('.img-card img').forEach(item => {
    item.addEventListener('click', () => {
        // For simplicity, this example just increases the scale further on click
        item.style.transform = 'scale(1.2) rotateY(20deg)';
    });
});
