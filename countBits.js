var countBits = function(n) {
  let dec = n.toString(2);
  let sum = 0;
  for (let i = 0; i < dec.length; i++) {
    sum += parseInt(dec.charAt(i), 10);
  }
  return sum;
};