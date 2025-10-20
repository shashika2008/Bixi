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

//================================================ you can edit ===============================================

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "suho~nZ1XVaZC#DyFPXKzSWjfzu8hsHwo5gxihYI6k5KImDb3CaR0AVNo",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "𝐀𝐆𝐍𝐈",
    MODE: process.env.MODE || "public",
    LINK_WHITELIST: "youtube.com,github.com",
    LINK_WARN_LIMIT: 3,
    LINK_ACTION: "kick",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐀𝐆𝐍𝐈 😆*",
    WELCOME: process.env.WELCOME || "true",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ue4ppc.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || 
`╭━━━〔 ♻️ ＡＧＮＩ ♻️ 〕━━━╮  
┃ ☘️ *OWNER:* Shashika Dilshan  
┃ ☘️ *MODE:* ᴘᴜʙʟɪᴄ ⚔️  
┃ ☘️ *SYSTEM:* ᴏɴʟɪɴᴇ ✅  
┃ ☘️ *UPTIME:* \${runtime}  
┃ ☘️ *PING:* \${latency} ms  
┃ ☘️ *COUNTRY:* ${country}  
┃ 🤫🤫🤫🤫🤫🤫🤫🤫🤫🤫🤫 
╰━━━━━━━━━━━━━━━━━━━━━━━╯  
🔥  ＡＧＮＩ 𝐈𝐒 online  🔥  
🖤 “powered by shashika dilshan” 🖤`,
    STICKER_NAME: process.env.STICKER_NAME || "ᴍᴀʟᴠɪɴ-xᴅ",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,💛,💚,💙,💜,🤎,🖤,🤍",
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94705104830",
    OWNER_NAME: process.env.OWNER_NAME || "𝐬𝐡𝐚𝐬𝐡𝐢𝐤𝐚 𝐝𝐢𝐥𝐬𝐡𝐚𝐧",
    DESCRIPTION: process.env.DESCRIPTION || "*© ₚₒwₑᵣₑd by ₛₕₐₛₕᵢₖₐ dᵢₗₛₕᵢₙ*",
    READ_MESSAGE: process.env.READ_MESSAGE || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    READ_CMD: process.env.READ_CMD || "false",
    DEV: process.env.DEV || "94705104830",
    ANTI_VV: process.env.ANTI_VV || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
    version: process.env.version || "0.0.5",
    START_MSG: process.env.START_MSG || 
`*welcome to AGNI BOT*
╭━━━〔 ♻️ ＡＧＮＩ ♻️ 〕━━━╮  
┃ ☘️ *OWNER:* Shashika Dilshan  
┃ ☘️ *MODE:* ᴘᴜʙʟɪᴄ ⚔️  
┃ ☘️ *SYSTEM:* ᴏɴʟɪɴᴇ ✅  
┃ ☘️ *UPTIME:* \${runtime}  
┃ ☘️ *PING:* \${latency} ms  
┃ ☘️ *COUNTRY:* ${country}  
┃ 🤫🤫🤫🤫🤫🤫🤫🤫🤫🤫🤫 
╰━━━━━━━━━━━━━━━━━━━━━━━╯  
🔥  ＡＧＮＩ 𝐈𝐒 connected  🔥  
🖤 “powered by shashika dilshan” 🖤`
};
