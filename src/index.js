module.exports = function check(str, bracketsConfig) {
    // your solution
    if (str.length %2!= 0){
      return false;
    }
    var arraySplit = str.split('');
    var arrayInput = [];
    for (var i=0; i<arraySplit.length; i++){
      for(var j=0; j<bracketsConfig.length; j++) {
        if(arrayInput[arrayInput.length-1] == bracketsConfig[j][0] && arraySplit[i] == bracketsConfig[j][1]){
          arrayInput.pop();
        } else {
          if(arraySplit[i] == bracketsConfig[j][0]) {
            arrayInput.push(arraySplit[i]);
          }
        }
      }
    }
    return arrayInput.length == 0;
}
