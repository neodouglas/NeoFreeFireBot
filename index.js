const config = require("./config.json"); 
const TelegramBot = require('node-telegram-bot-api');
const token = 'Insira o Token do Seu Bot do Telegram!';
const needle = require("needle")
const fs = require('fs');
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/adv/, function onLoveText(msg) {
    const chatId = msg.chat.id;
    needle.get("https://texistencurta.ml/api/advserver", function(error, respo) {
      if (!error && respo.statusCode == 200) {
        console.log(respo.body)
          bot.sendMessage(chatId, respo.body.enviar);
  }
  })
  });

  bot.onText(/\/nick (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    needle.get("https://fire-api.vercel.app/api/nick/" + match[1], function(error, respo) {
        if (!error && respo.statusCode == 200) {
            if (respo.body.nickname)  {
            bot.sendMessage(chatId, "O ID é " + match[1] + ", Seu nick no jogo é : " + respo.body.nickname);
            }
            if (respo.body.error)  {
                bot.sendMessage(chatId, "Erro! O ID: " + match[1] + " Não Corresponde a Nenhum ID Brasileiro!");
    
            }
            }
        if (respo.statusCode == 504) { bot.sendMessage(chatId, "Erro! O ID: " + match[1] + " Não Corresponde a Nenhum ID Brasileiro!"); }
    })
  });

  bot.onText(/\/version/, function onLoveText(msg) {
    const chatId = msg.chat.id;
    needle.get("https://texistencurta.ml/api/version", function(error, respo) {
      if (!error && respo.statusCode == 200) {
        console.log(respo.body)
        if (respo.body.news == "true")  {
            bot.sendMessage(chatId, "Nova Mini-Atualização Localizada no Servidor!\nVersão Atual: " + respo.body.last + "\nVersão Nova: " + respo.body.version);
        }
        if (respo.body.news == "false")  {
            bot.sendMessage(chatId, "Nenhuma Atualização Detectada no Servidor!\nVersão Atual: " + respo.body.last);
        }
        
  }
  })
  });

  bot.onText(/\/textadv/, function onLoveText(msg) {
    const chatId = msg.chat.id;
    needle.get("https://texistencurta.ml/api/loc", function(error, respo) {
      if (!error && respo.statusCode == 200) {
        console.log(respo.body)
        if (respo.body.news == "true")  {
            bot.sendMessage(chatId, "Novos Arquivos de Textos Foram Detectados!");
        }
        if (respo.body.news == "false")  {
            bot.sendMessage(chatId, "Nenhuma Atualização dos Textos Foram Detectada no Servidor!");
        }
        
  }
  })
  });

  bot.onText(/\/textnormal/, function onLoveText(msg) {
    const chatId = msg.chat.id;
    needle.get("https://texistencurta.ml/api/textonormal", function(error, respo) {
      if (!error && respo.statusCode == 200) {
        console.log(respo.body)
        if (respo.body.news == "true")  {
            bot.sendMessage(chatId, "Novos Arquivos de Textos Foram Detectados!");
        }
        if (respo.body.news == "false")  {
            bot.sendMessage(chatId, "Nenhuma Atualização dos Textos Foram Detectada no Servidor!");
        }
        
  }
  })
  });
