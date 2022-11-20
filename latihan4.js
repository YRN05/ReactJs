const dataDiri = {
    firstName: "Yohanes",
    lastName: "Nugroho",
    kelas: "XI IPA 4",
    umur: 17
}

let perkenalan = `Perkenalkan nama saya ${dataDiri?.firstName} ${dataDiri?.lastName} saya kelas ${dataDiri?.kelas} saya berusia ${dataDiri?.umur}`;

console.log(perkenalan);

const newDataDiri = {...dataDiri}
// dataDiri.kelas = "Kelas 11";
newDataDiri.kelas = "Kelas 11";
console.log({dataDiri});
console.log({newDataDiri});