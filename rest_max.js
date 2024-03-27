var maxNumber = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (numbers.length === 0)
        return undefined;
    return Math.max.apply(Math, numbers);
};
console.log(maxNumber(10, 20, 5, 30));
console.log(maxNumber(1, 2, 3));
console.log(maxNumber());
