let chessBoard2 = [
  [0, 0, 0, 0, 0, 0, 0, 10],
  [0, 0, 0, 0, 0, 0, 0, 11],
  [0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 0, 0, 0, 0, 0, 7],
];
let chessBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

//function createFerz(array, indexArray, indexNumber, isFlag) {
//  //let zeroArray = [0, 0, 0, 0, 0, 0, 0, 0];
//  indexArray = indexArray | 0;
//  indexNumber = indexNumber | 0;
//  isFlag = isFlag | false;
//  for (let i = indexArray; i < array.length; i++) {
//    for (let j = indexNumber; j < array[i].length; j++) {
//      if (isFlag) {
//        if (array[i][j] === 1) {
//          console.log(array[i]);
//          console.log(i, j);
//          console.log(array[i][j]);
//          array[i][j] = 0;
//          console.log(array[i]);
//          isFlag = false;
//          continue;
//        }
//      } else {
//        if (
//          watchVerticle(i, j, array) &&
//          watchRightBottomDiagonal(i, j, array) &&
//          watchLeftBottomDiagonal(i, j, array) &&
//          watchRightTopDiagonal(i, j, array) &&
//          watchLeftTopDiagonal(i, j, array)
//        ) {
//          array[i][j] = 1;
//          console.log(array[i]);
//          console.log(i, j);
//          break;
//        } else {
//          if (j === array[i].length - 1) {
//            isFlag = true;
//            j = 0;
//            i--;
//            return createFerz(array, i, j, isFlag);
//          }
//        }
//      }
//    }
//  }
//  return array;
//}

function createFerz(array, indexArray, indexNumber, isFlag) {
  indexArray = indexArray | 0;
  indexNumber = indexNumber | 0;
  isFlag = isFlag | false;
  for (let i = indexArray; i < array.length; i++) {
    for (let j = indexNumber; j < array[i].length; j++) {
      if (isFlag) {
        //console.log(array[i][j]);
        if (array[i][j] === 1) {
          if (j === array[i].length - 1) {
            array[i][j] = 0;
            j = 0;
            i--;
            return createFerz(array, i, j, isFlag);
          } else {
            if (array[i][j] === 1) {
              array[i][j] = 0;
              isFlag = false;
              continue;
            }
          }
          //console.log(array[i]);
        }

        //break;
      } else {
        if (
          watchVerticle(i, j, array) &&
          watchRightBottomDiagonal(i, j, array) &&
          watchLeftBottomDiagonal(i, j, array) &&
          watchRightTopDiagonal(i, j, array) &&
          watchLeftTopDiagonal(i, j, array)
        ) {
          array[i][j] = 1;
          break;
        } else {
          if (j === array[i].length - 1) {
            isFlag = true;
            j = 0;
            i--;
            return createFerz(array, i, j, isFlag);
          }
        }
      }
    }
  }
  return array;
}

function watchVerticle(indexArr, indexNum, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][indexNum] === 1) {
      return false;
    }
    if (i === array.length - 1 && array[i][indexNum] !== 1) {
      return true;
    }
  }
}

function watchRightBottomDiagonal(indexArr, indexNum, array) {
  if (array[indexArr][indexNum] !== 1) {
    if (array[++indexArr] && ++indexNum < 8) {
      //console.log(array[indexArr], indexNum);
      return watchRightBottomDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}
function watchLeftBottomDiagonal(indexArr, indexNum, array) {
  if (array[indexArr][indexNum] !== 1) {
    if (array[++indexArr] && --indexNum > -1) {
      //console.log(array[indexArr], indexNum);
      return watchLeftBottomDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}

function watchRightTopDiagonal(indexArr, indexNum, array) {
  if (array[indexArr][indexNum] !== 1) {
    if (array[--indexArr] && ++indexNum < 8) {
      //console.log(array[indexArr], indexNum);
      return watchRightTopDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}

function watchLeftTopDiagonal(indexArr, indexNum, array) {
  if (array[indexArr][indexNum] !== 1) {
    if (array[--indexArr] && --indexNum > -1) {
      //console.log(array[indexArr], indexNum);
      return watchLeftTopDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}
