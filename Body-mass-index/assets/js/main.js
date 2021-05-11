function imtResult(){

    let weight =+weightInput.value;
    let hight =+hightInput.value;

    let imt;

    if(hight>3){
        imt = weight/((hight/100)**2);
    } else {
        imt = weight/(hight**2)
    }

    imt= Math.round(imt*10)/10;
    imtPlace.innerHTML=imt;

    let finish;
    
    if (imt<=16) {
        finish=("Выраженный дефицит массы тела")
    }
    if (imt>=16.1 && imt<=18.5) {
        finish=("Недостаточная (дефицит) масса тела");
    }
    if (imt>=18.6 && imt<=25) {
        finish=("Норма");
    } 
    if (imt>=25.1 && imt<=30){
        finish=("Избыточная масса тела (предожирение)");
    }
    if (imt>=30.1 && imt<=35){
        finish=("Ожирение");
    }
    if (imt>=35.1 && imt<=40){
        finish=("Ожирение резкое");
    }
    if (imt>=40.1) {
        finish=("Очень резкое ожирение")
    }

    resultPlace.innerHTML=finish;

}

 


