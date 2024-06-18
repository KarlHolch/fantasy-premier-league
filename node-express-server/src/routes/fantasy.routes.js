module.exports = app => {
    const fantasy = require("../controllers/fantasy.controller.js");
  
    var router = require("express").Router();

    router.get("/users", fantasy.getUsers);

    app.use("/api/fantasy", router);
  };