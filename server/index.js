const express = require('express');
const path = require('path');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const distDir = '../dist';
//Connexion a mongoose
const uri = "mongodb+srv://admin:admin@cluster0.c3vm4.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.set('useUnifiedTopology', true);
const Hardstyle = require('./model/hardstyle.model');

var promise = mongoose.connect(uri, {useNewUrlParser: true});
promise.then((db) =>{
    console.log('DB connected');
    app.listen(3000, () =>{

        //A l'ouverture du serveur je mets ce message d'accueil
        console.log('Server Launch!');
    });
});

app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/, (req, res) =>{
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes:

app.post('/api/hardstyles',(req,res)=> {
    console.log('prout')
    var newHardstyle = new Hardstyle(req.body);
    console.log(newHardstyle)
    newHardstyle.save((err,obj) => {
        if(err) {
            console.log(err);
            return res.send(500);
        }

        res.send(obj);
    });
});


app.get('/api/hardstyles', (req, res) => {
    Hardstyle.find({}, (err,obj)=> {
        if(err) {
            console.log(err);
            return res.send(500);
        }

        return res.send(obj);
    });
});


app.get('/api/hardstyles/:id', (req,res) => {
    Hardstyle.findOne({_id: req.params.id},(err,obj) => {
        if(err) {
            console.log(err);
            return res.send(500);
        }

        return res.send(obj);
    });
});


app.put('/api/hardstyles/:id', (req, res) =>{
    Hardstyle.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}, (err, obj) => {
        if(err){
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

app.delete('/api/hardstyles/:id', (req, res) =>{
    Hardstyle.deleteOne({_id: req.params.id}, (err, obj) =>{
        if(err){
            console.log(err);
            return res.send(500);
        }
        res.status(204).end();
    });
});