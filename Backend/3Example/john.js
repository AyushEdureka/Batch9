const express = require('express')

const app = express()

app.get("/login",(req,res)=>{
    res.send('Fill the form login')
})

app.listen(3000,()=>{
    console.log("Server running http://localhost:3000")
})