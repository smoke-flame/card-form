
function checkCard(cardCode, item) {
    const cardInfo = new CardInfo(cardCode, {
        banksLogosPath: '/node_modules/card-info/dist/banks-logos/',
        brandsLogosPath: '/node_modules/card-info/dist/brands-logos/',
    });
    if(!cardInfo.brandName) {   
        let mes = 'You entered an incorrect card number, please try to do it again'
        showError(mes);  
    } else {
        renderNumber(cardInfo.number, item)
        cardImg.src = `.${cardInfo.brandLogo}`;
        cardType.textContent = `${cardInfo.brandName} card`;
    }
    
     
}


function renderNumber(stringNumber, item) {
    let array = stringNumber.split('');
        let firstFourNumbers = [],
            secondFourNumbers = [],
            trirdFourNumbers = [],
            fourthFourNumbers = [];
            lastNumbers =[];
        array.forEach( (item, index) => {       
            if(index < 4) {
                firstFourNumbers.push(item);
            } else if( index >= 4 && index < 8) {
                secondFourNumbers.push(item);
            } else if(index >= 8 && index < 12) {
                trirdFourNumbers.push(item);
            } else if(index >= 12 && index < 16) {
                fourthFourNumbers.push(item);
            } else {
                lastNumbers.push(item);
            }
        })
        if( checkCardCode(firstFourNumbers, secondFourNumbers, trirdFourNumbers, fourthFourNumbers) ) {
            let mes = 'You entered an incorrect card number, please try to do it again'
            showError(mes);
            item.classList.add('incorrect')
            return;
        } else {
            let number = [firstFourNumbers, secondFourNumbers, trirdFourNumbers, fourthFourNumbers, lastNumbers];
            numberToHtml(number) 
            item.classList.remove('incorrect')
        }
        
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

function checkCardCode(arr1, arr2, arr3, arr4) {
    if (arr1.join('') == arr2.join('') || arr2.join('') == arr3.join('')
    || arr3.join('') == arr4.join('') || arr2.join('') == arr4.join('') || arr1.join('') == arr4.join('')) {
        return true
    } else {
        return false
    }
}


