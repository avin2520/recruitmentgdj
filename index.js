const express = require('express')
const app = express()
const PORT = 9000
const cors = require('cors')

const db = require('./3.databases/mySql')

db.connect()

app.use(express.json())
app.use(cors())



app.get('/',(req,res)=>{
    res.send('<h1>Selamat datang di API Recruitment Gadjian</h1>')
})





app.listen(PORT,()=>{
    console.log('server running on port ' + PORT)
})