const dt = new Date('September 11, 24 23:59:59 GMT+1:00');

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const spots = ref(0);

const CountDownTimer = () => {
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    showRemaining();
    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            // document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }

        days.value = Math.floor(distance / _day);
        hours.value = Math.floor((distance % _day) / _hour);
        minutes.value = Math.floor((distance % _hour) / _minute);
        seconds.value = Math.floor((distance % _minute) / _second);
        spots.value = spots.value
    }

    timer = setInterval(showRemaining, 1000);
}

export default {
    days,
    hours,
    minutes,
    seconds,
    spots,
    CountDownTimer
}