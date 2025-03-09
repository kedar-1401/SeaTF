const express =require('express');
const app=express();
const PORT=5000;
const cors=require('cors')

require('dotenv').config()
var corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({message:"Welcome to CTF"})
})

app.get('/Auth', (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader === process.env.AUTHCODE) {
      res.json({ message: 'Success', url: 'https://example.com' });
  } else {
      res.status(403).json({ error: 'Wrong credentials' });
  }
});

app.listen(PORT,() => {
    console.log(`Example app listening on http://localhost:${PORT}`)
  })