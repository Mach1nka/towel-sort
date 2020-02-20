
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix===undefined) return [];
  else {
    matrixV1 = matrix.map(function(elem,i){
      if(i%2!==0){
        return elem.reverse();
      }else return elem;
    })
    return matrixV1.flat();
  }
}
