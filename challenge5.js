// Input berupa string
// Input di split untuk jadikan aray lalu memakai join untuk menyatukan tiap huruf
// Untuk mereverse di split dahulu

let input = "Halo cok";
let banding = input.split(' ').join('').toLowerCase();
let bandingTerbalik = banding.split("").reverse().join("");

if(banding == bandingTerbalik){
    console.log("Makna sama");
}
else{
    console.log("Makna tidak sama");
}