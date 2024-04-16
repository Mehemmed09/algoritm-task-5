// let eded = 345

// function ededreqemleri(eded) {
//     let reqemler = []
//     for (let i = 10; eded > 0; eded = (eded / 10) | 0) {
//         reqemler.push(eded % 10)
//     }
//     return reqemler
// }

// function cemitap(eded) {
//     let reqemler = ededreqemleri(eded)
//     let cem = 0
//     for (let i = 0; i < reqemler.length; i++) {
//         cem += reqemler[i]
//     }
//     return cem
// }

// function hasiltap(eded) {
//     let reqemler = ededreqemleri(eded)
//     let hasil = 1
//     for (let i = 0; i < reqemler.length; i++) {
//         hasil *= reqemler[i]
//     }
//     return hasil
// }

// console.log("Ədədin rəqəmlərinin cəmi:", cemitap(eded));
// console.log("Ədədin rəqəmlərinin hasilı:", hasiltap(eded));

// LOOPS 1





// let eded = 45;
// butunbolenleri(eded);
// function butunbolenleri(eded) {
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             console.log(i);
//         }
//     }
// }

// LOOP2



let eded = 560;
let bolenlerin_sayi = bolenlerininsayi(eded);
function bolenlerininsayi(eded) {
    let bolenlerinsayi2 = 0;
    for (let i = 1; i <= eded; i++) {
        if (eded % i === 0) {
            bolenlerinsayi2++;
        }
    }
    return bolenlerinsayi2;
}

console.log(` ədədin bölənlərinin sayı: ${bolenlerin_sayi}`);


// LOOP3



for (let i = 0; i <= 10; i++) {
    let result = i * i;
    console.log(result);
}

// LOOP4

for (let i = 0; i <= 10; i++) {
    let result = i * i *i;
    console.log(result);
}
// LOOP5

let tekcem = 0;
let cutcem = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        cutcem += i; 
    } else {
        tekcem += i; 
    }
}

console.log( tekcem);
console.log( cutcem);


// LOOP7




// ARRAYS

