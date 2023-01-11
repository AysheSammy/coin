var lessons_days = ['12/14/2022', '12/16/2022', '12/19/2022', '12/21/2022', '12/23/2022', '12/26/2022', '12/28/2022', '12/30/2022', '1/02/2023', '1/04/2023', '1/06/2023', '1/09/2023', '1/11/2023', '1/13/2023', '1/16/2023', '1/18/2023', '1/20/2023', '1/23/2023', '1/25/2023', '1/27/2023', '1/30/2023', '2/1/2023', '2/3/2023', '2/6/2023', '2/8/2023', '2/10/2023', '2/13/2023', '2/15/2023', '2/17/2023', '2/20/2023', '2/22/2023', '2/24/2023', '2/27/2023', '3/1/2023', '3/3/2023']
var lesson_times = [[18 * 60 + 30, 19 * 60 + 15], [19 * 60 + 30, 20 * 60 + 15], [20 * 60 + 30, 21 * 60 + 15]]


const HOURGLASS = document.getElementById("hourglass");
const BREAKTIME = document.getElementById("breaktime");
const TOTAL = document.getElementById("total");
const GONE = document.getElementById("gone");
const LEFT_MONEY = document.getElementById("left_money");
const TMT = document.getElementById("man");
const DATE = document.getElementById("date")
const SEC = document.getElementById("sec");

var downloadTimer = setInterval(function () {
    
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var left_time = 60-sec;

    var check = false
    var numdate = null
    if (lessons_days.includes(new Date().toLocaleDateString())) {
        for (const times of lesson_times) {
            check = hour * 60 + min >= times[0] && hour * 60 + min <= times[1] ? true : false
            numdate = check ? lesson_times.indexOf(times) : null
        }
    }
    if (check) {
        left_time--;
        
        var permin = 1950 / 4590
        
        var days = lessons_days.indexOf(new Date().toLocaleDateString())
        var minutes = hour * 60 + min - lesson_times[numdate][0] + 45*numdate
        TOTAL.innerText = 11950 + " - "
        GONE.innerText = ((days*135 + minutes)*permin).toFixed(2) + " = "
        LEFT_MONEY.innerText = (1950 - (days*135 + minutes)*permin).toFixed(2)
        TMT.style.display = 'block'
        
        document.getElementById("sec").innerText = 60-sec == 0 ? 'Done' : 60-sec + ' seconds';
        
        if (left_time <= 0)
        left_time = 60;
        
    }
    else {
        BREAKTIME.style.display = 'block'
        HOURGLASS.style.display = 'none'
        TOTAL.style.display = 'none'
        GONE.style.display = 'none'
        HOURGLASS.style.display = 'none'
        LEFT_MONEY.innerText = "It's not lesson time"
    }
    DATE.innerText = day + " / " + month + " / " + year + ' ' + hour + ':' + min + ':' + sec;
}, 1000);

console.log(new Date().toLocaleDateString());