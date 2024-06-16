const db = require("../models");
const Users = db.users;

// Retrieve all Users from the database.
exports.getUsers = (req, res) => {
    Users.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };
  