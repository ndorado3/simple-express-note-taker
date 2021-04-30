//Express package
const express = require("express");
const application = express();



//Seting up the port
//env = envirament variable
//First chaeck if a port is available if not use port 5500
const PORT = process.env.PORT || 5500;

//Express application handiling data parsing
application.use(express.urlencoded({ extended: true }));
application.use(express.json());
//Every file under public is available
application.use(express.static('./public'));

//Creates modular routes
require('./routes/apiRoutes')(application)
require('./routes/viewRoutes')(application)

application.listen(PORT, () => {
    console.log(`App is currently running on port ${PORT}`);
  });
  