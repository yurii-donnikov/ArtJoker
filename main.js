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
       
//          console.log(`${massOffer[i]} - ${index}`)

       
//     }
//     //console.log(massOffer)
    
// }
// getWord(offers)





// lesson9
// let haveArray = [-2, 4, 0, -6, 9];


// function getSumElementsArray (array) {
//     let generalSum = 0;
//     let SumEqualTwo = 0;
//     let SumEqualThree = 0;
//     let positiveNumber = 0;


//     array.forEach(element => 
//         generalSum += element
//         ) 
//     // console.log(generalSum)

//     array.forEach(element => {

//         if (element % 2 == 0) {
//             SumEqualTwo += element

//             // console.log(element)
//         }
         
        
//     } ) 
//     array.forEach(element => {

//         if (element % 3 == 0) {
//             SumEqualThree += element
//             // console.log(element)
//         }
         
        
//     } ) 
//     array.forEach(element => {

//         if (element > 0) {
//             positiveNumber += element
//             // console.log(element)
//         }
         
        
//     } ) 
   

//     return [positiveNumber, SumEqualThree, SumEqualTwo, generalSum] 
// }


// getSumElementsArray(haveArray)


// lesson10

//  let haveArray = [ 3, 7, 6, 9];

// function getNumberElementsArray (array) {
//     let numberZeroElem = 0;
//     let numberNegativeElem = 0;
//     let numberPositiveNumber = 0;
//     let positiveNumber = 0;
    


//     array.forEach(element => {
//         if(element == 0) {
//             numberZeroElem++
//         }

//     }
        
     
//     )
//     // console.log(generalSum)

//     array.forEach(element => {

//         if (element < 0) {
//             numberNegativeElem++
//             // console.log(element)
//         }
         
        
//     } ) 
//     array.forEach(element => {

//         if (element > 0) {
//             numberPositiveNumber++
//             // console.log(element)
//         }
         
        
//     } ) 
   



   
   

//   return [numberZeroElem, numberNegativeElem, numberPositiveNumber]
// }

// getNumberElementsArray(haveArray)

// // простые элементы в массиве https://question-it.com/questions/720310/pytajas-najti-prostye-chisla-v-massive

// let array = [4, 6, 8, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

// function isPrime(num) {
//     if (num > 2 && num % 2 == 0)
//         return false;
//     return num > 1;
// }

// console.log(array.filter(isPrime));  



// lesson 13

// let haveArray = [23, -100 ,3, 5, 6, 6];


// function getSumElem (array) {
//     let sumElem = 0;
//     array.forEach(i => {
//         sumElem += i;
//     });
//     return sumElem
// }

// function countSumDividentThree (array) {
//     let sumElem = 0;
//     array.forEach(i => {
//         if (i % 3 == 0) {
//             sumElem += i
//         }
//     });
//     return sumElem
// }

// function countSumPositiveNum (array) {
//     let sumElem = 0;
//     array.forEach(i => {
//         if (i > 0) {
//             sumElem += i
//         }
//     });
//     return sumElem
// }






// lesson 14

let haveArray = [2, 2, 3, 4, 5];

function countAvergeElem (array) {
    let sumChetElem = 0;
    let numberChetElem = 0;

    let sumNechetElem = 0;
    let numberNechetElem = 0;

    array.forEach(i => {
        if (i % 2 == 0) {
            
            sumChetElem += i
            numberChetElem++ 
        }
        else {
            sumNechetElem += i
            numberNechetElem++
        }
        
    });
    console.log ([(sumChetElem / numberChetElem), (sumNechetElem / numberNechetElem)])
} 




let haveDobleArray = [[1, 2], [3, 4], [6]];

function AvergeElemDobleArr (array) {
    let sumElem = 0;
    array.forEach(i => {

        console.log(i.length)
        // i.forEach(j => {
        //     console.log(j)
        // })
        
    });
    
} 
AvergeElemDobleArr(haveDobleArray)
