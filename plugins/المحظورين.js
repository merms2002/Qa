/* Creado por https://github.com/FG98F */

const handler = async (m, {conn}) => {
  await conn.fetchBlocklist().then(async (data) => {
    let txt = `*≡ الاشخاص الي ماخذين بلوك*\n\n*الرقم :* ${data.length}\n\n┌─⊷\n`;
    for (const i of data) {
      txt += `▢ @${i.split('@')[0]}\n`;
    }
    txt += '└───────────';
    return conn.reply(m.chat, txt, m, {mentions: await conn.parseMention(txt)});
  }).catch((err) => {
    console.log(err);
    throw 'لا يوجد';
  });
};
handler.help = ['blocklist'];
handler.tags = ['main'];
handler.command = ['البلوكات', 'المحظورين'];
handler.owner = true;
export default handler;
