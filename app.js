const express =require('express');
const app=express();
require('dotenv').config()

const PORT=process.env.PORT;
const cors=require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({message:"Welcome to SeaTF"})
})

app.get('/SeaTF', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader === process.env.AUTHCODE) {
      res.json({ message: 'Success', url: process.env.FLAG_URL });
  } else {
      res.status(403).json({ error: 'Wrong credentials' });
  }
});

app.listen(PORT,() => {
    console.log(`Example app listening on http://localhost:${PORT}`)
  })