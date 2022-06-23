const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('build'))

const port = process.env.PORT || 4000

app.get('/test', (req, res) => { 
  res.send('test route')
})
app.listen(port, () => {

    console.log(`listening on port ${port}`)
})