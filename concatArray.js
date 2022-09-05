const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if((array1 == null || undefined)&&(array2 == null || undefined)){
    return undefined;
  }
  else if(array1 == null || undefined){
    return array2;
  }
  else if(array2 == null || undefined){
    return array1;
  }
  else if((array1.length === 0) && (array2.length === 0)){
    return [];
  }
  else{
    let arr3 = [].concat(array1,array2);
    return arr3;
  }
}

module.exports = concatArray
