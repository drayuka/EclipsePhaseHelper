import * as express from "express";
import { setupRedirect } from './redirect';
import { setupSession } from './session/setup';
import { setupHTTPS } from './https/setup';
import { setupStaticContent } from './static/setup';

//sets up redirect from http to https
setupRedirect();

const app = express();

//sets up session
setupSession(app);

const port = 443;

//sets up https
setupHTTPS(app, port);

//sets up static content serving
setupStaticContent(app);



app.get('/', (req, res) => {
    let options = {
        root: __dirname + '/../../../helper/web/'
    };
    res.sendFile('base/main.html', options);
});

app.get('/logout', (req, res) => {
    if(req.session) {
        let username = req.session.username;
        req.session.destroy(function(err) {
            console.log(username + ' has successfully logged out');
        });
    }
});



