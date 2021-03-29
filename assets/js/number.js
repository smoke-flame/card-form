
const numberInput = document.querySelector('.form__input--number');
const cardNumber = document.querySelector('.form__card__number');
const cardImg = document.querySelector('.form__card__info__type__img');
const cardType = document.querySelector('.form__card__card-type');



numberInput.addEventListener('input', event => {
    event.target.value = event.target.value.replace(/\D/, '');
});

numberInput.addEventListener('focusout', event => {
    let num = event.target.value.replace(/\s/g, '')   
    if(num.length > 12 && num.length < 20) {
        event.target.classList.remove('incorrect');
        checkCard(num, event.target)               
         
    } else {
        event.target.classList.add('incorrect');
    }
});
