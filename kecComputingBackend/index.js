var express = require("express")
var app = express()
const PORT = 3001
app.get('/',(req, res) => { //"/" route
    res.send("welcome to backend server");    
})
// app.get('/1',(req, res) => { //"/" route
//     res.json({ server: "wwl" , url:"localhosr",prt : PORT});    
// })
app.listen(PORT, () => {
    console.log(`backend server start \n Url: http://localhost:${PORT}`)
})