var extracted1 = $(document).ready(function () {
    setInterval(function () {
        var now = new Date();
        var hour = dD(convert(now.getHours()));
        var min = dD(now.getMinutes());
        var ampm = ap(now.getHours());
        var result = ampm + ' ' + hour + ':' + min;
        document.getElementById('realtime').textContent = result;
    }, 1000);

    function ap(h) {
        var ampm = Math.floor(h / 12);

        if (ampm == 0) {
            return 'AM'
        } else {
            return 'PM';
        }
    }

    function convert(h) {
        var hour_12 = h % 12;
        if (hour_12 == 0) {
            hour_12 += 12;
        }
        return hour_12;
    }

    function dD(a) {
        if (a > 9) {
            return a;
        } else {
            return '0' + a;
        }
    }
});
