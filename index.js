require('dotenv').config()
const express = require('express')
const router=require('./router/router')
require('./config/connection')


const app = express()
app.use(express.json())
app.use(router)

const PORT =  5000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}!!!! `);
    
})

app.get('/',(req,res)=>{
    res.status(200).send(`server start`)
})

