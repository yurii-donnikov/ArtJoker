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
    if (array[++indexArr] && ++indexNum < array.length) {
      return watchRightBottomDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}

function watchLeftBottomDiagonal(indexArr, indexNum, array) {
  if (array[indexArr][indexNum] !== 1) {
    if (array[++indexArr] && --indexNum > -1) {
      return watchLeftBottomDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}

function watchRightTopDiagonal(indexArr, indexNum, array) {
  if (array[indexArr][indexNum] !== 1) {
    if (array[--indexArr] && ++indexNum < array.length) {
      return watchRightTopDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}

function watchLeftTopDiagonal(indexArr, indexNum, array) {
  if (array[indexArr][indexNum] !== 1) {
    if (array[--indexArr] && --indexNum > -1) {
      return watchLeftTopDiagonal(indexArr, indexNum, array);
    }
    return true;
  }
  return false;
}

function createFerz(array, indexArray, indexNumber, isFlag) {
  indexArray = indexArray | 0;
  indexNumber = indexNumber | 0;
  isFlag = isFlag | false;
  for (let i = indexArray; i < array.length; i++) {
    for (let j = indexNumber; j < array[i].length; j++) {
      if (isFlag) {
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
        }
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

createFerz(chessBoard);
