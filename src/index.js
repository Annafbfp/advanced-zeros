module.exports = function getZerosCount(number, base) {
  // your implementation
  var digit = base;
  var myNumber = number;
  var simleMultiple = [];
  var simpleNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  simpleNumber.forEach(function(item, i, simpleNumber){
    while (digit % item == 0){
      simleMultiple.push(item);
      digit = digit / item;
    }
  });
  var summa = [];
  var lastSimpleMultiply = simleMultiple;
  simleMultiple.forEach(function(item, j, simleMultiple){
    var k = 1;
    var sum = 0;
    var z = 1;
    for (m = j; m <lastSimpleMultiply.length; m++){
      if (lastSimpleMultiply.indexOf(lastSimpleMultiply[m], m+1) != -1){
        delete lastSimpleMultiply[m];
        z = z +1;
      }
      else break; 
    }
    while (myNumber / Math.pow(item, k) >= 1){
      sum = sum + Math.floor(myNumber/Math.pow(item, k));
      k = k+1;
    }
    summa[j] = sum / z;
    });
     
    var min = summa [0];
    for (i = 0; i < summa.length; i++){
      if (summa[i] < min){
        min = summa[i];
      }
    } 
  return Math.floor(min);
}