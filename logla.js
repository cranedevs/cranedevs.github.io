const html = document.documentElement.outerHTML
const fs = require("fs")
fs.writeFileSync("anasayf.html", html)
