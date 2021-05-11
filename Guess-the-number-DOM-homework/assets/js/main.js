let secret = Math.random();
secret = Math.floor(secret*100)+1;

let counter=10;

function calc(){

    let number = document.querySelector("numberInput");
    number = +numberInput.value

    if (number==secret){
        conclusion=("Вы угадали");
    } 
    
    else if(number>secret) {
        conclusion=(`Ваше число ${number} и оно больше моего`);
        counter--;
    } 
    
    else {
        conclusion=(`Ваше число ${number} и оно меньше моего`);
        counter--;
    }

    if (counter==0){
        conclusion=(`Вы проиграли. Правильный ответ ${secret}`)
    }

    counterPlace.innerHTML=counter;

    conclusionPlace.innerHTML=conclusion;
}

