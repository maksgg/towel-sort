
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = matrix;
    if(!arr) {
        return [];
    }
        for(let i = 0; i < arr.length; i++) {
            
           if( i % 2 !== 0) 
                 arr[i].reverse();
        } 
       return arr.flat();
}
