// Get the display element
const display = document.querySelector('input[name="display"]');

// Function to update the display value
function updateDisplay(value) {
    display.value += value;
}

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type="button"]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const value = button.value;

            switch (value) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DEL':
                    deleteLastCharacter();
                    break;
                case '=':
                    calculate();
                    break;
                default:
                    updateDisplay(value);
                    break;
            }
        });
    });
});
