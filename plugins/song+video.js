const { cmd } = require("../command");
const yts = require("yt-search");
const axios = require("axios");
const fs = require("fs");

cmd(
  {
    pattern: "song",
    desc: "Download YouTube Audio",
    category: "download",
    filename: __filename,
  },
  async (malvin, mek, m, { from, args, reply }) => {
    try {
      const q = args.join(" ");
      if (!q) return reply("*Provide a name or YouTube link.* 🎵❤️");

      // 1) Get YouTube URL
      let url = q;
      try {
        url = new URL(q).toString();
      } catch {
        const s = await yts(q);
        if (!s?.videos?.length) return reply("❌ No videos found!");
        url = s.videos[0].url;
      }

      // 2) Validate URL
      if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
        return reply("❌ Invalid YouTube URL!");
      }

      // 3) Fetch metadata
      const searchResult = await yts(url);
      const info = searchResult.videos[0];
      if (!info) return reply("❌ Couldn't get video info!");

      const desc = `
🧩 *YOUTUBE MP3 DOWNLOADER* 🧩

📌 *Title:* ${info.title}
⏱️ *Uploaded:* ${info.timestamp || "N/A"} (${info.ago || "N/A"})
👀 *Views:* ${info.views?.toLocaleString() || "N/A"}
🔗 *URL:* ${info.url}

━━━━━━━━━━━━━━━━━━
*Powered by AGNi Bot 🌟*
`.trim();

      await malvin.sendMessage(
        from,
        {
          image: { url: info.thumbnail || "https://i.ibb.co/SDWZFh23/malvin-xd.jpg" },
          caption: desc,
        },
        { quoted: mek }
      );

      // 4) Download Audio via working API
      reply("🎶 Downloading audio, please wait...");

      const apiUrl = `https://api.akuari.my.id/downloader/youtube?link=${encodeURIComponent(url)}`;
      const res = await axios.get(apiUrl);

      if (!res.data || !res.data.mp3 || !res.data.mp3.url) {
        return reply("❌ Failed to fetch download link!");
      }

      const audioRes = await axios.get(res.data.mp3.url, { responseType: "arraybuffer" });

      // 5) Send MP3
      await malvin.sendMessage(
        from,
        {
          audio: audioRes.data,
          mimetype: "audio/mpeg",
          fileName: `${info.title || "audio"}.mp3`,
        },
        { quoted: mek }
      );

      reply("✅ *Download Complete!* 🎵");
    } catch (e) {
      console.error("Error:", e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
