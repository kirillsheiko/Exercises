let array = [5, 6, 1, 7, 8, 0, 22, 15];
function sortArray(array){
  const oddArray = array.filter(function(oddNumber){
    return Math.pow(oddNumber % 2, 2) == 1;
  });
  function compareNumbers(a,b){
    return a - b;
  }
  oddArray.sort(compareNumbers);
  let j = 0;
  for (let i = 0; i < array.length; i++){
    if (Math.pow(array[i] % 2, 2) == 1){
      array[i] = oddArray[j];
      j++;
    }
  }
return array;
}
sortArray(array);