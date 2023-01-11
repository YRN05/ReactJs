// input
// function untuk penjumlahan, pengurangan, perkalian, pembagian, modulus terpisah
// 1. Penjumlahan
// 2. Pengurangan
// 3. Perkalian
// 4. Pembagian
// 5. Modulus
function penjumlahan(x, y){
    
    console.log(x + y);
}
function pengurangan(x, y){
    console.log(x-y);
}
function perkalian(x, y){
    console.log(x*y);
}
function pembagian(x, y){
    console.log(x/y);
}
function modulus(x, y){
    console.log(x%y);
}

let input = 1;
let x = 5;
let y = 7;

switch(input){
    case 1:
        penjumlahan(x, y);
        break;
    case 2:
        pengurangan(x, y);
        break;
    case 3:
        perkalian(x, y);
        break;
    case 4:
        pembagian(x, y);
        break;
    case 5:
        modulus(x, y);
        break;
    default:
        console.log("Input variable input salah");
        break;
}