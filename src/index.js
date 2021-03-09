
exports.min = function min (array) {
  if(array == undefined || array.length == 0){
    return 0;
  } else {
  return array.reduce(function(a, b){
      if(a < b){
         return a;
              }else{
          return b;
      } 
  }); 
} 
}

exports.max = function max (array) {
  if(array == undefined || array.length == 0){
    return 0;
  } else {
  return array.reduce(function(a, b){
      if(a > b){
         return a;
              }else{
          return b;
      } 
  }); 
} 
}

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0){
    return 0;
  } else {
    return array.reduce(function(a, b){
  return a+b;
}) / array.length;
}
}