// pomodoro
var breakTime = 5, 
    sessionTime = 25, 
  // current showing time
    current = sessionTime * 60, 
  //showing in the circle now
    showTime = sessionTime; 
// timer is not in active
var state = false, 
  // work model
    model = 'Work',
  // timer
    timer; 
//show the time in two digits
function toDou(num) {
    return num < 10 ? "0" + num : "" + num;
}
//change the second model to regular modle
function conversion(time) {
    current = parseInt(time);
    var h = parseInt(current / 3600),
        m = parseInt(current % 3600 / 60);
    s = parseInt(current % 3600 % 60);
    return toDou(h) + ":" + toDou(m) + ":" + toDou(s);
}

// cha:change the break and work time. ad: click + - to change time
function eventFun(cha, ad) {
    //change time when timer is stop
    if (!state) {
        //change
        if (cha == 'break') { 
            breakTime += ad;
            //break time can not less than one
            if (breakTime < 1) {
                breakTime = 1;
            }
        } else if (cha == 'session') { 
            sessionTime += ad;
            //work time can not less than one
            if (sessionTime < 1) {
                sessionTime = 1;
            }
        }
        //show on the web page
        if (model == 'Break') {
            showTime = breakTime;
            current = breakTime * 60;
        } else if (model == 'Work') {
            showTime = sessionTime;
            current = sessionTime * 60;
        }
        $('.break-num').text(breakTime);
        $(".session-num").text(sessionTime);
        $('.time').text(showTime);
    }
}
// + - event
function bindEvent() {
    //break -
    $('.break-minus').click(function() {
        eventFun('break', -1);
    });
    //break +
    $('.break-add').click(function() {
        eventFun('break', 1);
    });
    //work -
    $('.session-minus').click(function() {
        eventFun('session', -1);
    });
    //work +
    $('.session-add').click(function() {
        eventFun('session', 1);
    });
  
  // click circle ,when state is false means the timer is stop and set the timer. when state is ture means timer is working now ,reset the timer.
    $('.circle').click(function() {
        if (!state) {
            timer = setInterval(function() {
                myTimer();
            }, 1000);
            } else {
            clearInterval(timer);
        }
        state = !state;
    });
}



function myTimer() {
    //current time -1
    current--;
  // change the break and work
    if (current <= 0) {
        if (model == 'Work') {
            model = 'Break';
            current = breakTime * 60;
            $('.bg-inner');
        } else {
            model = 'Work';
            current = sessionTime * 60;
            $('.bg-inner');
        }
        $('.name').text(model);
    }
    //change to regular time
    showTime = conversion(current);
    //show the time in circle to web page
    $('.time').text(showTime);

 
}
// reset the web page
function init() {
    $('.break-num').text(breakTime);
    $(".session-num").text(sessionTime);
    $('.name').text(model);
    $('.time').text(showTime);
    bindEvent();
}
init();


