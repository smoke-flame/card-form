function sendRequest(url, item) {
    fetch(url)
        .then( response => {
            return response.json();
        }).then(data => {
            console.log(data);
            switch(data.scheme) {
                case 'visa':
                    cardImg.src = './assets/img/visa.png';
                    break;
                case 'mastercard':
                    cardImg.src = './assets/img/mastercard.png';
                    break;
            } 
            bankName.textContent = data.bank.name;
        
        }).catch( error => {
            let mes = 'You entered an incorrect card number, please try to do it again'
            showError(mes)
            item.classList.add('incorrect');
        });
}

function renderNumber(stringNumber) {
    let array = stringNumber.split('');
        let firstFourNumbers = [],
            secondFourNumbers = [],
            trirdFourNumbers = [],
            fourthFourNumbers = [];
        array.forEach( (item, index) => {       
            if(index < 4) {
                firstFourNumbers.push(item);
            } else if( index >= 4 && index < 8) {
                secondFourNumbers.push(item);
            } else if(index >= 8 && index < 12) {
                trirdFourNumbers.push(item);
            } else if(index >= 12 && index < 16) {
                fourthFourNumbers.push(item);
            }
        })
        let number = [firstFourNumbers, secondFourNumbers, trirdFourNumbers, fourthFourNumbers];
        numberToHtml(number) 
}

function numberToHtml(array) {
    let htmlNumber ='';

    array.forEach( item => {
            htmlNumber += `<span class="four-numbers">${item.join('')}&nbsp;</span>`
        });
       
        cardNumber.innerHTML = htmlNumber;
}

function showError(errorMessage) {
    errorField.classList.add('active');
        setTimeout( ()=>{
            errorField.classList.remove('active');
        }, 4000)
        errorField.textContent = errorMessage;
}

function compareDates(month, year) {
    if(currentYear > year || currentYear == year && currentMonth > month) {
        let mes = 'You entered wrong date';
        showError(mes);
    } else {
        return true;
    }
    
}