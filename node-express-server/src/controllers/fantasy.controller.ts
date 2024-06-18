import { Request, Response } from 'express';
import db from '../models';
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
