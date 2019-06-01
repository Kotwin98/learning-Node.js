var os = require('os');

function converter() {
    var uptime = os.uptime();
    var hours = Math.floor(uptime / 3600);
    uptime %= 3600;
    var minutes = Math.floor(uptime / 60);
    var seconds = uptime % 60;

    console.log("hours: " + hours);
    console.log("minutes: " + minutes);
    console.log("seconds: " + seconds);
}

exports.getconverter = converter;