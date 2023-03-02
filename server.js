const express = require('express');


const server = express();

server.use(express.urlencoded({extended:true}))
server.use(express.json())
const Users = [
    {
      id: 1,
      name: 'John',
      password: 'password1',
      profession: 'Engineer'
    },
    {
      id: 2,
      name: 'Jane',
      password: 'password2',
      profession: 'Designer'
    },
    {
      id: 3,
      name: 'Mike',
      password: 'password3',
      profession: 'Programmer'
    },
    {
      id: 4,
      name: 'Emily',
      password: 'password4',
      profession: 'Teacher'
    },
    {
      id: 5,
      name: 'Bob',
      password: 'password5',
      profession: 'Accountant'
    },
    {
      id: 6,
      name: 'Sara',
      password: 'password6',
      profession: 'Nurse'
    },
    {
      id: 7,
      name: 'David',
      password: 'password7',
      profession: 'Lawyer'
    },
    {
      id: 8,
      name: 'Amy',
      password: 'password8',
      profession: 'Journalist'
    },
    {
      id: 9,
      name: 'Tom',
      password: 'password9',
      profession: 'Architect'
    },
    {
      id: 10,
      name: 'Mary',
      password: 'password10',
      profession: 'Artist'
    }
  ]

server.get('/', (req, res)=>{
    res.send('welcome here')
})

server.get('/users', (req, res)=>{
  res.json(Users)
})

server.post('/users', (req, res)=>{
  const details = req.body;
  Users.push(details);
  res.json(Users)
})

server.get('/users/:id', (req, res)=>{
  const {id} = req.params;
  console.log(id);
  const user = Users.find(user => user.id === Number(id))
  console.log(user)
})

server.delete('/users/:id', (req, res)=>{
  const {id} = req.params;
  console.log(id);
  const newUsers = Users.filter(user => user.id !== Number(id))
  res.json(newUsers)
})




const port = 5000;
server.listen(port, ()=>{
    console.log(`sever runnnioiii`)
})
