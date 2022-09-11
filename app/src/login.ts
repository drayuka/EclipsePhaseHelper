import * as express from "express";
import { Application } from "express";

export function login(app: Application) {
    app.get('/login', (req, res) => {
        let creds;
        if(req.body) {
            creds = JSON.parse(req.body);
            if(creds.username == 'shockfist' && creds.password == 'shockfist') {
                res.status(200).send('cookie');
            }
        } else {
            res.status(400).send('Did not send credentials');
        }
    });
}
