const numberInput = document.querySelector('.form__input--number');
const cardNumber = document.querySelector('.form__card__number');
const cardImg = document.querySelector('.form__card__info__type__img');
const bankName = document.querySelector('.form__card__bank-name');



numberInput.addEventListener('input', event => {
    event.target.value = event.target.value.replace(/\D/, '');
});

numberInput.addEventListener('focusout', event => {
    let num = event.target.value.replace(/\s/g, '')   
    if(num.length === 16 ) {
        
        let cardCode = num.substr(0, 8);
        let url = `https://lookup.binlist.net/${cardCode}`;
  
        sendRequest(url, event.target);
        renderNumber(num)
        event.target.classList.remove('incorrect'); 

    } else {
        event.target.classList.add('incorrect');
    }
});
