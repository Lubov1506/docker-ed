const app = require('express')()
app.use((req, res) =>{
    res.send(`hello you`)
})
const PORT = process.env.PORT ||3000
app.listen(PORT)