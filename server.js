//setup express
let express = require('express');
let app = express();

//setup path
const path = require('path');

// Morgan
let morgan = require("morgan");
app.use(morgan("dev"));

// mongo DB
let mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/usersSchema'); // <- change db name
let usersSchema = new mongoose.Schema({
    first_name: { type: String, require: true},
    last_name: { type: String, require: true},
    email: { type: String, require: true},
    editable: { type: Boolean, require: true},
})
// set
mongoose.model("User", usersSchema);
// get
let User = mongoose.model("User");

//setup bodyParser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// static folder
app.use(express.static(path.join(__dirname, './public/dist'))); // <- folder name

//setup routes
// get
app.get("/users", (req, res, next) => {
    console.log("Server > GET/users")
    User.find({}, (err, users)=>{
        return res.json(users);
    })
})
// create
app.post("/users", (req, res, next) => {
    console.log("Server > POST/users > user", req.body);
    delete req.body._id
    console.log("Server > POST/users > user", req.body);
    User.create(req.body, (err,user) =>{
        if(err) return res.json(err)
        else return res.json(user)
    })
})
// destroy
app.delete("/users/:id", (req, res, next)=> {
    console.log("Server > DELETE '/users/:id > id ", req.params.id);
    User.deleteOne({_id:req.params.id}, (err, rawData)=>{
        console.log("status", err);
        if(err) return res.json(err)
        else return res.json(true)
    })
})
// edit
app.put("/users/:id", (req, res, next)=> {
    console.log("Server > PUT '/users/:id > id ", req.params.id);
    console.log("Server > PUT '/users/:id > user ", req.body);
    User.update({_id:req.params.id}, req.body,(err, rawDAta)=>{
        if(err) return res.json(err)
        else return res.json(true)
    })
    
})

app.all("*", (req, res, next) => {
    res.sendfile(path.resolve(".public/dist/index.html")) // <- check if path is right
})

//start port
app.listen(8000,function(){
    console.log('listening port 8000');
});