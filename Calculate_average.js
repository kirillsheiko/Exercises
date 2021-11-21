function find_average(array) {
  if (array == 0) {
    return 0;
  }
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }
  // your code here
  return num / array.length;
}