const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  //origin: "http://localhost:8089",
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose.set('strictQuery', false);
db.mongoose
  .connect("mongodb://127.0.0.1:27017/fantasyTest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/fantasy.routes")(app);
require("./routes/database-synchronizer.routes")(app);

// set port, listen for requests
const PORT = 8189;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
