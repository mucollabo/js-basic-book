var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));
var num2 = parseInt(prompt("두 번째 숫자를 입력하세요."));
compare(num1, num2);

function compare(a, b) {
    if(a === b) {
        alert("두 수가 같습니다.");
    } else if(a > b) {
        alert(a + "(이)가 " + b + "보다 큽니다.");
    } else {
        alert(b + "(이)가 " + a + "보다 큽니다.");
    }
}