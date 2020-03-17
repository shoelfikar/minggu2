// for(let i = 0; i< 10; i++) {
//     console.log(i);
// }


// while
// let text = ''
// let i = 1;
// while(i < 10) {
//     text += "the number is " + i + "\n";
//     i++;
// }

// console.log(text);


let siswa = ['sul', 'fikar', 'ardi'];
let umur = [30, 20, 25, 28, 40];
siswa.forEach(function(e) {
    console.log(e);
});

siswa.map(function(e) {
    console.log(e);
});

let umurFilter = umur.filter((e)=> {
    return e < 30;
})
console.log(umurFilter);