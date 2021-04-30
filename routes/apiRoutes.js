//fs = file system
const fs = require("fs");

// JSON Database
const db = require("../db/db.json");

module.exports = (application) => {
  //API that creates data
  application.post("/api/notes", (req, res) => {
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

  //Reading data
  application.get("/api/notes", (req, res) => {
    res.json(db);
  });
};
