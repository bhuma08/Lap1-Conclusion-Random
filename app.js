const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require("fs-extra");

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

//Access external data storage
// let rawData = fs.readFileSync("excuse.json");
// let excuses = JSON.parse(rawData);
// let excuseID;

//excuses
const excuses = 
["I've to pick up my nephew from school.",
"It's my turn to do the dishes today.",
"My stomach hurts, need iBuprofen ASAP!.",
"I have a massive headache, I just wanna lie down!",
"I need to buy a last minute gift for my dad's birthday.",
"My boyfriend accidently locked himself in the bathroom!",
"I'm driving my mum to work this evening.",
"I have to go over some work before 9am tomorrow.",
"I'm planning a surprise party for a friend!",
"I forgot to take the chicken out of the fridge!!",
"Bank closes at 5, I need to make a deposit.",
"I'm catching up with an old friend later this evening.",
"Guests are cominng over so I have to clean the house.",
"Babysitting lil devils tonight, gtg!",
"My deadline's tomorrow, I've got 1000 words to write.",
"My boyfriend just texted me, he broke his arm.",
"I left my phone at work, need to go before they closes.",
"Hold on , I have to take this phone call.",
"Excuse me, I need to go to the bathroom, brb...",
"I've got diarrhea, I can't hold it any longer!",
"I need to shit and I can't shit in public toilets!",
"It's my brother's parents evening and they can't make it.",
"I have a doctor's appointment at 4!",
"I'm getting a delivery and I need to sign for it.",
"*Just start crying, no explaination needed*",
"I have work early tomorrow!",
"I feel sick, I think I'm gonna throw up!",
"I have a date tonight!!!",
"My friends set me up on a blind date.",
"My parents want me to meet this guy, he's a doctor.",
"I have an event to go to and it's about to start!",
"I'm going to be late for my business meeting.",
"I need my brows done, they're out of control.",
"They just asked me to work last minute :( ",
"I'm going to a family friend's wedding.",
"My wife is in labour, her water just broke!",
"My girl texted she's pregnant, who's the dad tho?",
"I need to catch my man cheating on me!",
"I've got to go to work soon.",
"I've got a job interview to prepare for.",
"I lost a bet so I need to cook dinner tonight.",
"My yoga class starts in half an hour.",
"My gym buddy wants to hit the gym now.",
"My mum wants me to drop by Tescos and buy milk.",
"My boyfriend has something very very important!",
"It's not you, it's me...",
"I'm late for my own party!",
"It's my birthday today and I have other plans.",
"*Act like you've just seen a ghost*",
"I'm helping my friend move in to her new flat."
]

//routes
server.get('/', (req, res) => res.send('Hello, Random Excuse!'))

server.get("/excuse", (req,res)=> res.send(JSON.stringify(excuses)))

server.get("/excuse/random", (req,res)=> res.send(JSON.stringify(random(excuses))))

server.get("/excuse/random/:id", (req, res)=> {
    // excuseID = Number(req.params.id);
    // res.send(JSON.stringify(excuses[excuseID]))
    let a = excuses[req.params.id -1]
    a ? res.send(a) : res.send("Please pick a number between 1 and 3.")
});

//random

function random(array){
    let randomGenerator = array[Math.floor(Math.random()*50)]
    return randomGenerator
}






server.listen(port, () => console.log(`Get your expresso at http://localhost:${port}`))