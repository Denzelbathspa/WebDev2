document.addEventListener('DOMContentLoaded', function() {
    // Get all the choice buttons
    const choices = document.querySelectorAll('.choice');

    choices.forEach(choice => {
        // Add a click event listener for each choice
        choice.addEventListener('click', function() {
            // Check if the selected answer is correct
            const isCorrect = this.getAttribute('data-correct') === 'true';

            // If correct, turn green; if wrong, turn red
            if (isCorrect) {
                this.style.backgroundColor = 'green';
            } else {
                this.style.backgroundColor = 'red';
            }

            // Disable all buttons for this question after selection
            const siblings = this.parentElement.querySelectorAll('.choice');
            siblings.forEach(sibling => {
                sibling.disabled = true; // Disable all buttons
                sibling.style.cursor = 'not-allowed'; // Change cursor style to indicate disabled
            });
        });
    });
});
