//your code here
const input = document.getElementById('input');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clr') {
            input.value = '';
        } else if (button.id === 'ans') {
            try {
                input.value = eval(input.value);
                if (input.value === Infinity) {
                    input.value = 'Infinity';
                } else if (isNaN(input.value)) {
                    input.value = 'NaN';
                }
            } catch (error) {
                input.value = 'Error';
            }
        } else {
            input.value += button.textContent;
        }
    });
});