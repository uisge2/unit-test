const express = require('express')
const app = express()
const port = 3000
const mylib = require('./mylib')

// endpoint localhost:3000/
app.get('/', (req, res) => {
    const year = mylib.year()
    res.send('Hello World! It is currently: ' + year)
})

// endpoint localhost:3000/add?a=42&b=21
app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log({a,b})
    const total = mylib.sum(a,b)
    res.send('add works ' + total.toString())
})

//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

