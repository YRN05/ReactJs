// program plat nomor
function proses(plat, tanggal){
    let hasil = parseInt(plat.substr(2, 4));
    if(hasil % 2 === 0){
        console.log("Plat anda genap");
        console.log("Sekarang tanggal "+ tanggal);
        if(tanggal % 2 === 0){
            console.log("Anda boleh jalan");
        }
        else{
            console.log("Anda tidak boleh jalan");
        }
    }
    else{
        console.log("Plat anda ganjil");
        console.log("Sekarang tanggal "+ tanggal);
        if(tanggal % 2 === 1){
            console.log("Anda boleh jalan");
        }
        else{
            console.log("Anda tidak boleh jalan");
        }
    }
}

// input
console.log("Program Ganjil Genap");

let data = {
    plat: "B 1454 AB",
    tanggal: 17
};
proses(data.plat, data.tanggal);