function proses(){
    let hasil;
    for(input; input <= 1; input--){
        if(input > 1){
            hasil = input * input-1;
        }
        else{
            hasil = hasil * input;
        }
    }
    console.log(hasil);
}


let input = 5;
console.log("Bilangan faktorial dari ", input);
proses();