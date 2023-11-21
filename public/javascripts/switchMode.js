document.addEventListener('DOMContentLoaded', function () {
    const modeToggleBtn = document.getElementById('modeToggle');
    const stylesheet = document.getElementById('stylesheet');
    
    modeToggleBtn.addEventListener('click', function () {
        // Toggle between light and dark mode stylesheets
        if (stylesheet.href.includes('style.css')) {
            stylesheet.href = '/stylesheets/DarkMode.css';
        } else {
            stylesheet.href = '/stylesheets/style.css';
        }

        // Save user's preference to local storage
        localStorage.setItem('darkMode', stylesheet.href.includes('DarkMode.css'));
    });

    // Check for user's preference in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        // Set the dark mode stylesheet initially
        stylesheet.href = '/stylesheets/DarkMode.css';
    }
});