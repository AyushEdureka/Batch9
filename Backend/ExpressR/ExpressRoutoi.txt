const express = require('express')

const app = express()

//Json Format for data
app.use(express.json())

//1.Fetch The list of restraunt

app.get('/restraunt',(req,res)=>{
    res.send('List of all res')
})


//Post: Place an order
app.post('/order',(req,res)=>{
    res.send(`Order placed Successfully!  Order Details:  ${JSON.stringify(req.body)}`)
})


app.listen(3000,()=>{
    console.log('Server Running on http://localhost:3000')
})