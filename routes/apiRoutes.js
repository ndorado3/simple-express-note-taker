//fs = file system
const path = require("path");

const fs = require("fs");

// JSON Database
const db = require("../db/db.json");

module.exports = (app) => {
  //API that creates data
  app.post("/api/notes", (req, res) => {
    db.push(req.body);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(db),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
    res.json(db);
  });

  app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  app.delete("/api/notes/:title", (req, res) => {
    const titleNote = JSON.parse(req.params.title);
    fs.readFile(__dirname, "../db/db.json", "utf8", (err, notes) => {
        if (err) {
          throw err;
        }
        notes = JSON.parse(notes);
        notes = notes.filter((val) => val.title !== titleNote);
        fs.writeFile(
          __dirname,
          "../db/db.json",
          JSON.stringify(notes),
          (err, data) => {
            if (err) throw err;
          }
        );
        res.json(notes);
    });
  });
};
// app.get("/api/notes/:id", (req, res) => {
//   res.json(savedNotes[req.params.id]);
// });
// const savedNotes = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8")
// );

// //Reading data
// app.get("/api/notes/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../db/db.json"));
// });
