// fungsi memproses
function counting(nama, nilaiUts, nilaiUas, nilaiHarian){
    console.log("Nama saya ", nama);
    let hasil = 0.3*nilaiUts + 0.2 * nilaiUas + 0.5 * nilaiHarian;
    if(hasil > 90){
        console.log("Grade A");
    }
    else if (hasil >= 80){
        console.log("Grade B");
    }

    else if (hasil = 70){
        console.log("Grade C");
    }

    else{
        console.log("Grade D");
    }
}

// input
console.log("Program Grade Nilai");


let data = {
    nama: "Raka",
    nilaiUts: 90,
    nilaiUas: 90,
    nilaiHarian: 90
};

counting(data.nama, data.nilaiUts, data.nilaiUas, data.nilaiHarian);