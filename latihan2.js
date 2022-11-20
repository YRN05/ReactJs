let hasil;
function proses(){
    for(let i = input; i > 1; i--){
        hasil = hasil * i;
    }
    console.log(hasil);
}
let input = 10;
console.log("Program bilangan faktorial");
proses();