function sumArray(array) {
  if (array === null || array === NaN || array.length === 0 || array.length === 1) {
    return 0;
  } else {
    let k = 0;
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
      k += array[i];
      if (array [i] > max) {
        max = array[i];
      }
      if (array[i] < min) {
        min = array[i];
      }
    }
   k = k - (max + min);
   return (k);    
  }
}