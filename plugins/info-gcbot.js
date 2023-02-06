import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/Cxd2lnLtc2GJ7g05104T5N'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'My Group Official', 
               body: '𝐅𝐚𝐧𝐧𝐃𝐞𝐯-𝗠𝗗',
               thumbnail: pp
             } 
         }})
         }

handler.tags = ['info']
handler.command = /^gcbul$/i
 export default handler
