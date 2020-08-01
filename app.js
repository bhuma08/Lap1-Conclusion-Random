const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

//excuses
const excuses = 
["I've to pick up my nephew from school",
"It's my turn to do the dishes today",
"My stomach hurts, need iBuprofen ASAP!.",
"I have a massive headache, I just wanna lie down!",
"I need to buy a last minute gift for my dad's birthday",
"My boyfriend accidnetly locked himself in the bathroom",
"I'm driving my mum to work this evening",
"My boss wants me to go over some work before 9am tomorrow",
"I'm planning a surprise party for a friend!",
"I forgot to take the chicken out of the fridge",
"Bank closes at 5, I need to make a deposit.",
"I'm catching up with an old friend later this evening.",
"Guests are cominng over so I have to clean the house",
"Babysitting lil devils tonight, gtg!",
"My deadline's tomorrow, I've got 1000 words to write.",
"My boyfriend just texted me, he broke his arm.",
"Ah I left my phone at work, need to go before they closes.",
"Hold on , I have to take this phone call.",
"Excuse me, I need to go to the bathroom, brb...",
"I've got diarrhea, I can't hold it any longer",
"I need to shit and I can't shit in public toilets",
"It's my brother's parents evening and they can't make it",
"I have a doctor's appointment at 4!",
"I've got an important delivery today, I need sign for it",
"*Just start crying, no explaination needed*",
"I have work early tomorrow!",
"I feel sick, I think I'm gonna throw up",
"I have a date tonight",
"My friends set me up on a blind date",
"My parents want me to meet this guy, apparently he's a doctor",
"I have another event to go to and it's about to start!",
"I'm going to be late for my business meeting.",
"I need to get my brows done, they're growing out of control",
"They're looking for last minute workers, double the pay!",
"I'm going to a family friend's wedding",
"My wife is in labour, her water just broke!",
"My girlfriend found out she's pregnant, who's the dad tho?",
"I think my man's cheating on me, I need to find out",
"I've got to go to work soon.",
"I've got a job interview to prepare for.",
"I lost a bet so I need to cook dinner tonight.",
"My yoga class starts in half an hour.",
"My gym buddy wants to hit the gym now.",
"My mum wants me to drop by Tescos and buy milk.",
"My boyfriend has something very very very important",
"It's not you, it's me...",
"I'm late for my own party!",
"It's my birthday today and I have plans with my friends.",
"*Act like you've just seen a ghost*",
"I'm helping my friend move in to her new flat.",
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
    let randomGenerator = array[Math.floor(Math.random()*50)]
    return randomGenerator
}






server.listen(port, () => console.log(`Get your expresso at http://localhost:${port}`))