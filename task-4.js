const selectFromInterval = (arr = [], firstValue, secondValue) => {
    if (arr.some(arrValue => typeof arrValue === 'string') || typeof firstValue !== 'number' || typeof secondValue !== 'number') {
        throw new Error('Error! Values must be Numbers!');
    }
    if (firstValue < secondValue) {
        return arr.filter(value => value < secondValue && value >= firstValue)
    } else {
        return arr.filter(value => value > secondValue && value <= firstValue)
    }
}