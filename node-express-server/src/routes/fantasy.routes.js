module.exports = app => {
    const fantasy = require("../controllers/fantasy.controller.js");
  
    var router = require("express").Router();

    router.get("/users", fantasy.getUsers);

    router.get("/gameweek/current", fantasy.getCurrentGameweek);

    router.get("/gameweek/:id", fantasy.getGameweek);

    app.use("/api/fantasy", router);
  };