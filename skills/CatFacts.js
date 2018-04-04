
module.exports = function(skill, info, bot, message) {
var request = require("request")

//var url = "http://catfacts-api.appspot.com/api/facts?number=1"
var url = "https://catfact.ninja/fact"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        //console.log(body) // Print the json response
        bot.reply(message,body.fact + ':smile_cat:');
    }
})

};
