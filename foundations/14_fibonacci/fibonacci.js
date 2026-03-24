const fibonacci = function(num) {
    const numericNum = parseInt(num);

    if (numericNum < 0) return "OOPS";
    if (numericNum == 0) return 0;

    let firstPrevious = 1;
    let secondPrevious = 0;

    for (let i = 2; i <= num; i++) {
        let current = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = current;
    }

    return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
