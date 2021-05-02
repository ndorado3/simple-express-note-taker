//Express package
const express = require("express");
const app = express();

//Seting up the port
//env = environment variable
//First chaeck if a port is available if not use port 5500
const PORT = process.env.PORT || 5500;

//Express app handiling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Every file under public is available
app.use(express.static("./public"));

//Creates modular routes
require("./routes/apiRoutes")(app);
require("./routes/viewRoutes")(app);

app.listen(PORT, () => {
  console.log(`App is currently running on port ${PORT}`);
});
