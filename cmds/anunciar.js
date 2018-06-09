const cfg = require("../keys.json");
const Discord = require("discord.js");

exports.run = (Pietra, message, args) => {
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply(":x: Você não pode usar esse comando!");
    if (!['244489368717230090', '118045186654732296', '438877434033471489', '257355843685711873'].includes(message.author.id)) return message.reply("**Comando privado, haha**");

   const args2 = message.content.split(" ").slice(1); 
    const sayMessage = args2.join(" "); 
    if (!sayMessage) return message.reply('Você esqueceu de colocar o aviso!:-)')
    message.channel.send("O aviso foi enviado com sucesso.")
    
    let razaod = args.slice(1).join(' ');
    var server = message.guild;
    let xd =  args
        ? args[0]
        : null;
message.guild.members.map(a => 
Pietra.users.get(a.id).send({
//message.channel.send({  
"embed": {
    "title": `**Anúncio do servidor:** \`\`${message.guild.name}\`\`!`,
    
            "description": `<@${message.author.id}>: ${razaod}`,
            "color": 0xec0076,
       
   
    "image": {
        "url": xd
        }
        }
        }).then((value) => {
            setTimeout(() => {
              value.delete();
              message.delete();
            }, 1000 * 60 * 60 *4);
        })
        
        )
        }