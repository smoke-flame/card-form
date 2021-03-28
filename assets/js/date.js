const dateInput = document.querySelector('.form__input--date');
const cardMonth = document.getElementById('month');
const cardYear = document.getElementById('year');

const currentYear = String(new Date().getFullYear()).substr(2, 4);
const currentMonth = String( new Date().getMonth() + 1);
console.log(currentMonth);

dateInput.addEventListener('focusout', event => {
    let string = event.target.value.replace(/\s/g, '');


    if(string.length < 5) {
        event.target.classList.add('incorrect');
    } else {
        let month = string.substr(0, 2);
        let year = string.substr(3, 5);

        if(!isNaN(+month) && !isNaN(+year) && compareDates(month, year)) {
            
            cardMonth.textContent = month;
            cardYear.textContent = year;
            event.target.classList.remove('incorrect');
        } else {
            event.target.classList.add('incorrect');
        }
    }
    
})