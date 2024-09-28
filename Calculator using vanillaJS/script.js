    // Get the display input and all the buttons
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    // Initialize variables to store the current input and expression
    let currentInput = '';
    let expression = '';

    // Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            // Handle different button functionalities
            if (value === 'AC') {
                // Clear all input and expression
                currentInput = '';
                expression = '';
                display.value = '';
            } else if (value === 'DEL') {
                // Delete the last character
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            } else if (value === '=') {
                // Evaluate the expression and update the display
                try {
                    // Replace 'X' with '*' for multiplication
                    expression = currentInput.replace(/X/g, '*');
                    // Use eval to calculate the result
                    let result = eval(expression);
                    // Check if result is a decimal number and limit to 2 decimal places
                    result = result.toFixed(2).replace(/\.?0+$/, '');
                    display.value = result;
                    currentInput = result;
                } catch (error) {
                    display.value = 'Error';
                    currentInput = '';
                }
            } else {
                // For all other buttons (numbers, operators), update the current input
                currentInput += value;
                display.value = currentInput;
            }
        });
    });