function proses(input) {
  let hasil = 1;
  for (let i = input; i >= 1; i--) {
    hasil = hasil * i;
  }
  console.log(hasil);
}

console.log("Program bilangan faktorial");
proses(5);
