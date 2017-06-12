const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const api = require("./server/routes/api");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/myappdatabase');
mongoose.connection.once('open', function(){
    console.log('connection has been made !!!');
}).on('error', function(error){
    console.log("connection error:"+error);
});

mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

const server = app.listen(3000, ()=>{
    console.log("Listening to port: "+server.address().port)
});
