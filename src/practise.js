function nextNum(n) {
    return n + 1;
}

console.log(nextNum(5));

function convert(minutes) {
    return minutes * 60;
}

console.log(convert(5));

const remainder = (x, y) => x % y;
console.log(remainder(3, 4));

const giveMeSomething = (str) =>["something",str].join(' ');
console.log(giveMeSomething("Bob Jane"));

const howManyHours = (hours) => hours *  (60*60);
console.log(howManyHours(2));

const sumPolygon = (polygon) => (polygon - 2) * 180;
console.log(sumPolygon(5));

const date = new Date;
let day = date.getDay();
let daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("Today is " + daylist[day]);