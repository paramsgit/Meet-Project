// express and socket server

const fs=require('fs')
const https=require('https')
const express=require('express')
const cors=require('cors')
const socketio=require('socket.io')
const port=5000

const app=express();
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname+'/public'))

const key=fs.readFileSync('./certs/cert.key')
const cert=fs.readFileSync('./certs/cert.crt')

const expressServer=https.createServer({key,cert},app);
const io=socketio(expressServer,{
    cors:['*']
})

expressServer.listen(port)
console.log('Server is listening on port',port)
module.exports={io,expressServer,app}
