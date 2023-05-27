const buttons = document.querySelectorAll('#counter button');
const value = document.querySelector('#value');
let counterValue = 0;
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.dataset.action === 'decrement') {
            counterValue--;
        }
        else {
            counterValue++;
        }
        value.innerHTML = counterValue;
    })
})