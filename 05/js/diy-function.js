var num1 = parseInt(prompt("첫 번째 수를 입력하세요."));
var num2 = parseInt(prompt("두 번째 수를 입력하세요."));
var result = add(num1, num2);
document.write("두 수의 합은 " + result + "입니다.");

function add(a, b) {
    var sum = a + b;
    return sum;
}