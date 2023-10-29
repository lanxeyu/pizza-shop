// Function to update the button text based on viewport width
function updateButtonText() {
    const button = document.querySelector('.add-pizza-btn');

    if (button) {
        if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
            button.textContent = '+';
        } else {
            button.textContent = 'Add Pizza';
        }
    }
}

// Call the function on page load and when the window is resized
window.addEventListener('load', updateButtonText);
window.addEventListener('resize', updateButtonText);

// Immediately call the function on page load
document.addEventListener('DOMContentLoaded', updateButtonText);
