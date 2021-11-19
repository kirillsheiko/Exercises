function getAverage(marks){
  let k = 0;
  for (let i = 0; i < marks.length; i++) {
    k += marks[i];
  }
  return Math.round(k / marks.length); //TODO : calculate the downward rounded average of the marks array
}