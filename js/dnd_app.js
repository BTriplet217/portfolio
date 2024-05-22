document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    // Retrieve the current theme from localStorage or default to 'light'
    let currentTheme = localStorage.getItem('theme') || 'light';

    const applyTheme = (theme) => {
        // Update the body class based on the theme
        document.body.className = theme === 'dark' ? 'dark-mode' : '';
        // Save the current theme to localStorage
        localStorage.setItem('theme', theme);
    };

    themeToggleButton.addEventListener('click', () => {
        // Toggle the theme
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
    });

    // Initialize with the saved or default theme
    applyTheme(currentTheme);
});

document.getElementById('character-sheet-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Retrieve form data
    const characterName = document.getElementById('character-name').value;
    
    // Additional logic to handle other form fields

    // Save the character data (Here, using localStorage as an example)
    localStorage.setItem('characterData', JSON.stringify({ name: characterName }));
    
    // Display success message or handle the saved data
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    let currentTheme = localStorage.getItem('theme') || 'light';

    const applyTheme = (theme) => {
        document.body.className = theme === 'dark' ? 'dark-mode' : '';
        localStorage.setItem('theme', theme);
        moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
        sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
    };

    themeToggleButton.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        currentTheme = newTheme;
    });

    applyTheme(currentTheme); // Initialize with saved theme
});

// Dice Roller
function rollDice(diceType) {
    let diceCount = document.getElementById(`d${diceType}-count`).value;
    diceCount = diceCount ? parseInt(diceCount) : 0;

    let rollResult = 0;
    for (let i = 0; i < diceCount; i++) {
        rollResult += Math.floor(Math.random() * diceType) + 1;
    }

    let minRoll = diceCount; // Minimum possible roll
    let maxRoll = diceCount * diceType; // Maximum possible roll

    document.getElementById('dice-results').innerText = 
        `You rolled ${rollResult} on D${diceType} (Min: ${minRoll}, Max: ${maxRoll})`;
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Function to toggle button visibility based on scroll position
function toggleBackToTopButton() {
    if (window.scrollY > 500) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', toggleBackToTopButton);

