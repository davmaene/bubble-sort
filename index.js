const ar = [
    98, 85, 80, 39, 33, 89, 21, 15, 26, 68, 12, 26,
    76, 54, 39, 71, 23, 44, 38, 81, 30, 92, 39, 64,
    94, 77, 85, 26, 79, 63, 78,  1, 39, 86, 65, 61,
    73, 87, 49, 43,  0, 14, 29, 50, 18, 99, 16, 29,
    62, 43, 83, 12, 57, 40, 67, 27,  4, 77, 93, 63,
    30, 68, 14, 22, 38, 44,  5, 48,  8, 93,  8, 89,
    44, 95, 77, 82, 57, 84, 94, 63, 67, 76, 16, 72,
    47, 26, 33, 65, 91, 80, 27, 31, 96, 68, 46, 71,
    80,  3, 18, 78
]
const bubleSort = (array) => {
    const leftab = [];
    if(array !== undefined){
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length; j++){
                if(array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
        return array;
    }else return({
        code: 400,
        message: 'no array passed as param'
    })
}
console.log(bubleSort(ar));