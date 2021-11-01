function isValidWalk(walk) {
  if (walk.lenght == 10 ){
    let countE = 0;
    let countW = 0;
    let countN = 0;
    let countS = 0;
    for (let i = 0; i < walk.length; i++){
      if (walk[i] == 'n'){
        ++countN;
      }
      else if (walk[i] == 's'){
        ++countS;
      }
      else if (walk[i] == 'e'){
        ++countE;
      }
      else if (walk[i] == 'w'){
        ++countW;
      }
    }
    if (countE == countW & countN == countS){
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}