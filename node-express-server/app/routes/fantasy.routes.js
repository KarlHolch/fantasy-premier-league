module.exports = app => {
    const fantasy = require("../controllers/fantasy.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/", fantasy.findAll);

    router.get("/teams", fantasy.findAllTeams);

    router.get("/players", fantasy.findAllPlayers);

    router.get("/league", fantasy.getLeagueInfo);

    app.use("/api/fantasy", router);
  };