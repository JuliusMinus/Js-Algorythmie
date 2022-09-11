function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      
      }
    }
  }  
  console.log(array);
}



bubbleSort([451, 3, 8, 96, 26, 5, 32, 8, 211, 137, 77]);


// ----------  =   ------------------

function bubble(array) {
  console.log(array.sort((a, b) => a- b));
}

bubble([451, 3, 8, 96, 26, 5, 32, 8, 211, 137, 77]);

