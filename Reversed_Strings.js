function solution(str){
  let trs = '';
  for (let i = 0; i < str.length; i++) {
    trs += str[(str.length - 1) - i];
  }
  return trs;
}