const express = require('express')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')

app.use(express.json())


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

let users = [
  {
    id: 1,
    username: "idris",
    phone: "0001111",
    password: "secrete"
  }, 

  {
    id: 2,
    username: "jankeh",
    phone: "0001111",
    password: "secrete"
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
    res.json(me)
})

//Get One
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.find((user) => user.id === Number(id))

  if(user) {
    res.json(user)
  }
  
  else{
    res.status(404).end()
    //res.send("sorry user not found")
  }
})

//Get All
app.get('/api/users', (req, res) => {
  res.json(users)
})

//Delete One
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id
  users = users.filter((user) => user.id !== Number(id))

  res.status(204).end()
})

app.post('/api/users', (req, res) => {
  const content = req.body

  //here we save the content to the database
  console.log(content);
  res.json(content)
})

app.put('api/users/:id', (req, res) =>{
  const id = req.params.id

  res.id
})

//app.put()
app.use(middleware.unknownEndpoint)
app.use(middleware.requestLogger)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

