function digitize(n) {
  let k = [];
  let i = 0;
  while (n) {
    k[i] = n % 10;
    n = Math.trunc(n / 10);
    i++;
  } 
  return k; //code here
}