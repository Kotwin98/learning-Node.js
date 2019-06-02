var os = require('os');
var colors = require('colors');

var converter = require('../modules/converter');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.yellow, cpu);
    console.log('Uptime: '.blue, converter.getconverter());
    console.log('User name:'.orange, userInfo.username);
    console.log('Home dir:'.america, userInfo.homedir);
}

exports.print = getOSinfo;