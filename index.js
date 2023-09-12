const TelegramApi = require('node-telegram-bot-api')
const token = '6403960235:AAGhEfJ_PnbPYfZA1xet7FgCDSuFtOJws4U'
const bot = new TelegramApi(token, {polling: true})


const start = () => {
  bot.on('message',async  msg => {
    const text = msg.text;
    const photo = msg.photo;
    const chatId = msg.chat.id;


    // if(msg.text === '/spam'){
    //     const Id = 5067826511;
    //     await bot.sendMessage(chatId, `Сообщение пользователю ${Id} отправлено`);
    //     return await bot.sendMessage(dimaId, "ПОШЕЛ НАХУЙ САМ");
    // }

    if (msg.text === '/start') {
        return bot.sendMessage(chatId, `Привет ${msg.from.first_name}, ты попал в бота "Крестики - Нолики". Для дальнейших действий введи команду /info`);
    }

    if (msg.text === '/info') {
        await bot.sendMessage(chatId, 'И так что бы получить деньги нужно сыграть с ИИ и выйграть его, затем отправить текст который вы увидите на экране после завершения игры (если игра не работает, то перезапустите). Что бы запустить игру нажми на эту кнопку:')
        return await bot.sendPhoto(chatId, 'sadasdsa.png' )
    }
    
    if (msg.text === '100win') {
        return bot.sendMessage(chatId, 'Поздравляем, вы выйграли, что бы вывести деньги введите команду /withdrow!')
    }

    if (msg.text === '/withdrow') {
        return bot.sendMessage(chatId, 'Что вы вывести деньги нужно подписаться на наш телеграмм канал и нашего спонсора! Когда подпишитесь введите /getmoney! Телеграмм каналы - 1. t.me/donnydesigner 2. t.me/donny_it')
    }

    if (msg.text === '/getmoney') {
        return bot.sendMessage(chatId, 'Поздравляем, вы на финальном этапе! Отправьте разработчику доказательство того, что вы подписались на телеграмм каналы указаные выше(скрин). После ждите ответа и договаривайтесь на оплату! ЛС разработчика - @donnyit')
    }

    if (msg.text === 'Вы проиграли') {
        return bot.sendMessage(chatId, 'К сожалению вы проиграли, попробуйте еще раз!')
    }

    return bot.sendMessage(chatId, 'Упс, неизвестная мне команда!')

})


bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Информация о боте'},
    {command: '/withdrow', description: 'Как вывести деньги'},
    {command: '/getmoney', description: 'Вывод денег'},
])
}

start()