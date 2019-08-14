import * as express from "express";


export function setupRedirect() {
    const redirect = express();

    redirect.use(function (req, res, next) {
        if(!req.secure) {
            return res.redirect(['https://', req.get('Host'), req.url].join(''));
        }
    });
    
    redirect.get('*', (req, res) => res.send(''));
    redirect.listen(80, () => console.log('redirecter is listening on port 80 for anyone not using https'));

}