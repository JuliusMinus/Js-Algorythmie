function selectionSort(array) {
  for (let i = 0; i < array.length -1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
        
       
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  console.log(array);
}

selectionSort([451, 3, 8, 96, 26, 5, 32, 8, 211, 137, 77]);
