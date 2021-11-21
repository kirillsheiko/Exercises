function pipeFix(numbers){
  let array = [];
  let j = 0;
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    array[j] = i;
    j++;
  }
  return array;
}