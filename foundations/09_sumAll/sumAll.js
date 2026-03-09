const sumAll = function(from, to) {
    if (!Number.isInteger(from) || !Number.isInteger(to)) return "ERROR";
    if (from <= 0 || to <= 0) return "ERROR";

    let sum = 0;
    const minimum = Math.min(from, to);
    const maximum = Math.max(from, to);

    for (let i = minimum; i <= maximum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;