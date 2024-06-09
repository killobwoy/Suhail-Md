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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_27_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOEZIUUU0YnVhTTBUaXRaMXd5bS9RR3JvWFNrUE4rZWpxSmdKdHd0R1JBZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidEtHRkx2R1lUYlduS2RiMk8yNzVvd1wiLFxuICBcInBob25lSWRcIjogXCI0OTNlMjdlZC1hMmIxLTQ2ZjgtOTQ0ZS0zYjQ0MDU2ODQ0MDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAyMDgsXG4gICAgICAxNzMsXG4gICAgICAxNzIsXG4gICAgICAxNTgsXG4gICAgICAxMjUsXG4gICAgICAxMDYsXG4gICAgICAxMTcsXG4gICAgICAxMjEsXG4gICAgICAxODQsXG4gICAgICA2MixcbiAgICAgIDUwLFxuICAgICAgMTY2LFxuICAgICAgMTY4LFxuICAgICAgMjQxLFxuICAgICAgMjQsXG4gICAgICAxOTQsXG4gICAgICAxNDIsXG4gICAgICAyMDUsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICA0OSxcbiAgICAgIDE3MyxcbiAgICAgIDEyNSxcbiAgICAgIDIxNixcbiAgICAgIDE5MSxcbiAgICAgIDUxLFxuICAgICAgMjM3LFxuICAgICAgMTk5LFxuICAgICAgOTYsXG4gICAgICAxMTAsXG4gICAgICAyMzYsXG4gICAgICAyMTYsXG4gICAgICAyMDQsXG4gICAgICAyMjAsXG4gICAgICAyNyxcbiAgICAgIDEyNSxcbiAgICAgIDEwNixcbiAgICAgIDcwLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjMzNUhIS0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwMzk0MjE0Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmlnTWFuS2lsbG9cIixcbiAgICBcImxpZFwiOiBcIjEzNTk2MTgwMzQ4OTQ5Mzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHRDVMNEdFUC9PbGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZWdwclU0Qkx6YmJhK0tDYUNLNDdKRGRUdjMzdk9FbXZibzJjVms0QXJVaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmc1ROYmZ3ZFkyTmE3QlliemtMYUpTVENJZFRveGhxeXY1UElGcUJ3c1BDOFRNRUk2MEViR1d6ZmcydGNYcmtuWFE0MFlnOGs3WGpEdjZBbnVmMWNCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBUWM4QkRHQks3TzRZOElyQ2JhWXlhR1V3S3BvalZCaVNSRlM1YkpTN21VYXJPd2RHbnRzdkVjZzFGelk5WTlhSmRiQ01FRWV2Rmg5R1lBaU1QV2RnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDM5NDIxNDc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3OTIxNjY3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
