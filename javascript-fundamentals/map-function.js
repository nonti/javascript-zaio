function mapArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i], i, array));
    }

    return newArr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tripled = mapArray(numbers, function (n) {
    return n * 3
});

console.log(tripled);