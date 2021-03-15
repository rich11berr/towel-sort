
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrayTS =  [];
    if (matrix === undefined || matrix.length === 0) {
      return [];
    }
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        let x = matrix[i].length;
        for (j = 0; j < matrix[i].length; j++) {
          arrayTS.push(matrix[i][j]);
        } 
      }
      else {
          for (j = matrix[i].length - 1; 0 <=j; j--) {
            arrayTS.push(matrix[i][j]);
          }
        }
    }
    return arrayTS;
}
