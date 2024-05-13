const formatArg = (arg) => {
    if (Array.isArray(arg)) {
        // print a bulleted list
        return arg.map((part) => ` - ${part}`).join("\n");
    }
    if (arg.toString === Object.prototype.toString) {
        // this object will be serialized to ["object Object"]
        // print it nicer
        return JSON.stringify(arg);
    }
    return arg;
};

const print = (segments, ...args) => {
     // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
    let message = segments[0];
    segments.slice(1).forEach((segment, index) => {
        message += formatArg(args[index]) + segment;
    });
    console.log(message);
};

const todos = [
    "Learn Java",
    "Learn Ruby",
    "Learn Python",
    "Leran Web Apis"
];

const progress = { java: 20, html: 50, css: 10 };
print`I need to do:
${todos}
My current progress is:  ${progress}
`;

function checkData(data) {
    if (data.length === 3) {
        return true;
    } else {
        return `is not a valid data`;
    }
}

const result = checkData("ook");

console.log(result);

const square = function sqr(n) {
    return n * n;
}
console.log(square(4));