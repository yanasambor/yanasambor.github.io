let creditSum = 100000;

let yearsRate = 100;

let creditTerm = 12;

let monthRate = yearsRate/12/100;

let debt = creditSum;

let monthPay =0;

let monthPercents =0;

let bodyPart = 0;
let percensSumm = 0;

    for (let i=1; i<=creditTerm; i++){

        if (i==creditTerm){
            monthPay=debt
        } 
        monthPay =(creditSum *monthRate) / (1- (1+monthRate)**-creditTerm);

        let percentPart = (debt*monthRate);

        percensSumm+=percentPart;

        bodyPart=monthPay-percentPart;

        debt-=bodyPart;
        creditSum=+creditSum.toFixed(2);

        console.log(`#${i} Погашение кредита ${bodyPart.toFixed(2)}
        Проценты по кредиту ${percentPart.toFixed(2)} =>
        Ежемесячный платеж ${monthPay.toFixed(2)} грн.
        Долг: ${debt.toFixed(2)})`);
    } 
    console.log(`Сумма кредита: ${creditSum} грн.`);
    console.log(`Сумма процентов за весь срок кредита: ${percensSumm.toFixed()} грн.`);

    let totalSum = creditSum+percensSumm;

    console.log(`Итого за весь срок кредита выплачено: ${totalSum.toFixed()} грн.`);



