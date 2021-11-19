function squareSum(numbers){
  let k = 0;
  for (let i = 0; i < numbers.length; i++) {
    k += numbers[i] * numbers[i];
  }
  return k;
}