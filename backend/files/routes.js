const app=require('./server').app
const jwt=require('jsonwebtoken')
const signature="Thisissecretkey"
app.get('/',(req,res)=>{
    res.json("App is running fine")
})

app.get('/user-link',(req, res)=>{

    const apptData = {
        name:"Param",
        apptDate:Date.now()
    };

    //we need to encode this data in a token
    //so it can be added to a url
    const token = jwt.sign(apptData,signature);
    res.send('https://localhost:3000/join?token='+token);
    // res.json("This is a test route")
})  

app.post('/validate-link',(req,res)=>{
    const token = req.body.token;
    // decode the jwt with our secret
    try {
        const decodedData = jwt.verify(token,signature);
        res.json({decodedData,isTokenVlaid:true})
    } catch (error) {
        console.log("false ytyoken")
        res.json({error,isTokenVlaid:false})
        
    }
    
    //send the decoded data (our object) back to the front end
   
})

