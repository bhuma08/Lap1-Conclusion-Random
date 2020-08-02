const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require("fs-extra");

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

//Access external data storage
let rawData = fs.readFileSync("excuse.json");
let excuses = JSON.parse(rawData);
let excuseID;

//routes
server.get('/', (req, res) => res.send('Hello, Random Excuse!'))

server.get("/excuse", (req,res)=> res.send(JSON.stringify(excuses)))

server.get("/excuse/random", (req,res)=> res.send(JSON.stringify(random(excuses.excuse))))

server.get("/excuse/random/:id", (req, res)=> {
    excuseID = Number(req.params.id);
    res.send(JSON.stringify(excuses.excuse[excuseID]))
});

//random
function random(array){
    let randomGenerator = array[Math.floor(Math.random()*50)]
    return randomGenerator
}

server.listen(port, () => console.log(`Get your expresso at http://localhost:${port}`))