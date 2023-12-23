const app=require('./server').app

app.get('/',(req,res)=>{
    res.json("App is running fine")
})