module.exports = app => {
    const fantasy = require("../controllers/fantasy.controller.js");
  
    var router = require("express").Router();

    router.get("/users", fantasy.getUsers);

    router.get("/current-gameweek", fantasy.getCurrentGameweek);

    app.use("/api/fantasy", router);
  };