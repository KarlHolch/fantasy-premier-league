const axios = require('axios');
const db = require("../models");
const League = db.leagues;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    //res.json({message: "response from findAll in fantasy.controller.js"});
    
    axios.get('https://fantasy.premierleague.com/api/entry/4739824/')
        .then(response => {
            const { name, player_first_name, player_last_name } = response.data;
            const playerName = `${player_first_name} ${player_last_name}, team name: ${name}`;
            res.json({ message: playerName });
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving data."
            });
        });
};


// Retrieve all Tutorials from the database.
exports.findAllTeams = (req, res) => {
    //res.json({message: "response from findAll in fantasy.controller.js"});
    
    axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then(response => {
            const teamNames = response.data.teams.map(team => team.name);
            res.json(teamNames);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving data."
            });
        });
};


exports.findAllPlayers = (req, res) => {
    //res.json({message: "response from findAll in fantasy.controller.js"});
    
    axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then(response => {
            const info = response.data.elements.map(info =>`${info.first_name} ${info.second_name}: id: ${info.id}, total points: ${info.total_points}`);
            res.json(info);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving data."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.getLeagueInfo = (req, res) => {
    const title = req.query.title;
  
    League.find()
      .then(data => {
        res.send(data[0]);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };