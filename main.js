let haveMatrix = [
    [9, 3, 0],
    [9, 0, 5],
    [8, 1, 5],
    [7, 0, 5],
];
for (let i = 0; i < haveMatrix.length; i++) {
    for (let j = 0; j < haveMatrix[i].length; j++) {
        if (haveMatrix[i][j] == 0) {
            haveMatrix.splice(i, 1);
        };
    };
};
console.log(haveMatrix);

// lesson1
// function getMonogramma (haveWord1, haveWord2) {
//     let arrayWord1 = haveWord1.split('');
//     let arrayWord2 = haveWord2.split('');
//     let index = 0;
   
//     if (arrayWord1.length == arrayWord2.length) {
//         for (let i = 0; i < arrayWord1.length; i++) {
//             for(let j = 0; j < arrayWord2.length; j++) {


//                 if (arrayWord1[i] == arrayWord2[j]) {
                   
//                     index++
//                     if (index == arrayWord1.length) {
//                         console.log('анограмма - true')
//                     };

//                 } ;
//             };
//         };
//     };
// }




// lesson 3
// let num  = 12266669

// function getNum (number) {
//     let mass = (`` + number).split(``);
//     console.log(mass);

//     for (let i = 0; i < mass.length; i++) {
//         // console.log(mass[i])
//         let index = 0;

//         for (let j = 0; j < mass.length; j++) {
//             if (mass[i] != mass[j]) {
//                 continue
              
//             }
//             else index++
//            // mass[i] == mass[j] ? index++  : continue
//         }
//         console.log(`${i} - ${index}`)
//     }

// }


// lesson 4
// let offers = 'бегу стою учусь несу стою стою стою';
// let words = 'стою'
// let index = 0

// function getWord (offer, word) {
//     let massOffer = offer.split(' ');
//     for (let i = 0; i < massOffer.length; i++) {
//         if (word == massOffer[i] ) {
//             ++index
//         }
//     }
//     console.log(index)
// }

// lesson5

// let offers = 'бегу стою учусь несу стою стою стою';
// let index = 0

// function getWord (offer) {
//     let massOffer = offer.split(' ');
//     for (let i = 0; i < massOffer.length; i++) {
//         let index = 0
//         for(let j = 0; j < massOffer.length; j++) {
//             if(massOffer[i] != massOffer[j]) {
//                 continue
//             } else ++index
//         }
//         console.log(`${i} - ${index}`)

       
//     }
//     //console.log(massOffer)
// }

// getWord(offers)









