const mineflayer = require('mineflayer');

console.log('Starting...')

function createBot () {
    const bot = mineflayer.createBot({
    host: "hxrmcpe-0YqC.aternos.me",
    port: "32629",
    username: "5goli",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/reginster 123123123 123123123')
      bot.chat('/login 123123123 123123123')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      switch (message) {
        case ';start':
          bot.chat('5goli > hello delta bhai. khana khya apne')
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.chat('5goli > hello vexa bhai. khana khya apne')
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('5goli > Spawned')
        })
        bot.on('death', function() {
          bot.chat('5goli > I died, respawn')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
createBot()
