const express = require('express')
const app = express();
app.use(express.json());

app.post('/user',(req, res)=>{
    const username = req.body.username;
    res.json({
    messege: `hello ${username}`
    })
})

app.get('/user',(req, res)=>{
    const token = req.headers.authorization;
    res.json({
    messege: 'token created '
    })
})

app.listen(3000)