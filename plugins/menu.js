const { cmd, commands } = require("../command");
const config = require('../config');
const os = require('os'); // To get RAM info
const moment = require('moment'); // For uptime formatting

cmd(
  {
    pattern: "menu",
    alias: ["getmenu"],
    react: "📜",
    desc: "Get bot command list",
    category: "main",
    filename: __filename,
  },
  async (malvin, mek, m, { from, pushname, sender, reply }) => {
    try {
      // Calculate dynamic values
      const uptime = moment.duration(process.uptime() * 1000).humanize();
      const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB";
      const usedRam = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB";
      const owner = config.OWNER_NUMBER || "Unknown"; // fallback
      const user = pushname || sender.split("@")[0];

      // Create menu categories
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        const oneCmd = commands[i]; // <== changed cmd -> oneCmd
        if (oneCmd.pattern && !oneCmd.dontAddCommandList) {
          const line = `┃   ▪️ ${config.PREFIX}${oneCmd.pattern}\n`;
          if (menu[oneCmd.category]) {
            menu[oneCmd.category] += line;
          }
        }
      }

      const madeMenu = `𝐘𝐨𝐨  ${user}
*Wᴇʟᴄᴏᴍᴇ Tᴏ AGNI* 

╭─「 🛠️ ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」 
│🤖 *Bot*: AGNI
│🙋‍♂️ *User*: ${user}
│📱 *Owner*: ${owner}
│⏳ *Uptime*: ${uptime}
│💾 *Ram*: ${usedRam} / ${totalRam}
│🛎️ *Prefix*: ${config.PREFIX}
╰──────────●●►

╭─「 📜 ᴍᴇɴᴜ ᴏᴘᴛɪᴏɴꜱ 」 
│ ⚙️ *MAIN COMMANDS*
│   ➥ .alive 
│   ➥ .menu 
│   ➥ .ai <text> 
│   ➥ .system 
│   ➥ .owner 
│
│ 📥 *DOWNLOAD COMMANDS*
│   ➥ .song <text> 
│   ➥ .video <text> 
│   ➥ .fb <link> 
│
│ 👑 *OWNER COMMANDS*
│   ➥ .restart 
│   ➥ .update 
│
│ 🔁 *CONVERT COMMANDS*
│   ➥ .sticker <reply img> 
│   ➥ .img <reply sticker> 
│   ➥ .tr <lang> <text>
│   ➥ .tts <text> 
╰──────────●●►

> *POWERED BY AGNI*
`;

      await malvin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/8bkx4q.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );

    } catch (e) {
      console.error(e);
      reply("❌ Menu error:\n" + e.message);
    }
  }
);
