const removeFromArray = function(arr, ...toRemove) {
    return arr.filter(val => !toRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
