var r = prompt("원의 반지름은? (cm)");
var Circle = {
    radius : r,
    circumf : Math.floor(r * 2 * 3.14),
    carea : Math.floor(r * r * 3.14)
}
document.write("반지름이 " + Circle.radius + "cm일 때<br>");
document.write("원의 둘레 : 약 " + Circle.circumf + "cm<br>");
document.write("원의 넓이 : 약 " + Circle.carea + "cm²");