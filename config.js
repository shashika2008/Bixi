const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "suho~nZ1XVaZC#DyFPXKzSWjfzu8hsHwo5gxihYI6k5KImDb3CaR0AVNo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ue4ppc.jpg",
ALIVE_MS: process.env.ALIVE_MSG || "
╭━━━〔 ⚡ 𝐀𝐆𝐍𝐈 ⚡ 〕━━━╮  
┃ 👾 *SYSTEM STATUS:* ᴏɴʟɪɴᴇ ✅  
┃ 🕒 *UPTIME:* ${runtime}  
┃ 📡 *PING:* ${latency} ms  
┃ 💀 *MODE:* Public  
┃ 🧠 *OWNER:* Shashika Dilshan  
┃ 🌐 *VERSION:* 3.0.1  
╰━━━━━━━━━━━━━━━━━━━━━━━╯  

🔥 𝐁𝐋𝐀𝐂𝐊 𝐖𝐎𝐋𝐅 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐒𝐌𝐎𝐎𝐓𝐇𝐋𝐘 🔥  
🖤 “Power isn’t given, it’s taken” 🖤
    ",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "]|I{•------» αᎶ𝕟เ «------•}I|["
};
