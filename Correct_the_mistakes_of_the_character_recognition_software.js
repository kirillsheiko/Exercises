function correct(string){ 
    let correctStr = '';
	  for  (let i = 0; i < string.length; i++){
        switch (string[i]) {
          case "5":
            correctStr += "S";
            break;
          case "0":
            correctStr += "O";
            break;
          case "1":
            correctStr += "I";
            break;
          default:
            correctStr += string[i];
            break;
            }
        }
    return correctStr;// your code here
}