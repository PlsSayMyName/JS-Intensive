// 1 lesson 2 task
const checkNumbers = () => {
    const firstNum = Number(prompt("Enter first number"));
    if (Number.isNaN(firstNum)) {
        console.log("Invalid input");
        return;
    }
    const secondNum = Number(prompt("Enter second number"));
    if (Number.isNaN(secondNum)) {
        console.log("Invalid input");
        return;
    }
    if (firstNum && secondNum) {
        const result = `Result: ${firstNum + secondNum}, ${firstNum / secondNum}`;
        console.log(result);
    }
}
checkNumbers();