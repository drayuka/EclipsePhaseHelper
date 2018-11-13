import * as fs from "fs";
import * as https from "https";
import { Application } from 'express';

export function setupHTTPS(app: Application, port: number) {
    https.createServer({
        key: fs.readFileSync('../server.key'),
        cert: fs.readFileSync('../server.cert')
    }, app)
    .listen(port, function () {
        console.log(`Example app listening on ${port}! Go to https://localhost:${port}/`)
    });
}
