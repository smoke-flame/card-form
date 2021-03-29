const submitBtn = document.getElementById('submit');
const fillBtn = document.getElementById('fill');
const arrayInputs = document.querySelectorAll('.form__input');
const errorField = document.querySelector('.form__error');

const defaultInfo = {
    name: 'Jhon Smith',
    cardNumber: 5169147129584558,
    cardType: 'Default card',
    date: '12/24',
    month: 12,
    year: 24
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkCard(numberInput.value, numberInput)  
    let isFilled = true;
    arrayInputs.forEach( item => {
        item.classList.contains('incorrect') ? isFilled = false : false; 
    })
    if(dateInput.value && nameInput.value && numberInput.value && isFilled) {
        console.log('all is ok');
        // can send to server
    } else {
        let message = 'You left some field blank or incorrect. Fill in the field and resubmit';
        showError(message);
    }
})


fillBtn.addEventListener('click', e => {
    e.preventDefault();
    nameInput.value = defaultInfo.name;
    dateInput.value = defaultInfo.date;
    numberInput.value = defaultInfo.cardNumber;

    renderNumber(String(defaultInfo.cardNumber), numberInput);
    cardName.textContent = defaultInfo.name;
    cardMonth.textContent = defaultInfo.month;
    cardYear.textContent = defaultInfo.year;
    cardType.textContent = defaultInfo.cardType;

    arrayInputs.forEach( item => {
        item.classList.remove('incorrect'); 
    })
})