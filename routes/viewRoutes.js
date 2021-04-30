const path = require("path");

module.exports = (application) => {
  //ROUTES
  //HTML route to the main page
  application.get("/", (req, res) =>
    res.sendFile(path.join(__dirname,'../public/views/index.html'))
  );

  //HTML route to the note taking page
  application.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname,'../public/views/notes.html'))
  );

//   application.get("/notes", (req, res) => {
//     const newNote = req.body;
//   });
};
