// Membalikkan suatu angka
// clue: ubah ke string memakai to string -> lalu memakai split (string kosong) -> memakai reverse -> memakai join -> pakai parsint 
let input = -100;

function proses(input){
    let negatif;
    let hasil;
    if(input < 0){
        negatif = "-";
        input *= -1
        hasil = parseInt(negatif+input?.toString().split("").reverse().join(""));
    }
    else{
        hasil = parseInt(input?.toString().split("").reverse().join(""));
    }
    return hasil;
}
console.log(proses(input));