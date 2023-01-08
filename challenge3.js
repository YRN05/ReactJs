// Merubah susunan aray 

// try and eror
let data=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function proses(data){
    console.table(data);
    let reverse = data.reverse();
    console.table(reverse);
    for(let i = 0; i < data.length; i++){
        reverse[i].reverse();
    }
    return reverse;
}

console.table(proses(data));