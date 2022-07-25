class Calculator {
    constructor(firstNum, secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        if (this.isValid(this.firstNum) || this.isValid(this.secondNum)) {
            throw new Error("Both values should be a numbers");
        }
    }

    isValid(number) {
        return typeof number === 'number' ? false : true;
    }

    setX(firstNum) {
        if (this.isValid(this.firstNum)) {
            throw new Error("Value must be a number");
        }
        return this.firstNum = firstNum;
    }

    setY(secondNum) {
        if (this.isValid(this.secondNum)) {
            throw new Error("Value must be a number");
        }
        return this.secondNum = secondNum;
    }

    logSum() {
        return this.firstNum + this.secondNum;
    }

    logMul() {
        return this.firstNum * this.secondNum;
    }

    logSub() {
        return this.firstNum - this.secondNum;
    }

    logDiv() {
        if (this.secondNum === 0) {
            throw new Error("The second value cant equal to 0");
        }
        return this.firstNum / this.secondNum;
    }
}