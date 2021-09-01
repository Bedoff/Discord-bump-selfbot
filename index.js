const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")


bot.on("ready", async()=>{
    console.log(bot.user.tag)
    bot.user.setActivity("İnle Cinle ",{type: "PLAYING"})
})


bot.on("message",message =>{
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].replace(config.prefix,(""))
    let args = messageArray.slice(1)
    if(!message.content.startsWith(config.prefix)) return;
    if(cmd == "gak") {
        message.channel.send("BOT ACTIVE")
        message.channel.send("----------------")
        var a =1;
        message.channel.send("!d bump")
        function myLoop(){
            setTimeout(function(){
                message.channel.send("!d bump")                
                if(true){
                    myLoop();
                }
            },7500000)
        }
        myLoop();

    }
})


bot.login(config.token)