const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.league = require("./league.model.js")(mongoose);
db.teams = require("./team.model.js")(mongoose);
//db.players = require("./player.model.js")(mongoose);
db.gameweeks = require("./gameweek.model.js")(mongoose);
//db.users = require("./user.model.js");

module.exports = db;
