function customPushPop(arr, operation, value) {
    if (operation === 'push') {
        //arr[arr.length] = value
        arr.push(value);
            return arr;
    }else if (operation === 'pop') {
        if (arr.length === 0) {
            return undefined;
        } else {
            const element = arr.pop();
            return element;
        }
        
    } else {
        return 'Invalid operation';
    }

    

}

const myArray = [1, 2, 3];

console.log(customPushPop(myArray, 'push', 4));
console.log(customPushPop(myArray, 'pop'));
console.log(customPushPop(myArray, 'pop'));
console.log(customPushPop(myArray, 'push', 5));