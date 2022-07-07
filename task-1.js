// 1 lesson 1 task
const firstNum = Number(prompt("Enter first number"));
const secondNum = Number(prompt("Enter second number"));

const chenckNumbers = () => {
    if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
        console.log("Invalid input");
    } else {
        let result = `${firstNum.toString(secondNum)}`;
        console.log(result);
    }
}
chenckNumbers();
