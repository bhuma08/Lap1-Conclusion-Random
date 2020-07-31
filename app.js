const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

//excuses
const excuses = 
["I have to go to pick up my nephew from school",
"It's my turn to do the dishes today",
"I've got stomach cramps, I'm in pain.",
"I have a massive headache, I just need to rest",
"I need to buy a gift for my Mum's birthday",
"OMG! My boyfriend locked himself in our bathroom!",
"I need to drive my mum to work this evening",
"My boss wants me to go over some work before 9am tomorrow",
]

//routes
server.get('/', (req, res) => res.send('Hello, Random Excuse!'))

server.get("/excuse", (req,res)=> res.send(JSON.stringify(excuses)))

server.get("/excuse/random", (req,res)=> res.send(JSON.stringify(random(excuses))))

server.get("/excuse/random/:id", (req, res)=> {
    let a = excuses[req.params.id -1]
a ? res.send(a) : res.send("Please pick a number between 1 and 3.")
})

//random

function random(array){
    let randomGenerator = array[Math.floor(Math.random()*8)]
    return randomGenerator
}






server.listen(port, () => console.log(`Get your expresso at http://localhost:${port}`))