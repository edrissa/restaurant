const express = require('express')
const app = express()
const port = 3000

const me = {
    fname: "Edrissa",
    lname: "Saine",
    minit: "Mansour",
    status: "Online",
    location: "Pipeline",
    living: "true",
    id: "0208",
    phone:"3650492",
    picture: "./djhdfhchdhdh.jpg",
    email: "edrissasaine366@gmail.com",
    gender: "male",
    dob: "19/11/199*" 
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
    res.json(me)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})