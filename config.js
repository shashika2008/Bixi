const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "suho~nZ1XVaZC#DyFPXKzSWjfzu8hsHwo5gxihYI6k5KImDb3CaR0AVNo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ue4ppc.jpg",
ALIVE_MS: process.env.ALIVE_MSG || "I'm Alive Now"
};
