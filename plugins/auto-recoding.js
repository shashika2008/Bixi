const fs = require('fs');
const path = require('path');
const config = require('../config')
const { cmd } = require('../command')


//auto recording
command({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {       
 if (config.AUTO_RECORDING === 'true') {
                await conn.sendPresenceUpdate('recording', from);
            }
         } 
   );
