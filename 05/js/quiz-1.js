var num1 = parseInt(prompt("첫 번째 수를 입력하세요."));
var num2 = parseInt(prompt("두 번째 수를 입력하세요."));
var result = sumMulti(num1, num2);


function sumMulti(a, b) {
    if(a === b) {
        var mul = a * b;
        document.write("두 수의 곱은 " + mul + "입니다.");
    } else {
        var sum = a + b;
        document.write("두 수의 합은 " + sum + "입니다.");
    }
}