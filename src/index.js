exports.min = function min(array) {
    let minValue = 0;
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce(function (a, b) {
        a < b ? a : b;
        if (a < b) {
            return (minValue = a);
        }
        return (minValue = b);
    });
    return minValue;
};

exports.max = function max(array) {
    let maxValue = 0;
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce(function (a, b) {
        a > b ? a : b;
        if (a > b) {
            return (maxValue = a);
        }
        return (maxValue = b);
    });
    return maxValue;
};

exports.avg = function avg(array) {
    let avgValue = 0;
    if (!array || !array.length) {
        return 0;
    }
    avgValue = array.reduce(function (a, b) {
        return a + b;
    });
    return avgValue / array.length;
};
