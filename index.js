require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const SERVER_PORT = 4000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/public/home.html'))
})

//app.listen(SERVER_PORT, () => console.log('Server listening on port ' + SERVER_PORT));

app.listen(process.env.PORT || SERVER_PORT, () =>
    console.log("Server listening on port " + SERVER_PORT)
);