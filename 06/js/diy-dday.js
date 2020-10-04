var now = new Date();
var firstDay = new Date("2020-09-04");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedDay = Math.round((toNow - toFirst) / (1000 * 60 * 60 * 24));
document.querySelector("#accent").innerHTML = passedDay;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
    var future = toFirst + (days * (24*60*60*1000));
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date = someday.getDate();
    document.querySelector("#date" + days).innerHTML = year + "년 " + month + "월 " + date + "일";
}