import { Request, Response } from 'express';
import { distributeGoodies } from '../services/goodieService';
import { Goodie } from '../models/goodie';

export const distribute = (req: Request, res: Response): void => {
    const numEmployees: number = req.body.numEmployees;
    const goodies: Goodie[] = req.body.goodies.map((g: { name: string, price: number }) => new Goodie(g.name, g.price));

    if (goodies.length < numEmployees) {
        res.status(400).json({ error: 'Not enough goodies for the number of employees' });
        return;
    }

    const result = distributeGoodies(numEmployees, goodies);
    res.json(result);
};

