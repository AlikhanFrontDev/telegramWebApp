const { Telegraf } = require('telegraf');
const TOKEN = '5852217025:AAF_RvLuREpHblqTOC3BzOGIEdkOW94yAo8'
const bot = new Telegraf(TOKEN);

const web_link = 'https://alikhanfrontdev.github.io/telegramWebApp/'

bot.start((ctx) =>
    ctx.reply('Welcome', {
        reply_markup: { keyboard: [[{ text: "web_app", web_app: { url: web_link } }]] }
    }));
bot.launch();