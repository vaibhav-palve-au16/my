// A.	Create a NodeJS server using HAPI/Express framework. 
// B.	Add a route with GET request. 
// C.	Add a route for POST request along with validation payload and error handler for request. 

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


const PORT = 5000
app.get('/',((req,res) =>{
    res.send('hello word')
}))

app.post('/',(req,res)=>{
    res.send('POST request to the homepage ')
    app.use((err,req,res,next)=>{
    if(err){
        console.log(err.message)
        if(!err.statusCode){err.statusCode = 500}
        return res.status(err.statusCode).send({
            statusCode : err.statusCode,
            message: err.message
        })
    }
    next()
})
})
// manual handaling error (custom server error handler )

app.listen(PORT,(req,res)=>{
    console.log(`our server running on ${PORT} no.`)
})