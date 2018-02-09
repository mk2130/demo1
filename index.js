
var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("India/Pune");
    callback(null, {
        statusCode: '200',
        body: 'The time in pune is: ' + currentTime.toString(),
    });
};
