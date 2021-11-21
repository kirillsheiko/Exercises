function expressionMatter(a, b, c) {
  let num = [];
  num[0] = a + b + c;
  num[1] = a * b * c;
  num[2] = a + b * c;
  num[3] = a * b + c;
  num[4] = (a + b) * c;
  num[5] = a * (b + c);
  let max = 0;
  for (let i = 0; i < 6; i++){
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;// highest achievable result
}