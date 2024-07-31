const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwdW1OSURUVUtFN2RwTjZWQk5QaGdJRk1UT2JlVGhkNjJtTm9PRFFQTGVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmMU0xUTdwUlFuaVRVUVRYMUZkUExnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY2MTkyOWZiLWNiN2YtNDVlYS04NDM0LWJjNWU5YjA4YTdiOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDEsXG4gICAgICAxNjgsXG4gICAgICAxNjQsXG4gICAgICA5NyxcbiAgICAgIDIxMCxcbiAgICAgIDU3LFxuICAgICAgMjM5LFxuICAgICAgMyxcbiAgICAgIDEyNSxcbiAgICAgIDcwLFxuICAgICAgMjQ2LFxuICAgICAgMTQsXG4gICAgICAxNTcsXG4gICAgICAyMzMsXG4gICAgICA4OCxcbiAgICAgIDg3LFxuICAgICAgMjE1LFxuICAgICAgOTAsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICA5OCxcbiAgICAgIDE2MSxcbiAgICAgIDkzLFxuICAgICAgMTU3LFxuICAgICAgNTgsXG4gICAgICA1NCxcbiAgICAgIDE5MCxcbiAgICAgIDEyLFxuICAgICAgMjM0LFxuICAgICAgOTgsXG4gICAgICAyMzgsXG4gICAgICA3NSxcbiAgICAgIDIyMCxcbiAgICAgIDEzOCxcbiAgICAgIDQ2LFxuICAgICAgMTUyLFxuICAgICAgNzcsXG4gICAgICA2LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc1UUJMNVNOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNTE2NTAzNzc3OToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqngfCdl5fwnZeu8J2Xv/Cdl7gg8JGBjSDwnZee8J2XtvCdl7nwnZe58J2XsvCdl7/qp4JcIixcbiAgICBcImxpZFwiOiBcIjQzOTYzNzU1MDQwNzc4OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ055L3NPY0dFS24zcDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib2xNME5uOStCd1dwcWdOT0F1RFBzU1pka3ZaV3h4ZlV4TURhTHE2WFBEOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2Z2d2LytYK2ZRZjkrNWtVRk9ZUnRUaVF3bnM4ZHU4RGJQNUZBZ3B2cHJxQituZCt0Y1BGaXBXL0pFZFJjVk53RGY4N0ZtWkt6RWgxbVQwK1R6aHNBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4OXlTS2ZjY1gvL3BjUEE5S1JXRjhZb2Y0ZGNqSTBMMVFLNW92dFpSQnNQWWgwV0wyS2tPQlNXaFpYWlIwUnFCaEVVR2FkemE2TTdZand1QjVWSXRCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNTE2NTAzNzc3OToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDE2MDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkg1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQTXNVV0lBbklMN2Y2MVRsUFg4aVM1TnlUSWJwL3NhSXFDVGRKclZLVmJjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Mjc0MTM5NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🕷️❤️",
  ownername:process.env.OWNER_NAME|| "Killer🕷️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
