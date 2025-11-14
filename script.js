function appendCharacter(character) {
    document.getElementById('result').value += character;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('active');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('active');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('active');
    });
});