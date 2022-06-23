const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

const port = process.env.PORT || 3000

app.get('/test', (req, res) => { 
  res.send('test route')
})
app.listen(port, () => {
    
    console.log(`listening on port ${port}`)
})