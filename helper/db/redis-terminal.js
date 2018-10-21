"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("redis");
const readline = require("readline");
let client = redis.createClient();
client.on("error", function (err) {
    console.log("Error " + err);
});
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
client.add_command("json.set");
client.add_command("json.get");
rl.on('line', (input) => {
    let commands = input.split(' ');
    let commandName = commands.shift();
    client.send_command(commandName, commands, redis.print);
});
