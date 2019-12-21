'use strict';

module.exports.find = async event => {
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.launch();
};