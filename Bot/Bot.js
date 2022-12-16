const { Telegraf } = require('telegraf');

const TOKEN = '5852217025:AAF_RvLuREpHblqTOC3BzOGIEdkOW94yAo8'

const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.launch();