function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let noGeese = [];
  for (let i = 0; i < birds.length; i++) {
    if (geese.indexOf(birds[i]) == -1) {
      noGeese.push(birds[i]);
    }
  }
  return noGeese;// return an array containing all of the strings in the input array except those that match strings in geese
};