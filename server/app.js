var express = require('express');
var GCM = require('gcm').GCM;
var app = express();

var apiKey = 'AIzaSyCsCOzXB8Ewo2XcM1_YTUkFTnmIPNKD95s';
var gcm = new GCM(apiKey);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/gcm/api', function (req, res) {

    var message = {
        registration_id: "cXcA4AtFwxE:APA91bEHCVMisZD9G4aAHGQwIQgvuVKtzT5cpqZOd-68-T6BLhpC5alUTHT9yeJJS56dfiX4XHNgEHUvviuAcpa7cvy1mNgKOPQ-6K2BeOz_CGH6_NNm4c7lMEEiooyqjJQlnacmy8xr",
        collapse_key: 'Collapse key',
        'data.key1': 'Hello',
        'data.key2': 'World'
    };

    gcm.send(message, function (err, messageId) {
        if (err) {
            console.log("Something has gone wrong!", err);
            res.send("Something has gone wrong!");
        } else {
            console.log("Sent with message ID: ", messageId);
            res.send("Sent with message ID: " + messageId);
        }
    });


});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});