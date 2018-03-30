var dotenv = require('dotenv');
dotenv.load();
var APIKEY = process.env.SLACK_TOKEN;
var Botkit = require('botkit');


var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: APIKEY
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});

