const path = require("path");

module.exports = (app) => {
  //ROUTES
  //HTML route to the main page
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/views/index.html"))
  );

  //HTML route to the note taking page
  app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/views/notes.html"))
  );

  app.get('*', (req,res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
);

}
