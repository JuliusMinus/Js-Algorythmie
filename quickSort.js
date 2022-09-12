function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];

  let arrLeft = [];
  let arrRight = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
  }

  if (arrLeft.length > 0 && arrRight.length > 0) {
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
  } else if (arrLeft.length > 0) {
    console.log(arrLeft);
    return [...quickSort(arrLeft), pivot];
  } else {
    console.log(arrRight);
    return [pivot, ...quickSort(arrRight)];
  }
}

quickSort([451, 3, 8, 96, 26, 5, 32, 8, 211, 137, 77]);
