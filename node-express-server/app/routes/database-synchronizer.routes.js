module.exports = app => {
    const databaseSynchronizer = require("../controllers/database-synchronizer.controller.js");
  
    var router = require("express").Router();

    router.get("/base-info", databaseSynchronizer.updateBaseInfo);
  
    app.use("/api/database-synchronize", router);
  };