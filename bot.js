const mineflayer = require('mineflayer')
//hi yooo
function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.HOST || "mumumelelo.falix.gg",
    port: parseInt(process.env.PORT) || 25565,
    username: process.env.USERNAME || "AFK_Bot_24x7",
    version: "1.21.1",
    auth: "offline"
  })

  // When bot successfully joins
  bot.on('spawn', () => {
    console.log("✅ Bot joined the server!")

    // Anti-AFK jump every 30s
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  // Resource pack accepter
  bot.on('resourcePack', (url) => {
    console.log("📦 Resource pack requested:", url)
    bot.acceptResourcePack()
  })

  bot.on('resourcePackStatus', (status) => {
    console.log("📦 Resource pack status:", status)
  })

  // Kicked by server
  bot.on('kicked', (reason, loggedIn) => {
    console.log("⚠️ Kicked by server:", reason, "Logged in?", loggedIn)
  })

  // Connection error
  bot.on('error', (err) => {
    console.log("❌ Connection error:", err)
  })

  // Disconnected
  bot.on('end', () => {
    console.log("🔁 Bot disconnected, reconnecting in 5s...")
    setTimeout(createBot, 5000)
  })
}

// Start bot
createBot()

