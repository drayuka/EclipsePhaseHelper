import * as express from "express";
import { Application } from "express";

export function setupStaticContent(app: Application) {
    let nodePackageOptions = {
        dotfiles: 'ignore',
        extensions: ['js'],
    };
    
    let clientAppOptions = {
        dotfiles: 'ignore',
        extensions: ['js','htm','html']
    }
    
    app.use('/static', express.static(__dirname + '/../../../../node_modules/',nodePackageOptions));
    app.use('/static', express.static(__dirname + '/../../../../helper/web/base/',clientAppOptions));
}