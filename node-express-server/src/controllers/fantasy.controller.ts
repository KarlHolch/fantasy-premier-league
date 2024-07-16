import { Request, Response } from 'express';
import db from '../models';
import Gameweek from '../models/gameweek.model';
import { searchByCustomField } from '../utility/search';
const Users = db.users;

// Retrieve all Users from the database.
export const getUsers = (req: Request, res: Response): void => {
    Users.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

export const getUser = (req: Request, res: Response): void => {
    Users.findOne({ apiId: req.params.id }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    });
};

export const getGameweek = (req: Request, res: Response): void => {
    Gameweek.findOne({ apiId: req.params.id }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving gameweek."
        });
    });
};

export const getCurrentGameweek = (req: Request, res: Response): void => {
    Gameweek.findOne({ is_current: true }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving gameweek."
        });
    });
};

export const getPlayers = async (req: Request, res: Response): Promise<void> => {
    // Get the list of numbers from the request body
  const ids: string[] = req.body.ids;

  // Check if the numbers array is provided and is an array
  if (!Array.isArray(ids)) {
    res.status(400).json({ error: 'Please provide a valid array of numbers.' });
  }

  await searchByCustomField('players', 'apiId', ids).then((players) => {
    res.json(players);
  }).catch((err) => {
    res.status(500).json({ error: err });
  });
}

