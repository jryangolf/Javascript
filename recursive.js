var factorial = function (num) {
    if (num === 0) {
        return 1;
    }

    return num * factorial(num - 1);
}
    
    var result = factorial(5);
    