//Express package
const express = require('express');
const application = express();

// JSON Database
let db = require('./db/db.json');

//Seting up the port
const PORT = process.env.PORT || 5500;

//Express application handiling data parsing
application.use(express.urlencoded({ extended: true }));
application.use(express.json());
//Every file under public is available
application.use(express.static('./public'));

//ROUTES
//HTML route to the mian page
application.get('/', function (req, res) {
  res.sendFile(`${__dirname}/public/views/index.html`);
});

//HTML route to the note taking page
application.get('/notes', function (req, res) {
  res.sendFile(`${__dirname}/public/views/notes.html`);
});

//API route to the database
application.get('/api/notes', function (req, res) {
  res.json(db);
});

//sets up the notes route 
application.post('/api/notes', function(req,res){
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});



application.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`);
});
