const fs = require('fs');
const axios = require('axios');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


async function getCountry() {
    try {
        const res = await axios.get('https://ipapi.co/json/');
        return res.data.country_name || "Unknown";
    } catch {
        return "Unknown";
    }
}


let country = "Loading...";
getCountry().then(name => country = name);

//================================================you can edit ===============================================≠========≠====================

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "suho~nZ1XVaZC#DyFPXKzSWjfzu8hsHwo5gxihYI6k5KImDb3CaR0AVNo",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ue4ppc.jpg",
    ALIVE_MS: process.env.ALIVE_MSG || `
╭━━━〔 ♻️ ＡＧＮＩ ♻️ 〕━━━╮  
┃ ☘️ *OWNER:* Shashika Dilshan  
┃ ☘️ *MODE:* ᴘᴜʙʟɪᴄ ⚔️  
┃ ☘️ *SYSTEM:* ᴏɴʟɪɴᴇ ✅  
┃ ☘️ *UPTIME:* \${runtime}  
┃ ☘️ *PING:* \${latency} ms  
┃ ☘️ *COUNTRY:* ${country}  
┃ 🤫🤫🤫🤫🤫🤫🤫🤫🤫🤫🤫 
╰━━━━━━━━━━━━━━━━━━━━━━━╯  
 
🔥  ＡＧＮＩ 𝐈𝐒 online  🔥  
🖤 “powered by shashika dilshan” 🖤
`,
    OWNER_NAME: process.env.OWNER_NAME || "Shashika Dilshan",
    PREFIX: process.env.PREFIX || ".",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "]|I{•------» αᎶ𝕟เ «------•}I|["
};
