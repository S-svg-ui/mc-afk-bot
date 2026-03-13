const mineflayer = require('mineflayer')

function startBot(){
  const bot = mineflayer.createBot({
    host: 'mumumelelo.falix.gg',
    port: 25565,
    username: 'AFK_Bot_24x7'
    resourcePack: https://www.dropbox.com/scl/fi/nc90aovcgd48a7pagd7zi/SodiumGUI.zip?rlkey=73ixyu8rsbsu8zbarht30wqv8&st=elitidic&dl=1
    auth: 'offline'
     version: '1.21.1'
  })

  bot.on('spawn', () => {
    console.log("Bot joined server")

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(()=> bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log("Reconnecting...")
    setTimeout(startBot, 10000)
  })

  bot.on('error', console.log)
}

startBot()
