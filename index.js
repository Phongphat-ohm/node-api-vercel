const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, ()=>{
    console.log("App Listen On Port 4000");
})

app.get('/', (req, res)=>{
    res.send('This Is My API running');
})

module.exports = app;
