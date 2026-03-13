const mineflayer = require('mineflayer')

function createBot () {
  const bot = mineflayer.createBot({
    host: process.env.HOST || "mumumelelo.falix.gg",
    port: parseInt(process.env.PORT) || 26737,
    username: process.env.USERNAME || "AFK_Bot_24x7",
    version: "1.21.1",  // ✅ Explicit version for your server
    auth: 'online'     // cracked server
  })

  bot.on('spawn', () => {
    console.log("✅ Joined server 1.21.1!")

    // Anti-AFK jumping
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 400)
    }, 25000)
  })

  // Resource pack auto accept
  bot.on('resourcePack', (url) => {
    console.log("📦 Resource pack:", url)
    bot.acceptResourcePack()
  })

  bot.on('kicked', (reason) => console.log("⚠️ Kicked:", reason))
  bot.on('error', (err) => console.log("❌ Error:", err))

  // Reconnect if disconnected
  bot.on('end', () => {
    console.log("⏳ Disconnected — reconnecting in 5s")
    setTimeout(createBot, 5000)
  })
}

createBot()

