const nameInput = document.querySelector('.form__input--name');
const cardName = document.querySelector('.form__card__info__name');

nameInput.addEventListener('focusout', event => {
    if(event.target.value && event.target.value.length > 4) {
        cardName.textContent = event.target.value;
        event.target.classList.remove('incorrect');
    } else {
        event.target.classList.add('incorrect');
    }  
});