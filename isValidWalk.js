const walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
function isValidWalk(walk) {
    const countN = walk.filter(function(char){
      return char == "n";
    });
    const countS = walk.filter(function(char){
      return char == "s";
    });
    const countW = walk.filter(function(char){
      return char == "w";
    });
    const countE = walk.filter(function(char){
      return char == "e";
    });
    if (countE.length == countW.length && countN.length == countS.length && walk.length == 10){
      return true;
    }
    else {
      return false;
    }
    }
isValidWalk(walk);