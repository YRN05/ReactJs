function coba(){
    let result = biodata.map((bio)=>
        "Saya " + bio.namaDepan + " " + bio.namaTengah + " " + bio.namaBelakang 
    )
    return result;
}

let biodata = [
    {
        namaDepan: "Yohanes",
        namaTengah: "Raka",
        namaBelakang: "Nugroho",
        kelas: "XI IPA 4"
    },
    {
        namaDepan: "Bimo",
        namaTengah: "Danang",
        namaBelakang: "Edy",
        kelas: "XI IPA 5"
    },
    {
        namaDepan: "Ino",
        namaTengah: "Gilang",
        namaBelakang: "Farhan",
        kelas: "XI IPA 3"
    },
    {
        namaDepan: "Alice",
        namaTengah: "Zefa",
        namaBelakang: "Driyan",
        kelas: "XI IPA 2"
    }
]
console.log(coba())