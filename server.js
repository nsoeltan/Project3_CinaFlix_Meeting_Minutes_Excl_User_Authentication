const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/releasenotes",
  {
    useMongoClient: true
  }
);


// mongoose.Promise = global.Promise;

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://heroku_lk1n3656:a6b0c6q7o34a788e3b0eti3qva@ds155634.mlab.com:55634/heroku_lk1n3656",
//   {
//     useMongoClient: true
//   }
// );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
