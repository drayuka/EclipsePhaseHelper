import * as session from "express-session";
import * as RedisStore from 'connect-redis';
import * as uuid from 'uuid/v4';
import { Application } from "express";

export function setupSession(app: Application) {
    let redisStore = RedisStore(session);
    //TODO: replace with a better way of storing redis login info
    let sessionOptions = {
        host: '127.0.0.1',
        port: 6379,
        logErrors: true
    }

    app.use(session({
        store:new redisStore(sessionOptions),
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: true,
            secure: true,
            maxAge: 60000
        },
        genid: (req) => {return uuid()}
    }));
}