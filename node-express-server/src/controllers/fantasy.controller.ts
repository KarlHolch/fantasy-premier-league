import { Request, Response } from 'express';
import db from '../models';
import Gameweek from '../models/gameweek.model';
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
